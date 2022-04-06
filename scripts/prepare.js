/*
 * @Description: 项目初始化
 * @Author: Mankeung
 * @Date: 2022-04-01 16:17:17
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-04-01 20:23:42
 */

const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { prompt } = require('enquirer')
const chalk = require('chalk')

const funExec = commd => {
  return new Promise(resolve => {
    exec(commd, (err, stdout) => {
      if (err) return resolve('')
      return resolve(stdout)
    })
  })
}

const init = async () => {
  const arr = ['pnpm', 'yarn', 'npm']
  let name = ''

  for (let i = 0; i < arr.length; i++) {
    name = await funExec(`${arr[i]} --version`)

    if (name) {
      name = arr[i]
      break
    }
  }

  if (!name) throw '一个包管理工具都没有~'

  await funExec('git init')

  funExec('npx husky install').then(d => {
    if (!d) throw 'npx husky install error'

    console.clear()
    console.log(chalk.cyan('🔧 husky install...'))

    prompt([
      {
        type: 'confirm',
        name: 'q1',
        message: '是否需要eslint',
        initial: true
      },
      {
        type: 'confirm',
        name: 'q2',
        message: '是否需要commitlint',
        initial: true
      },
    ]).then(async answer => {
      const commitMsg = path.resolve(process.cwd(), '.husky', 'commit-msg')
      const commitPre = path.resolve(process.cwd(), '.husky', 'pre-commit')

      if (fs.existsSync(commitMsg)) fs.unlinkSync(commitMsg)
      if (fs.existsSync(commitPre)) fs.unlinkSync(commitPre)

      if (answer.q1) {
        const d = await funExec(`npx husky add .husky/pre-commit "${name} run test"`)
        if (d) console.log(chalk.cyan(d))
      }

      if (answer.q2) {
        const d = await funExec('npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""')
        if (d) console.log(chalk.cyan(d))
      }

      console.log(chalk.cyan('🎊项目初始化完成'))
    })
  })
}

init()
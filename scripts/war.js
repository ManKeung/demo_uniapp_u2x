/*
 * @Description: h5静态文件war包
 * @Author: Mankeung
 * @Date: 2022-04-01 20:34:46
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-04-01 23:07:55
 */

const zipFolder = require('folder-zip-sync')
const pkg = require('../package.json')

zipFolder('./unpackage/dist/build/h5', `./unpackage/dist/build/h5/${pkg.warName}.war`)
/*
 * @Description: 配置
 * @Author: Mankeung
 * @Date: 2022-03-31 15:42:09
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-04-06 14:51:56
 */

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'
import navbar from './navbar'
import sidebar from './sidebar'
import * as CONF from './conf'

const baseURL: any = process.env.NODE_ENV === 'development' ? '/' : `/${CONF.GIT_NAME}/`

console.log(path.resolve(process.cwd(), ''))

export default defineUserConfig<DefaultThemeOptions>({
    dest: path.resolve(process.cwd(), 'www'), // 打包输出目录
    // 开发配置
    port: CONF.PORT,
    open: CONF.OPEN,

    // 站点配置
    base: baseURL, // 站点基础路径
    lang: 'zh-CN', // 语言配置 默认 en-US
    title: CONF.COMP_NAME, // 站点title
    description: '好记性不如烂笔头！', // 站点描述
    head: [['link', { rel: 'icon', href: `${baseURL}assets/logo.png` }]], // 设置head

    // 主题和其他配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/assets/logo.png',
        logoDark: '/assets/logo.png', // 夜间模式logo null 禁用
        darkMode: true, // 是否启用夜间模式 默认启用
        repo: `${CONF.GIT_URL}/${CONF.GIT_NAME}`, // 项目仓库的 URL vuejs/vuepress
        editLink: true, // 编辑页面
        lastUpdated: true, // 启用更新时间
        contributors: true, // 贡献者启用
        home: '/', // 首页路径
        selectLanguageText: '语言', // 选择语言菜单的文字
        selectLanguageName: '简体中文',
        backToHome: '回到首页', // 回到首页
        toggleDarkMode: '模式切换', // 模式切换
        toggleSidebar: '切换侧边栏',
        notFound: ['页面丢了哟~', '没发现呀~'],
        editLinkText: '发现了错误或者想要为文档做贡献？Gitee',
        docsRepo: `${CONF.GIT_URL}/${CONF.GIT_NAME}`,
        docsBranch: CONF.DOCS_BRANCH,
        docsDir: CONF.DOCS_DIR,
        lastUpdatedText: '最近更新时间：',
        contributorsText: '贡献者：',
        navbar,
        sidebarDepth: 3,
        sidebar,
        // 插件配置
        themePlugins: {
            backToTop: true,
            nprogress: true,
            git: true,
            externalLinkIcon: true
        }
    },
    markdown: {
        importCode: {
            handleImportPath(str) {
                return str.replace(/^@/, path.resolve(process.cwd(), ''))
            }
        },
    },
    alias: {
        '@': path.resolve(process.cwd(), '')
    },
    plugins: [
        [
            '@snippetors/vuepress-plugin-code-copy', {
                successText: '复制成功~'
            }
        ]
    ]
})

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    var HREF = ''

    app.mixin({
        mounted() {
            const href = window.location.href
            let time = 3 * 1000
            if (HREF === href) return
            if (HREF) time = 1000
            HREF = href
            this.timer && clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                window.dispatchEvent(
                    new Event('snippetors-vuepress-plugin-code-copy-update-event')
                )
            }, time)
        },
        unmounted() {
            this.timer && clearTimeout(this.timer)
        }
    })
})
import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("CodeOpen", defineAsyncComponent(() => import("E:/Project/uniapp2x/docs/.vuepress/components/CodeOpen.vue"))),
  app.component("CodeType", defineAsyncComponent(() => import("E:/Project/uniapp2x/docs/.vuepress/components/CodeType.vue"))),
  app.component("Tip", defineAsyncComponent(() => import("E:/Project/uniapp2x/docs/.vuepress/components/Tip.vue")))
}

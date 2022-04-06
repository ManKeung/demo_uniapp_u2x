import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1463e7e5","/care/",{"title":"注意事项"},["/care/index.html","/care/README.md"]],
  ["v-1020f180","/components/",{"title":"组件"},["/components/index.html","/components/README.md"]],
  ["v-8a14f834","/guide/deploy.html",{"title":"构建部署"},["/guide/deploy","/guide/deploy.md"]],
  ["v-060a5240","/guide/illustrate.html",{"title":"介绍"},["/guide/illustrate","/guide/illustrate.md"]],
  ["v-fffb8e28","/guide/",{"title":"开始"},["/guide/index.html","/guide/index.md"]],
  ["v-744a811d","/npm/",{"title":"第三方NPM"},["/npm/index.html","/npm/README.md"]],
  ["v-156a1114","/util/",{"title":"工具"},["/util/index.html","/util/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

import { defineUserConfig } from 'vuepress'
import {defaultTheme} from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'javadoc',
  description: '这是我的第一个 javadoc 站点',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: '数据库',
        link: '/database/',
      },
      // // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
      // 字符串 - 页面文件路径
      //'/bar/README.md',
    ],
  }),
})
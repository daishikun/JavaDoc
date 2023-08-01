import { defaultTheme } from '@vuepress/theme-default'

export default {
    theme: defaultTheme({
      navbar: [
        // NavbarItem
        {
          text: 'Foo',
          link: '/foo/',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    }),
  }
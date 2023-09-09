import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "favicon.png" }]],
  title: "coin-ui",
  description: "ui",
  base: "/coin-ui/",
  themeConfig: {
    // 主页左上角logo
    logo: "/favicon.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/document/install" },
    ],

    sidebar: [
      {
        text: "组件使用",
        items: [
          { text: "安装", link: "/document/install" },
          { text: "按钮", link: "/document/button" },
          { text: "消息提示", link: "/document/message" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/alex12306/coin-ui" },
    ],
  },
});

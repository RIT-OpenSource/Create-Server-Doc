import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "zh-CN",
    title: "RIT Create Document",
    description: "RIT 机械动力服务器文档站",
    titleTemplate: "RIT 机械动力",
    srcDir: "./src",
    outDir: "./dist",
    themeConfig: {
        nav: [{ text: "主页", link: "/" }],
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
        sidebar: [
            {
                text: "规则",
                items: [
                    {
                        text: "第零章：引言",
                        link: "/docs/Rules/0-intro.md",
                    },
                ],
                collapsed: true,
            },
        ],
        socialLinks: [],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present RIT 机械动力服务器",
        },
    },
});

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "RIT Create Document",
    description: "RIT 机械动力服务器文档站",
    titleTemplate: "RIT 机械动力",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "主页", link: "/" }],
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
        sidebar: [
            {
                text: "规则",
                items: [
                    {
                        text: "第一章：基本规定",
                        link: "/docs/Rules/1-basic.md",
                    },
                    {
                        text: "第二章：管理模式",
                        link: "/docs/Rules/2-controling.md",
                    },
                ],
            },
        ],
        socialLinks: [],
    },
});

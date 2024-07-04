import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/Layout.vue";
import "./css/index.css";

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
};

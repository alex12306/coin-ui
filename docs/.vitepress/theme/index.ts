// 引入默认主题，并引入自己的样式来覆盖它
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import ui from "coin-ui";
import "coin-ui/style";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(ui);
  },
};

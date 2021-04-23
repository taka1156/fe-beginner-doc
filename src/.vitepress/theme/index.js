import Theme from 'vitepress/theme';
import WritersBox from '../components/WritersBox.vue';

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('writers-box', WritersBox);
  },
};

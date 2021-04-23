module.exports = {
  title: 'Welcome to Frontend World',
  description:
    'このサイトは🔰初心者向けのフロントエンド向けの情報をまとめるサイトです。',
  head: [
    ['meta', { property: 'og:image', content: '/fe-beginner-doc/site/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/fe-beginner-doc/site/logo.png' }],
  ],
  base: '/fe-beginner-doc/',
  themeConfig: {
    repo: 'taka1156/fe-beginner-doc',
    logo: '/site/logo.png',
    editLinks: true,
    editLinkText: 'このページをgithubで編集',
    lastUpdate: '最終更新',
    docsDir: 'docs',
    docsBranch: 'master',

    nav: [
      {
        text: '公式リンク',
        items: [
          {
            text: 'Vue',
            link: 'https://v3.ja.vuejs.org/',
          },
          {
            text: 'React',
            link: 'https://ja.reactjs.org/',
          },
          {
            text: 'Vite',
            link: 'https://vitejs.dev/',
          },
          {
            text: 'github pages',
            link:
              'https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages',
          },
        ],
      },
    ],

    sidebar: [
      { text: '0. はじめに', link: '/docs/index' },
      { text: '1. Vueでのサイト作成', link: '/docs/1_vue' },
      { text: '2. Reactでのサイト作成', link: '/docs/2_react' },
      { text: '3. その他サイト', link: '/docs/3_other' },
      { text: '4. github pagesデプロイ', link: '/docs/4_githubpages' },
      { text: '5. 発展: viteを使った環境構築', link: '/docs/5_ex_vite' },
      { text: '6. 発展: spaページで404が出る', link: '/docs/6_ex_spa' },
      { text: '7. 発展: linterを入れよう', link: '/docs/7_ex_linter' },
      { text: '8. 編集者、管理者', link: '/docs/writers' },
    ],
  },
};

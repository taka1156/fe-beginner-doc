module.exports = {
  title: 'Welcome to Frontend World',
  description:
    'このサイトはフロントエンド🔰初心者向けの情報をまとめるサイトです。',
  head: [
    [
      'meta',
      { property: 'og:image', content: '/fe-beginner-doc/site/logo.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/fe-beginner-doc/site/logo.png',
      },
    ],
  ],
  base: '/fe-beginner-doc/',
  themeConfig: {
    repo: 'taka1156/fe-beginner-doc',
    logo: '/site/logo.png',
    editLinks: true,
    editLinkText: 'このページをgithubで編集',
    lastUpdate: '最終更新',
    docsDir: 'src',
    docsBranch: 'master',

    nav: [
      {
        text: 'NAVI',
        items: [
          { text: 'Top', link: '/0_docs/' },
          { text: 'Vue', link: '/1_vue/' },
          { text: 'React', link: '/2_react/' },
          { text: 'Svelte', link: '/3_svelte/' },
          { text: 'other site', link: '/4_other/' },
          { text: 'Github Pages', link: '/5_githubpages/' },
          { text: '発展', link: '/6_ex/' },
        ],
      },
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
            text: 'Svelte',
            link: 'https://sveltejp.dev/',
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
      {
        text: 'コミュニティ',
        items: [
          {
            text: 'vuejs-jp',
            link: 'https://vuejs-jp.org/',
          },
          {
            text: 'svelte-jp',
            link: 'https://github.com/svelte-jp',
          },
        ],
      },
    ],

    sidebar: {
      '/1_vue/': 'auto',
      '/2_react/': 'auto',
      '/3_svelte/': 'auto',
      '/4_other/': 'auto',
      '/5_githubpages/': 'auto',
      '/6_ex/': 'auto',
      '/': [
        { text: '0. はじめに', link: '/0_docs/' },
        {
          text: '1. Vueを利用したサイト作成',
          link: '/1_vue/',
        },
        {
          text: '2. Reactを利用したサイト作成',
          link: '/2_react/',
        },
        {
          text: '3. Svelteを利用したサイト作成',
          link: '/3_svelte/',
        },
        { text: '4. その他サイト', link: '/4_other/' },
        {
          text: '5. github pagesデプロイ',
          link: '/5_githubpages/',
        },
        {
          text: '6. 発展',
          link: '/6_ex/',
        },
        { text: 'リポジトリ一覧', link: '/0_docs/repos' },
        { text: '編集者、管理者一覧', link: '/0_docs/writers' },
      ],
    },
  },
};

# 3. Svelteを利用したサイト作成

## 3 - 1. svelteの環境構築
 **[Why fork ?](https://github.com/tiged/tiged#why-fork)**
  > degit was last released over a year ago Feb 5, 2020, and Rich is not answering pull 
  > requests or issues there. He is probably very busy with Svelte and we love him for that.
  > Rich has now (April 1, 2021) merged the main branch fix. I'm monitoring the need of this 
  > fork. Currently this fork is still more fully featured

  **google 翻訳**
  > degitは1年以上前の2020年2月5日に最後にリリースされましたが、Richはプルリクエストや問題に対応していませ
  >ん。彼はおそらくSvelteで非常に忙しいので、私たちは彼が大好きです。Richは現在（2021年4月1日）メインブラン
  > チの修正をマージしました。私はこのフォークの必要性を監視しています。現在、このフォークはさらに完全な機能を
  > 備えています

  **ざっくりいうと、「Rich さんは、Svelte の開発で忙しくて degit の修正ができてないよ。けど、私たちで、修正版(tiged)を作ってみたよ」ということ?**

  ::: tip
  Qiita では、`degit` の記事が多く出てきますがエラーが頻発するので、`tiged` を使う方法で進めます。
  :::


1. tiged を導入します。

    ```shell
    npm install -g tiged
    # OR
    yarn global add tiged
    ```

2. ヘルプが出るか確認(version コマンドがないみたい?)

    ```shell
      degit --help
    ```

    ::: tip 🎉 success
    コマンドリストが返ってきたら成功です。

    (インストールするのは `tiged` ですが、コマンドは `degit` なので注意!)
    :::

## 3 - 2. プロジェクト作成

1. ターミナルで以下のコマンドを実行し、プロジェクトを作成します。

    ```shell
      cd プロジェクトを格納するフォルダ(c:Desktop/project_svelteなど)

      degit sveltejs/template プロジェクト名
      # OR
      degit sveltejs/template プロジェクト名
    ```

    プロジェクトがクローンされます。

1. 生成されたフォルダに移動して以下を実行

    ```shell
      npm install
      # OR
      yarn install
    ```

    モジュールのインストールが始まりターミナルにずらーっと文字が流れていきます。
    ![svelte_complete_install](/article/3_svelte/create_project/complete_install.png)
    

1. 生成されたフォルダに移動して、実際にプロジェクトを覗いてみましょう。

   (npm でインストールした場合 yarn.lock -> package-lock.json になっていますが問題ありません。)

    <img src="/article/3_svelte/create_project/project_folder.png" alt="svelte_project_folder" style="width: 50%; height: 50%;">

1. `package.json`を開いてみましょう。
   
   <img src="/article/3_svelte/create_project/package_json.png" alt="svelte_package_json" style="width: 65%; height: 50%;">
   
   赤枠より上が、このプロジェクトの情報、赤枠の中が開発時に使うスクリプト、 赤枠より下はインストールしたモジュールになっています。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run dev
      # OR
      yarn dev
    ```
   
   ![svelte_yarn_dev](/article/3_svelte/create_project/yarn_dev.png)
   `Local:` のリンクにポインターを合わせて `cmd + click` or `ctrl + click` をしてみましょう。

   
   <img src="/article/3_svelte/create_project/lunch_site.png" alt="svelte_lunch_site" style="width: 50%; height: 50%;">

    ::: tip 🎉 success
    この画面が出たら成功です。
    :::

   ターミナル上で `ctrl + c` を行いローカルサーバを閉じます。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run build
      # OR
      yarn build
    ```
    
    ![svelte_yarn_build](/article/3_svelte/create_project/yarn_build.png)
    これが出てきて、`public` の中に `build` というフォルダが生成されていたら成功です。

    ::: tip
    基本的に開発中は `npm run dev(yarn dev)` で、画面を見つつコーディングを行います。

    本番(デプロイ)では、`npm run build(yarn build)` で `public` 中に、`build` が生成されるので `public` ごとサーバに配置するという流れになります。
    :::

## 3 - 3 svelte基本構文
今回のプロジェクトで使う構文を簡単に説明します。

- リストレンダリング<br>
  配列、オブジェクトなどを展開しながら要素をひとつずつ表示

  ```html
    <script>
      // 1 ~ 10の配列
      let nums = [...new Array(10)].map((v, i) => i + 1);
    </script>
  
    {#each nums as num}
      <div key={num} class="nav__item">
      {num}
      </div>
    {/each}
  ```

- 条件付きレンダリング<br>
  値によって、表示する内容を変える

  ```html
  <script>
    let x = 10;
  </script>
  
  {#if x > 10}
    <p>{x}は、10より大きい</p>
  {:else if x < 5}
    <p>{x}は、5より小さい</p>
  {:else}
    <p>{x}は、5と10の間</p>
  {/if}
  ```

## 3 - 4. svelte-spa-routerの導入

1. `svelte-spa-router` をインストールします。
    ```shell
    npm install svelte-spa-router
    #OR
    yarn add svelte-spa-router
    ```

1. `src/constants/index.js` を作成し以下を記載してください。<br>
   (ナビゲーションバーで使用するルーティング定義です。)

    ```javascript
    const routesNav = [
      {
        name: 'Top',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
    ];

    export { routesNav }
    ```

1. `src/components/Navigation/Navigation.svelte` を作成し、以下のようにします。
   ```html
    <script>
      import { link } from 'svelte-spa-router';
      import { routesNav } from '../../constants/index.js';
    </script>

    <div>
      <nav>
        <ul class="nav">
          {#each routesNav as route}
            <li key={route.name} class="nav__item">
              <a class="nav__item--link" href={route.path} use:link>
                {route.name}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <style>
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      a {
        text-decoration: none;
      }

      .nav {
        display: flex;
        justify-content: space-between;
        height: 5vh;
      }

      .nav__item {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0 auto;
        text-align: center;
        background-color: orangered;
        border: 1px solid white;
      }

      .nav__item--link {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 5vh;
        color: white;
      }
    </style>
   ```

1. `src/view` フォルダを作成し、配下に `About/About.svelte`、`Top/Top.svelte` を作ります。
   
    **Top.svelte**
    ```html
      <script>
        let name = 'world';
      </script>

      <div>
        <h1>Svelte App</h1>
        <img src="./static/svelte.svg" alt="svelte logo" class="logo">
        <p class="welcome">Hello {name}!</p>
        <p>
          Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
          how to build Svelte apps.
        </p>
      </div>

      <style>
        .welcome {
          color: #ff3e00;
          text-transform: uppercase;
          font-size: 4em;
          font-weight: 10;
          margin: 10px;
        }

        .logo {
          height: 50%;
          width: 50%;
        }
      </style>
    ```

    **About.svelte**
    ```html
      <h1>About</h1>
    ```

1. `src/routes/index.js`を作成し、ルーティング定義を記載します。
   ```javascript
    import Top from '../view/Top.svelte';
    import About from '../view/About.svelte';

    const routes = {
      '/': Top,
      '/about': About,
    };

    export { routes };
   ```

1. `src/App.svelte`を以下のように差し替えます。
   ```html
    <script>
      import Router from 'svelte-spa-router';
      import Navigation from './components/Navigation/Navigation.svelte';
      import { routes } from './routes/index.js';
    </script>

    <Navigation />
    <main>
      <Router {routes} />
    </main>

    <style>
      main {
        text-align: center;
        padding: 1em;
        width: 80%;
        margin: 0 auto;
      }
    </style>
   ```

1. `public/static` に画像を追加してください。<br>
   こちらから取得できます。[Svelteロゴ - svg porn](https://svgporn.com/#search=svelte)

1. 下記を実行
      
    ```shell
      npm run dev
      # OR
      yarn dev
    ```
    ![svelte_top_screen](/article/3_svelte/add_router/top_screen.png)
    ![svelte_about_screen](/article/3_svelte/add_router/about_screen.png)

    ::: tip 🎉 success
    このように遷移できたら完了。
    :::

## 3 - 5. ポートフォリオ作成

::: warning
  :warning:	まだ作り途中です。:construction:
:::


---

**順番: [3 *](#)  --> [5](../5_githubpages/) --> [発展](../6_ex/)**

---

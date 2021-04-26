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

1. ターミナルで以下のコマンドを実行し、対話形式でプロジェクトを作成します。

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

## 3 - 3. svelte-spa-routerの導入

1. `svelte-spa-router` をインストールします。
    ```shell
    npm install svelte-spa-router
    #OR
    yarn add svelte-spa-router
    ```


## 3 - 4. ポートフォリオ作成

::: warning
  :warning:	まだ作り途中です。:construction:
:::


---

**順番: [3 *](#)  --> [5](../5_githubpages/) --> [発展](../6_ex/)**

---

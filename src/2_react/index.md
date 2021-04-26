# 2. Reactを利用したサイト作成

## 1 - 1. reactの環境構築
1. create-react-app を導入します。

    ```shell
    npm install -g create-react-app
    # OR
    yarn global add create-react-app
    ```

1. バージョン確認

    ```shell
      create-react-app -V
    ```

    ::: tip 🎉 success
    バージョンが返ってきたら成功です。
    :::

## 1 - 2. プロジェクト作成

1. ターミナルで以下のコマンドを実行し、対話形式でプロジェクトを作成します。

    ```shell
      cd プロジェクトを格納するフォルダ(c:Desktop/project_reactなど)
      create-react-app プロジェクト名
    ```

    モジュールのインストールが始まりターミナルにずらーっと文字が流れていきます。

1. こちらの画面が出たらプロジェクト作成完了です。
   
    (npm でインストールした場合 yarn -> npm になっていますが問題ありません。)
    ![react_complete_install](/article/2_react/create_project/complete_install.png)

1. 生成されたフォルダに移動して、実際にプロジェクトを覗いてみましょう。

   (npm でインストールした場合 yarn.lock -> package-lock.json になっていますが問題ありません。)

    <img src="/article/2_react/create_project/project_folder.png" alt="react_project_folder" style="width: 50%; height: 50%;">

1. `package.json`を開いてみましょう。
   
   <img src="/article/2_react/create_project/package_json.png" alt="react_package_json" style="width: 65%; height: 50%;">
   
   赤枠より上が、このプロジェクトの情報及び、インストールしたモジュール、赤枠の中が開発時に使うスクリプト、赤枠より下は lint 設定になっています。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run serve
      # OR
      yarn serve
    ```
   
   ![react_yarn_dev](/article/2_react/create_project/yarn_dev.png)
   `Local:` のリンクにポインターを合わせて `cmd + click` or `ctrl + click` をしてみましょう。

   
   <img src="/article/2_react/create_project/lunch_site.png" alt="react_lunch_site" style="width: 50%; height: 50%;">

   この画面が出たら成功です。

   ターミナル上で `ctrl + c` を行いローカルサーバを閉じます。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run build
      # OR
      yarn build
    ```
    
    ![react_yarn_build](/article/2_react/create_project/yarn_build.png)
    これが出てきて、`build` というフォルダが生成されていたら成功です。

    ::: tip
      基本的に開発中は `npm run start(yarn start)` で、画面を見つつコーディングを行います。<br>
      本番(デプロイ)では、`npm run build(yarn build)` で生成される `build` をサーバに配置するという流れになります。
    :::

## 1 - 3. react-router-domの導入

1. `react-router-dom` をインストールします。
    ```shell
    npm install react-router-dom
    #OR
    yarn add react-router-dom
    ```


## 1 - 4. ポートフォリオ作成

::: warning
  :warning:	まだ作り途中です。:construction:
:::


---

**順番: [2 *](#)  --> [5](../5_githubpages/) --> [発展](../6_ex/)**


---

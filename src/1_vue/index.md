# 1. Vueを利用したサイト作成

## 1 - 1. vueの環境構築
1. VScode に Vue の拡張機能を入れます。
  
     - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

1. vue-cli を導入します。

    ```shell
    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli
    ```

1. バージョン確認

    ```shell
      vue -V
    ```

    ::: tip 🎉 success
    バージョンが返ってきたら成功です。
    :::

## 1 - 2.  プロジェクト作成

1. ターミナルで以下のコマンドを実行し、対話形式でプロジェクトを作成します。

    ```shell
      cd プロジェクトを格納するフォルダ(c:Desktop/project_vueなど)
      vue create プロジェクト名
    ```

    以下のように選んでください。

    ![vue-project_setting_save_cli](/article/1_vue/create_project/project_setting_save_cli.png)

    ::: tip
    こちらの画面で戸惑うかも知れませんが、up, down キーで移動、 Space キーでチェック状態を変更し決まったら Enter を押すという操作になります。
    ![vue_modules_select_cli](/article/1_vue/create_project/modules_select_cli.png)
    :::

    モジュールのインストールが始まりターミナルにずらーっと文字が流れていきます。

1. こちらの画面が出たらプロジェクト作成完了です。
   
    (npm でインストールした場合 yarn -> npm になっていますが問題ありません。)
    ![vue_complete_install](/article/1_vue/create_project/complete_install.png)

1. 生成されたフォルダに移動して、実際にプロジェクトを覗いてみましょう。

   (npm でインストールした場合 yarn.lock -> package-lock.json になっていますが問題ありません。)

    <img src="/article/1_vue/create_project/project_folder.png" alt="vue_project_folder" style="width: 50%; height: 50%;">

1. `package.json`を開いてみましょう。
   
   <img src="/article/1_vue/create_project/package_json.png" alt="vue_package_json" style="width: 65%; height: 50%;">
   
   赤枠より上が、このプロジェクトの情報、赤枠の中が開発時に使うスクリプト、 赤枠より下はインストールしたモジュールになっています。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run serve
      # OR
      yarn serve
    ```
   
   ![vue_yarn_dev](/article/1_vue/create_project/yarn_dev.png)
   青字の文字にポインターを合わせて `cmd + click` or `ctrl + click` をしてみましょう。

   
   <img src="/article/1_vue/create_project/lunch_site.png" alt="vue_lunch_site" style="width: 50%; height: 50%;">

   この画面が出たら成功です。

   ターミナル上で `ctrl + c` を行いローカルサーバを閉じます。

1. ターミナルで下記のスクリプトを実行してみましょう。
   
    ```shell
      npm run build
      # OR
      yarn build
    ```
    
    ![vue_yarn_build](/article/1_vue/create_project/yarn_build.png)
    これが出てきて、`dist` というフォルダが生成されていたら成功です。

    ::: tip
      基本的に開発中は `npm run serve(yarn serve)` で、画面を見つつコーディングを行います。<br>
      本番(デプロイ)では、`npm run build(yarn build)` で生成される `dist` をサーバに配置するという流れになります。
    :::


##  1 - 3. ポートフォリオ作成

::: warning
  :warning:	まだ作り途中です。:construction:
:::


---

**順番: [1 *](#)  --> [5](../5_githubpages/) --> [発展](../6_ex/)**

---

# 0. はじめに

::: warning
  :warning:	まだ作り途中です。:construction:
:::


こちらのページでは簡易的なポートフォリオサイトを作ることを想定して手順を作成しております。
ある程度慣れてきたら、発展の内容にも挑戦してみましょう。

## 環境の確認
**Node.js**
- インストーラーから入れたいからはこちら<br>
  [Node.js インストーラー](https://nodejs.org/ja/)

- Mac ユーザーで、hombrew から入れたい人はこちら<br>
  [ MacにNode.jsをインストール- Qiita](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)

- Windows ユーザーで、Chocolatey から入れたい人はこちら<br>
  [WindowsでChocolateyとnodistで、バージョン切り替え可能なNode.jsの環境を構築する - Qiita](https://qiita.com/masatomix/items/bcb0e7c64013e61af4d4)

| 項目    | バージョン |
| ------- | ---------- |
| Node.js | v14.16.1   |
| npm     | v6.14.12   |
| yarn    | v1.22.10   |

::: tip
 npm はデフォルトで入っているので、yarn は任意で導入してください。どちらかが使える状態であれば問題ありません。
:::


エディターはできれば VScode<br>
日本語にしたい方は、別途これも入れてください。<br>
[japanese language packs for visual studio codes](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)

## バージョンおよびパスが通っているか確認
- node のバージョン確認
 `node -v`

- yarn のバージョン確認
 `yarn -v`

- npm のバージョン確認
  `npm -v`

::: tip 🎉 success
 正しくバージョンが返ってきたら、環境構築は完了です。
:::

::: danger 😢 failure
 正しくバージョンが返ってこない場合、パスが通ってない可能性があります。
 環境変数を確認してみてください。
:::


## 使うフレームワークを選択
- **vue を選択**
  
  `vue-cli`を導入して、対話形式で vue-router を導入してみましょう。<br>
  順番: [1](../1_vue/) --> [5](../5_githubpages/) --> ex



- **react を選択** 
  
   `create-react-app`を使い react を導入し、react-router-dom を入れましょう。<br>
   順番: [2](../2_react/) --> [5](../5_githubpages/) --> ex


- **svelte を選択**
  
  svelteKit を使い導入<br>
  順番: [3](../3_svelte/) --> [5](../5_githubpages/)


- **その他(普通のサイト)**
  
  サイト作成後に Git 管理を導入しましょう。<br>
  順番: [4](../4_other/) --> [5](../5_githubpages/)

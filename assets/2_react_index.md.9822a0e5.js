import{o as l,c as e,b as n,d as a,e as c}from"./app.edf602c8.js";const t='{"title":"2. Reactを利用したサイト作成","description":"","frontmatter":{},"headers":[{"level":2,"title":"2 - 1. reactの環境構築","slug":"_2-1-reactの環境構築"},{"level":2,"title":"2 - 2. プロジェクト作成","slug":"_2-2-プロジェクト作成"},{"level":2,"title":"2 - 3. react-router-domの導入","slug":"_2-3-react-router-domの導入"},{"level":2,"title":"2 - 4. ポートフォリオ作成","slug":"_2-4-ポートフォリオ作成"}],"relativePath":"2_react/index.md","lastUpdated":1631808128565}',r={},s=n("h1",{id:"_2-reactを利用したサイト作成"},[n("a",{class:"header-anchor",href:"#_2-reactを利用したサイト作成","aria-hidden":"true"},"#"),a(" 2. Reactを利用したサイト作成")],-1),o=n("h2",{id:"_2-1-reactの環境構築"},[n("a",{class:"header-anchor",href:"#_2-1-reactの環境構築","aria-hidden":"true"},"#"),a(" 2 - 1. reactの環境構築")],-1),u=n("ol",null,[n("li",null,[n("p",null,"create-react-app を導入します。"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" -g create-react-app\n"),n("span",{class:"token comment"},"# OR"),a("\n"),n("span",{class:"token function"},"yarn"),a(" global "),n("span",{class:"token function"},"add"),a(" create-react-app\n")])])])]),n("li",null,[n("p",null,"バージョン確認"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,"  create-react-app -V\n")])]),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"🎉 success"),n("p",null,"バージョンが返ってきたら成功です。")])])],-1),i=n("h2",{id:"_2-2-プロジェクト作成"},[n("a",{class:"header-anchor",href:"#_2-2-プロジェクト作成","aria-hidden":"true"},"#"),a(" 2 - 2. プロジェクト作成")],-1),p=n("ol",null,[n("li",null,[n("p",null,"ターミナルで以下のコマンドを実行し、対話形式でプロジェクトを作成します。"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[a("  "),n("span",{class:"token builtin class-name"},"cd"),a(" プロジェクトを格納するフォルダ"),n("span",{class:"token punctuation"},"("),a("c:Desktop/project_reactなど"),n("span",{class:"token punctuation"},")"),a("\n  create-react-app プロジェクト名\n")])])]),n("p",null,"モジュールのインストールが始まりターミナルにずらーっと文字が流れていきます。")]),n("li",null,[n("p",null,"こちらの画面が出たらプロジェクト作成完了です。"),n("p",null,[a("(npm でインストールした場合 yarn -> npm になっていますが問題ありません。) "),c("あとで追加![react_complete_install](/article/2_react/create_project/complete_install.png)")])]),n("li",null,[n("p",null,"生成されたフォルダに移動して、実際にプロジェクトを覗いてみましょう。"),n("p",null,"(npm でインストールした場合 yarn.lock -> package-lock.json になっていますが問題ありません。)"),n("img",{src:"/fe-beginner-doc/article/2_react/create_project/project_folder.png",alt:"react_project_folder",style:{width:"50%",height:"50%"}})]),n("li",null,[n("p",null,[n("code",null,"package.json"),a("を開いてみましょう。")]),n("img",{src:"/fe-beginner-doc/article/2_react/create_project/package_json.png",alt:"react_package_json",style:{width:"65%",height:"50%"}}),n("p",null,"赤枠より上が、このプロジェクトの情報及び、インストールしたモジュール、赤枠の中が開発時に使うスクリプト、赤枠より下は lint 設定になっています。")]),n("li",null,[n("p",null,"ターミナルで下記のスクリプトを実行してみましょう。"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[a("  "),n("span",{class:"token function"},"npm"),a(" run start\n  "),n("span",{class:"token comment"},"# OR"),a("\n  "),n("span",{class:"token function"},"yarn"),a(" start\n")])])]),n("p",null,[n("img",{src:"/fe-beginner-doc/article/2_react/create_project/yarn_dev.png",alt:"react_yarn_dev"}),n("code",null,"Local:"),a(" のリンクにポインターを合わせて "),n("code",null,"cmd + click"),a(" or "),n("code",null,"ctrl + click"),a(" をしてみましょう。")]),n("img",{src:"/fe-beginner-doc/article/2_react/create_project/lunch_site.png",alt:"react_lunch_site",style:{width:"50%",height:"50%"}}),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"🎉 success"),n("p",null,"この画面が出たら成功です。")]),n("p",null,[a("ターミナル上で "),n("code",null,"ctrl + c"),a(" を行いローカルサーバを閉じます。")])]),n("li",null,[n("p",null,"ターミナルで下記のスクリプトを実行してみましょう。"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[a("  "),n("span",{class:"token function"},"npm"),a(" run build\n  "),n("span",{class:"token comment"},"# OR"),a("\n  "),n("span",{class:"token function"},"yarn"),a(" build\n")])])]),n("p",null,[n("img",{src:"/fe-beginner-doc/article/2_react/create_project/yarn_build.png",alt:"react_yarn_build"}),a(" これが出てきて、"),n("code",null,"build"),a(" というフォルダが生成されていたら成功です。")]),n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[a("基本的に開発中は "),n("code",null,"npm run start(yarn start)"),a(" で、画面を見つつコーディングを行います。")]),n("p",null,[a("本番(デプロイ)では、"),n("code",null,"npm run build(yarn build)"),a(" で生成される "),n("code",null,"build"),a(" をサーバに配置するという流れになります。")])])])],-1),d=n("h2",{id:"_2-3-react-router-domの導入"},[n("a",{class:"header-anchor",href:"#_2-3-react-router-domの導入","aria-hidden":"true"},"#"),a(" 2 - 3. react-router-domの導入")],-1),h=n("ol",null,[n("li",null,[n("code",null,"react-router-dom"),a(" をインストールします。"),n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(" react-router-dom\n"),n("span",{class:"token comment"},"#OR"),a("\n"),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(" react-router-dom\n")])])])])],-1),_=n("h2",{id:"_2-4-ポートフォリオ作成"},[n("a",{class:"header-anchor",href:"#_2-4-ポートフォリオ作成","aria-hidden":"true"},"#"),a(" 2 - 4. ポートフォリオ作成")],-1),m=n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"⚠️ まだ作り途中です。🚧")],-1),g=n("hr",null,null,-1),k=n("p",null,[n("strong",null,[a("順番: "),n("a",{href:"#"},"2 *"),a(" --\x3e "),n("a",{href:"./../5_githubpages/"},"5"),a(" --\x3e "),n("a",{href:"./../6_ex/"},"発展")])],-1),f=n("hr",null,null,-1);r.render=function(n,a,c,t,r,b){return l(),e("div",null,[s,o,u,i,p,d,h,_,m,g,k,f])};export default r;export{t as __pageData};
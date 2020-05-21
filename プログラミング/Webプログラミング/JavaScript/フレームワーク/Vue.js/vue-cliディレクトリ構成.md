## vue-cliプロジェクトのディレクトリ構造
```
./
├─build/ 
│
├─config/
│
├─src/
│　　　　├─assets/
│　　　　├─components/
│　　　　├─router/
│　　　　├─App.vue
│　　　　└─main.js
│
├─static/
│　　　　└─.gitkeep
│
├─test/ 
│　　　　├─e2e/
│　　　　└─unit/
│
├─public/
|       └─index.html
├─package.json
├─README.md
├─.gitignore

```
## 各ディレクトリの役割
### build/
webpackの設定やビルド用の設定ディレクトリ

### config/
ポートの指定等を含めた各設定ファイルを格納したディレクトリ

### src/
開発用ディレクトリ

### static/
コンポーネントに依存しない静的ファイルを格納するディレクトリ

### test/
テスト用設定ディレクトリ

## 画像配置場所
### 1. src/assets/
コンポーネントで呼び出す画像など、モジュールに依存した素材を格納する。
基本画像はこちらに格納する。

呼び出す際はビルド前の場所を記載する。

### 2. static/

### 3. public/

## 参考
Vue-cli(webpack)解剖 ーディレクトリ構成ー  
https://qiita.com/h_plum/items/86b8a6a86ac0fea8a4d1

Vue.jsでの画像指定方法を間違ってたので、振り返る  
https://qiita.com/skmtko/items/a83f836b48f24309916d

【Vue.js】imgタグのsrc要素は指定の仕方によって読み込み方が違う
https://qiita.com/coppieee/items/4260bd0af246aebf5557

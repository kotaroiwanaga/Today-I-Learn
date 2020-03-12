(一旦メモ書き)
## Webアプリから見たSpringMVCの役割の範囲
## 設計ルール
### 画面処理マッピング
- リクエストとJavaの処理メソッドのマッピングができる
- マッピングのキーとして
  - URL
  - リクエストパラメータ
  - リクエストヘッダ
  - クッキー  
  などブラウザから送られてくるほとんどの情報が使える。

## Controllerの設計ルール
- @ControllerをクラスにつけるだけでControllerクラスとして認識される。
- 処理メソッドの引数にモデル(リクエストから受け取りたいデータ)を設定できる。
  - 指定するとリクエストパラメータをそのモデルの型にバインドして引数に渡してくれる。
  - 引数をModelにaddしてくれる。
  - (引数に指定してないモデルはModelから取得できない)


```java
//.                 ↓ここに指定したことで自動でModelにaddしてくれる
public String input(User user){
  return "hoge";
}
```

```java
public String input(Model model){
  // 引数に指定してないモデルは明示的にaddする必要がある
  model.addAttribute("user", new User());
  return "hoge";
}
```

## その他の設計ルール
SpringMVCでは1機能につき1クラスが対応しているようになっている。
設定方法は基本的にはSpringの設定ファイル(DIコンテナ)にbeanとして設定するだけ。

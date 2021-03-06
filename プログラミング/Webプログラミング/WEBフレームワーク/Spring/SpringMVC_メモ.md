(一旦メモ書き)

# Webアプリから見たSpringMVCの役割の範囲
# 設計ルール
## 画面処理マッピング
- リクエストとJavaの処理メソッドのマッピングができる
- マッピングのキーとして
  - URL
  - リクエストパラメータ
  - リクエストヘッダ
  - クッキー  
  などブラウザから送られてくるほとんどの情報が使える。

## Controllerの設計ルール
- @ControllerをクラスにつけるだけでControllerクラスとして認識される。
- ただし、Spring設定ファイルにこのアノテーションを有効にする記述(mvc'annotation-driven, context:component-scan)が必要。
- 処理メソッドの引数にモデル(リクエストから受け取りたいデータ)を設定できる。
  - 指定するとリクエストパラメータをそのモデルの型にバインドして引数に渡してくれる。
  - 引数をModelにaddしてくれる。
  - (引数に指定してないモデルはModelから取得できない)
  - HTMLのFormの値をリクエストパラメータから受け取る場合は、
    そのForm用にクラスを1つ作成するのがよい(あくまで1つの設計案としてね)

```java
//                   ↓ここに指定したことで自動でModelにaddしてくれる
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

## 用語補足
#### コマンドオブジェクト/コマンド
リクエストパラメータの値を設定されたモデルのこと。  
リクエストパラメータの値によって処理が変わるから、
まるでリクエストパラメータがコマンドみたいてことかしら。

# バインダー(Binder)
SpringMVCにおける重要な概念の一つ。

## バインドとは
IT用語として一般的にも使われる用語。
「ある値を対象オブジェクトに(モデル)に結びつけること。」  
具体的には以下など。
- 型変換をし、値を対象オブジェクトに設定する
- プロパティ存在エラー、型変換エラー、妥当性チェックの結果を返す  

イメージ的にはクライアントの入力をモデルに詰め込むための仲介者(Binder)がいて、
こいつに入力を渡すと型変換してモデルに詰めてくれてるよーってこと。

※モデルのインスタンス1つにつき1つのBinderが結び付けを行う。  
 ⇒**同じモデルクラスの操作でもインスタンスが異なれば新しくBinderが生成される。**

## Webにおけるバインド
Webにおけるバインドは、リクエストオブジェクトをバインドすることを指す。  
Springのバインドは、セキュリティとDAOの両方に要求される以下の事項を満たしている。 

### Webのバインダーの設計上要求されること
- 指定のリクエストパラメータ以外は無視する  
  →セキュリティの観点で、予期せぬ値を送信できないようにするため

### DAOに設計上必要なこと
- モデルの値をそのままDBに書き込める(ORマッピング)  
  (DBから現状の値：データオブジェクトを取得し、更新するプロパティだけを設定し、再度DAOに渡す)  
  →開発効率向上のため

# Controllerの処理フロー
## 通常のControllerの処理の流れ
1. **@ModelAttributeの呼び出し**  
     事前準備として、dbからPOJOを取得し、Modelに登録する。  
     ただし、**InitBinderメソッドで設定した名前のPOJOしかModelには設定できない**。  
     このInitBinderの仕組みによって、不要なパラメータ無視することでセキュリティが確保されている。  
     ModelAttributeメソッドは**リクエストのたびにRequestMappingメソッドの前に呼ばれる**。
2. **@RequestMappingの呼び出し**  
     ModelからPOJOを取り出して、コントロール処理を行う。  
     指定したPOJOがModelに**登録されていない場合は、新たにnewしてModelに登録する**。  
     コントロール処理がreturnした値はView名としてSpringが処理する。  

※POJO：単純な構造のJavaオブジェクトのこと。ただのデータクラスとか。  
※@InitBinderは引数のモデルの数だけ呼ばれる。(モデルにバインドするたびに呼ばれるので)

## Controller内で使う主なアノテーション
### @Controller
このアノテーションをつけたクラスをControllerとして扱う。  
ただし、Spring設定ファイルにこのアノテーションを有効にする記述(mvc:annotation-driven, context:component-scan)  
をしなければならない。

### @InitBinder
Binderを初期化する。リクエストパラメータをモデルに変換するたびに呼ばれる。  
また、setAllowedFields()メソッドで設定を許可するプロパティを指定できる。  
逆に許可しないプロパティを設定することもできる。

### @ModerlAtttribute("【モデルオブジェクト名】")
#### メソッドにつけた場合
モデル前処理ができる。  
@RequestParamを使ってリクエストパラメータの値を引数に取り、  
この値を使ってPOJOを作成し、Modelに登録できる。
returnしたものがModelに登録される。

#### 引数につけた場合
Modelオブジェクトから指定の名称のオブジェクトを取得して、引数で受け取れるようになる。  
また、引数に使う場合はアノテーションを省略できる。  
その場合、引数の変数名はクラス名の先頭を小文字にしたもの(例 "Form"→"form")とする。  

### @RequestMapping(value="【対応させるURL】", method="【POST or GET】")
#### クラスにつけた場合
URLの親のパスにマッチする。  
⇒クラス内のメソッドの対応URLとして、共通のパスをつけられる。

#### メソッドにつけた場合
クラスのパスからの相対パスがマッチされる。  
メソッドの引数については自由に決めることができる。  
例えば、HttpServletRequestを指定すればそれを渡してくれるし、
引数の順番のルールも特にない。  
例外として、BindingResultだけは@Validをつけたモデルの引数の後に記述しなければならない。

### @Valid
これをつけた引数は妥当性チェックを行う。  
妥当性チェックの適用範囲はアノテーションをつけた引数そのものだけなので、
引数の中のフィールドをネストしてチェックさせたい場合は、
さらにフィールドの定義に@Validをつける必要がある。

# 設定ファイル(DIコンテナ)
## SpringMVCで用意しているクラス
- すべてinterfaceになってるので派生クラスから利用できるクラスを確認できる。
- 各クラスは複数設定でき、優先順位の高いものから適用され、優先順位の高いクラスで解決できない場合に次に優先順位の高いクラスが解決しようとする。

　　【beanで設定するクラスの一覧】

| 名称                        | 内容                                                         |
| --------------------------- | ------------------------------------------------------------ |
| handler mappings            | インターセプターとControllerの実行を担当するクラスです。通常、何も設定しなければAnnotationMethodHandlerAdapterが使用されます。 |
| view resolvers              | View名からViewを検索するクラスです。例えばUrlBasedViewResolverを使用すると、prefix ＋ View名 ＋ suffix のJSPファイルを検索します。 |
| locale resolver             | ロケール（例："ja"など）を設定するクラスです。               |
| Theme resolver              | theme名を解決します。themeとは、CSSのクラス名や、イメージファイル名などを指します。使用することで、後で、一括して変更できるようにもなります。propertiesファイルに、　 background=/themes/cool/img/coolBg.jpgと記述して、JSPファイルなどで、　style="background=<spring:theme code='background'/>" のような使い方をします。 |
| multipart file resolver     | ファイルアップロードの方法を提供します。利用したい時だけ設定すれば大丈夫です。 |
| handler exception resolvers | 例外処理の方法を提供します。利用したい時だけ設定すれば大丈夫です。 |

# Controller処理メソッドの引数と返り値
## 引数の受け取り方
Controllerのメソッドでは引数にアノテーションをつけることで以下の値を受け取ることができる。
- @PathVariable()  : リクエストパラメータ
- @RequestHeader() : リクエストのヘッダ
- @CookieValue()   : クッキーの値
- @RequestBody     : リクエストのボディの内容

例)
```java
public String input (Form form, @RequestHeader(required=fale, value="User-Agent") String agent){
    return "user-Edit-Input";
}
```
# 参考
SpringMVCについて  
https://sites.google.com/site/soracane/home/springnitsuite/spring-mvc/1-ji-ben-gai-nian-quan-ti-dena-chu-lifuro

Spring での責務についてまず見てほしい一枚の絵  
https://qiita.com/yo1000/items/a6acbf5f454a7f53aef9



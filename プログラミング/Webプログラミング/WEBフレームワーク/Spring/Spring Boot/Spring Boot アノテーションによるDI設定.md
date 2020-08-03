# DIコンテナによるインスタンス管理

Spring FrameworkではDIコンテナを経由してインスタンスを生成・管理し、DIを実現している。DIコンテナがインスタンスを管理するための設定方法として

- XML
- JavaConfig
- アノテーション

がある。本稿ではアノテーションの設定方法について説明する。



# アノテーションによるDI設定
DI(依存性の注入)を考えるうえでの登場人物として中身を注入したい入れ物(メンバ変数、フィールド)、入れ物に注入したいもの(コンポーネント, Bean)のクラスと両者を内包するパッケージの3つがいることをイメージする。
これらにそれぞれ以下のアノテーションを付与する。

- 中身を注入してほしい変数： **@Component**
- インスタンス化して入れ物に注入してほしいクラス： **@Autowired**
- @Componentの検索範囲パッケージ： **@ComponentScan**

DIの流れのイメージとしては、
1. DIコンテナが管理対象とする範囲(パッケージ)に属するクラス(メインクラス)に@ComponentScanを付与する。**※1**
1. 

**※1** 実際には下記クラスのように@ComponentScanのほかに`@Configuration`, `@EnableAutoConfiguration`の付与が合わせて必要。
   
```java
//@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan
public class SpringSampleApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(SpringSampleApplication.class, args);
    }
}
```

上記クラスでは以下のような流れで処理が行われている。
1. `@Coinfiguration`で設定クラスであることを明示する。(SpringApplication.runメソッドの引数には`@Configuration`のついたクラスを渡す必要がある。)
1. `@EnableAutoConfiguration`で自動設定(ここではDIのこと)を有効化する。
1. `@ConpomentScan`でこのクラスが属するパッケージをコンポーネント検索対象範囲とする。

※ 実際には`@Coinfiguration`, `@EnableAutoConfiguration`, `@ConpomentScan`を内包する`@SpringBootApplication`を付与することが一般的。

# 参考
Spring Boot入門①  
https://qiita.com/gksdyd88/items/7886f54ee8a22d311400

Spring BootのAutoConfigureの仕組みを理解する  
https://qiita.com/kazuki43zoo/items/8645d9765edd11c6f1dd

SpringのDIとAOPの簡潔な説明  
https://qiita.com/shuntaro_tamura/items/ba5a2e9b3ba305285edd

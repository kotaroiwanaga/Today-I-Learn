# DIコンテナによるインスタンス管理

Spring FrameworkではDIコンテナを経由してインスタンスを生成・管理し、DIを実現している。DIコンテナがインスタンスを管理するための設定方法として

- XML
- JavaConfig
- アノテーション

がある。本稿ではアノテーションの設定方法について説明する。



# アノテーションによるDI設定
DI(依存性の注入)を考えるうえでの登場人物として中身を注入したい入れ物(メンバ変数、フィールド)、入れ物に注入したいもの(Bean)のクラスと両者を内包するパッケージの3つがいることをイメージする。
これらにそれぞれ以下のアノテーションを付与する。

- 中身を注入してほしい変数： **@Component**
- 注入したい(インスタンス化)してほしいクラス： **@Autowired**
- パッケージ(対象範囲)： **@ComponentScan**

DIの流れのイメージとしては、
1. DIコンテナが管理対象とする範囲(パッケージ)に属するクラス(メインクラス)に@ComponentScanを付与する。
1. 



# 参考
Spring Boot入門①  
https://qiita.com/gksdyd88/items/7886f54ee8a22d311400

Spring BootのAutoConfigureの仕組みを理解する  
https://qiita.com/kazuki43zoo/items/8645d9765edd11c6f1dd

SpringのDIとAOPの簡潔な説明  
https://qiita.com/shuntaro_tamura/items/ba5a2e9b3ba305285edd

# DIコンテナによるインスタンス管理

Spring FrameworkではDIコンテナを経由してインスタンスを生成・管理し、DIを実現している。DIコンテナがインスタンスを管理するための設定方法として

- XML
- JavaConfig
- アノテーション

がある。本稿ではアノテーションの設定方法について説明する。



# アノテーションによるDI設定

DI(依存性の注入)を考えるうえでの登場人物として、DIコンテナ、中身を注入したい入れ物(変数、フィールド)、実際に注入する中身(インスタンス、Bean)の3つがいることをイメージする。







# 参考

Spring Boot入門①

https://qiita.com/gksdyd88/items/7886f54ee8a22d311400



SpringのDIとAOPの簡潔な説明

https://qiita.com/shuntaro_tamura/items/ba5a2e9b3ba305285edd

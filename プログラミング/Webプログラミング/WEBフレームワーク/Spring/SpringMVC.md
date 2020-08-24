# そもそもMVCとは？
SpringMVCの前にそもそもMVCとは何かに軽く触れておく。(MVCとSpringMVCはちょっと違うよていう話がしたい。)
MVCとはUIを持つアプリケーションを**Model**/**View**/**Controller**の3つの役割に分けた設計思想のこと。
それぞれの役割は以下の通り。

- **Model**: 処理担当
- **View**： UI担当(ユーザからの画面入力/ユーザへの結果出力)
- **Controller**：制御担当(入力情報をもとにどのModelに処理をさせるか、結果をどのViewに出力させるかを決める)

流れとしては以下の1~5を繰り返す。
1. ユーザからの入力をViewが受け取り、Controllerに渡す。
2. Controllerは入力に応じてどのModelに処理をさせるか選択し、Modelに入力を渡して処理させる。
3. Modelは処理を行い、結果をControllerに渡す。
4. Controllerは結果に応じてどのViewに表示させるか選択し、Viewに結果を渡す。
5. Viewが結果を表示する。

![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F147552%2F2ddbe9a4-87f5-93cb-174e-085bf13db82a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=3baf03a2872a60611ae7a738ca100a7a)

# Spring Frameworkが捉えるアプリケーションの全体構造
次にSpring Frameworkにおける(Web)アプリケーションの全体構造を見ていく。Spring Frameworkでは以下のようなコンポーネント(部品)で全体が構成されている。各コンポーネントには対応するアノテーションが存在し、これらの**アノテーションをクラスに付与することで、ユーザから、そしてDIコンテナからもそのクラスがどのコンポーネントとしての役割を持つのか一目で分かる**ようになっている。  

![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F47993%2Fe8276c74-74a7-0976-e22d-7765a4fcbaf6.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=8696e80b6f477f0f14751a46238c3487)

各コンポーネントが持つ役割(責務ていう方が一般的なのかも)は以下の通り。

| コンポーネント | 対応アノテーション | 役割 |
|:-:|:-:|:-:|
| Model | - |  |
| View | - |  |
| Controller | @Controller |  |
| Service | @Service |  |
| Repository | @Repository |  |
| Template | - |  |
| Configuration | @Configuration |  |
| Advice | @Aspect ControllerAdvice |  |
| - | @Component |  |

ここで注意してほしいことは**MVCとSpringMVCではModelの役割が異なる**こと。

# SpringMVCの役割
![](https://sites.google.com/site/soracane/_/rsrc/1333771245937/home/springnitsuite/spring-mvc/1-ji-ben-gai-nian-quan-ti-dena-chu-lifuro/mvc_overall.JPG)

# 参考
Spring MVC 基本概念  
https://sites.google.com/site/soracane/home/springnitsuite/spring-mvc/1-ji-ben-gai-nian-quan-ti-dena-chu-lifuro

Spring での責務についてまず見てほしい一枚の絵  
https://qiita.com/yo1000/items/a6acbf5f454a7f53aef9

MVC とは何かを 1 から学ぶ  
https://qiita.com/tentom/items/de95f63bc9e2da2bd0bf

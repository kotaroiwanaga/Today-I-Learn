## MVCモデルとは
プログラムにおける中身の整理術(モデル)の一つ。  
プログラムを
- **モデル(Model)**
- **ビュー(View)**
- **コントローラ(Controller)**  

の3つに分類して構築する。

### Model
入出力(入力と表示)以外の処理を担う。  
Webプログラミングにおいては一般的なJavaクラスやJavaBeanなどが担う。  

### View
入力や表示に関連する処理を担う、ユーザインターフェースとしての役割を持つ。  
WebプログラミングにおいてはHTMLやJSPなどが担う。  

### Controller
ユーザから受け取ったリクエストをもとにModelに処理を命令し、処理結果をViewに返す役割。  
ViewとModelの橋渡し役。  
Webプログラミングにおいてはサーブレットなどが担う。  

![](https://lab.m-field.co.jp/wp-content/uploads/2019/01/MVC%E3%83%A2%E3%83%87%E3%83%AB.png)

## MVCモデルの利点
- 機能ごとに分割されているため、分業して作業を進めやすい。  
  例)Model→Javaプログラマー, View→Webデザイナー, Controller→Webプログラマー でそれぞれ分担できる。  
- それぞれが独立しているので変更・修正があった場合にその影響を受けにくい。

## 参考
https://wa3.i-3-i.info/word11584.html  

https://qiita.com/s_emoto/items/975cc38a3e0de462966a　　

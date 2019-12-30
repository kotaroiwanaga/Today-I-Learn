## DOMとは
「Document Object Model」の略で、Webページ(HTML)と他の言語(JavaScriptなど)を結び付けてくれる仕組み。 
HTMLのタグ構造を階層構造になったオブジェクトとして扱う。  
具体的に言うとJavaScriptでいう「document.~」て書くやつはDOMの仕組みを使ってる。

## DOMのイメージ(思想)
- 前述の通りHTMLのタグ構造を**階層構造\(ツリー構造\)** として捉える。  

![](https://eng-entrance.com/wp-content/uploads/2016/07/%E5%9B%B32-267x300.png)


- 各要素(タグ)をノードと表現する。

![](https://eng-entrance.com/wp-content/uploads/2016/07/%E5%9B%B33-267x300.png)

### 例
下記のような構造のHTMLだった場合
```HTML
<body>
<section id="section-1">
    <h2>セクション1</h2>
    <p>子ノード1</p>
    <p>子ノード2</p>
    <p>子ノード3</p>
</section>
<section id="section-2">
    <h2>セクション2</h2>
    <p>子ノード1</p>
    <p>子ノード2</p>
    <p>子ノード3</p>
</section>
</body>
```

各要素の参照方法は以下の通り
```JavaScript
var span = document.div
```

## 参考
https://eng-entrance.com/what-is-dom

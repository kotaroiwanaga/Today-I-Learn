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
<script>
  // id="section-1"のタグを赤にする
  var section_1 = document.getElementById("section-1");
  section_1.style.color = 'red';

  // id="section-1"のタグの子ノードのうち、2番目の要素を黄色にする
  /* ※ChromeブラウザのchildNodesの実装が、ノードとノードの間に「空白のノード」を差し込むものになっているため、 h2, 空白, p の順となり指定する添え字は 3 となる*/
  var section_1ChildeList = section_1.childNodes;
  section_1ChildeList[3].style.color = 'yellow';

  // name="p_1"のタグのうち1番目のものを青色にする
  var p_1List = document.getElementsByName("p_1");
  p_1List[1].style.color = 'blue';
</script>
```

## 参考
https://eng-entrance.com/what-is-dom

https://www.sejuku.net/blog/30970

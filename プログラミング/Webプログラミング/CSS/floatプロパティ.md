## floatのイメージ
floatのイメージは**「１つ上のレイヤーに移動させる＝浮かばせる(float)」**である。  
floatプロパティを付与された(left or right)要素は浮かんでいる状態であるため、
後続の要素は**まるで**float付与要素が存在しないかのような振る舞いで配置される。

floatプロパティに指定できる値としては
- none (デフォルト：float適用なし)
- left (左寄せ)
- right (右寄せ)
の３つがある。


#### 例)
以下のようなHTMLに対してCSSでfloatを指定した場合と指定しなかった場合を比較してみる。
- HTML
```html
<div class="yellow"></div>
<div class="green"></div>
<div class="pink"></div>
```

- CSS(floatなし)
```css
.yellow{
  background-color: yellow;
  width: 200px;
  height: 250px;
}

.green{
  background-color: green;
  width: 150px;
  height: 100px;
}

.pink{
  background-color: pink;
  width: 500px;
  height: 80px;
}

```
- 出力
divはブロック要素なので前後に改行が入る。
![](https://udemy-benesse-co-jp.cdn.ampproject.org/i/s/udemy.benesse.co.jp/wp-content/uploads/float-3.png)


- CSS(float付与)
```css
.yellow{
  background-color: yellow;
  width: 200px;
  height: 250px;
  float: left;
}

.green{
  background-color: green;
  width: 150px;
  height: 100px;
  float: left;
}

.pink{
  background-color: pink;
  width: 500px;
  height: 80px;
}

```
- 出力
float:leftが付与されたyellow, greenはインライン要素のように前後に改行が入らなくなり、
leftを指定したため左寄せになる。  
そしてfloatが付与されていないpinkはyellow, greenを無視したかのように下に入り込む。  
このようにfloatを付与した要素は他の要素より上のレイヤーに浮いた状態となる。
![](https://udemy-benesse-co-jp.cdn.ampproject.org/i/s/udemy.benesse.co.jp/wp-content/uploads/float-5.png)


## text-alignとのビジュアル的な違い


## 参考
CSS floatプロパティの書き方  
https://www.google.co.jp/amp/s/udemy.benesse.co.jp/development/web/css-float.html

## はじめに
本記事は右揃えや左揃えなど"align(揃える)"機能に共通することについて説明していく。  
(以降〇〇揃えのような操作を総称してalignと呼ぶ。)

### インライン要素のalign
横方向のalignを適用する時の基準は
基本的に親要素ボックスのコンテンツが占める領域となる。  
縦方向に関しては親要素のコンテンツのほかに、
行ボックス(ラインボックス)を基準にすることもある。
インラインボックス要素や生のテキストも同じ扱い。

ちなみに行ボックスはここの部分のこと  
![](https://www.webdesignleaves.com/pr/images/css/lineBox.jpg)  
行ボックスの高さは行内で最も高さのあるフォントもしくはインラインブロック要素の高さ(たぶん)

### ブロック要素のalign
ブロック要素はインライン要素のように行に所属するのではなく、
行自体を表す要素であり、そもそも何かを基準に揃えるという概念が存在しない。
よってalignに相当するCSSプロパティは存在しないため、
ブロック要素間の余白(margin)を調整するなど別の方法を取る必要がある。

## 1.横方向の中央揃え
### 1.1.インライン要素の中央揃え(横方向)
**text-align**プロパティを使用する。このプロパティを**中央揃えにしたいインライン要素の
親のブロック要素に**`text-align:center;`を設定することでブロックコンテンツ内での
中央揃えを実現できる。

### 1.2.ブロック要素の中央揃え(横方向)
インライン要素のtext-alignに相当するプロパティは存在しないため、
ブロック要素の幅(width)を固定した状態で横方向の余白(margin)をautoにすることで
親要素のコンテンツ領域を基準に中央揃えを実現する。  

例）
```css
/* 親要素 */
div.outer{
  position: relative;
  width: 300px;
}
/* 子要素(中央揃え対象) */
div.inner{
  position: absolute;
  left: 0;
  right: 0;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
```

## 2.縦方向の中央揃え
### 2.1.インライン要素の中央揃え(縦方向)
インライン要素はheightプロパティが設定できないことからもわかるとおり、
**高さの概念が存在しない**。(文字フォントの高さ(line-height)は存在する。)  
そのため**親ブロック要素の上下中央に揃えるためのプロパティは存在しない**が、
やりようによっては(見かけ上)実現可能なので下記にて一部を紹介する。  

まず、**行ボックスを基準に上下中央揃えする**場合は**vertical-align**プロパティを使用する。
**中央揃えにしたいテキストを内包するインライン要素(インラインボックス,テーブルセルも可)に**`vertical-align:middle;`を設定する。  
(中央揃えの適用対象はvertical-alignを付与したインライン要素orテーブルセル要素の子要素ということ)
ちなみにvertical-alignのデフォルトは`baseline`である。  
![](http://www.htmq.com/style/images/vertical-align02.gif)


一方テーブルセルに適用すると親ブロック要素ボックス領域を基準に中央揃えされる。  
(この理由はよくわからないが、vertical-alignは本来**行ボックスを基準に
縦方向にテキストを揃える**プロパティであると思っておいたほうが良さそう)
```css
/* 親ブロック要素 */
div.outer{
  display: table;
  width:100%;
}
/* 中央揃えするテーブルセル */
span.inner{
  display: table-cell;
  vertifical-align: middle;
}
```
![](https://www.granfairs.com/blog/upload/staff-2017-03-09-centering-by-css-04.png)

### 2.2.ブロック要素の中央揃え(縦方向)
横方向と同じくブロック要素同士は記述方向から順に詰めて配置されるものなので、
揃えるという概念は存在しない。横方向同様に余白(margin)利用することで親要素のコンテンツ領域を
基準に中央揃えすることができる。

例）
```css
/* 親要素 */
div.outer{
  position: relative;
  height: 300px;
}
/* 子要素(中央揃え対象) */
div.inner{
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100px;
  margin-top: auto;
  margin-bottm: auto;

```

## 参考
CSS：中央に配置する  
https://www.w3.org/Style/Examples/007/center.ja.html

CSSで要素を中央寄せにする方法を徹底解説  
https://www.sejuku.net/blog/55523

視覚形成モデル  
https://www.webdesignleaves.com/pr/css/css_basic_02.html

text-alignクイックリファレンス  
http://www.htmq.com/style/text-align.shtml

vertical-alignクイックリファレンス  
http://www.htmq.com/style/vertical-align.shtml

CSSで要素を上下や左右から中央寄席する７つの方法  
https://www.granfairs.com/blog/staff/centering-by-css

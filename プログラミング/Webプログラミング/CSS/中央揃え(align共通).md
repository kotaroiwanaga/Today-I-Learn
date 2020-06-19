## はじめに
本記事は右揃えや左揃えなど"align(揃える)"機能に共通すること
について説明していく。(以降〇〇揃えのような操作を総称してalignと呼ぶ。)

### インライン要素のalign
横方向のalignを適用する時の基準は
基本的に親要素ボックスのコンテンツが占める領域となる。  
縦方向に関しては親要素のコンテンツのほかに、
行ボックス(ラインボックス)を基準にすることもある。
インラインボックス要素や生のテキストも同じ扱い。

ちなみに行ボックスはここの部分のこと  
![](https://www.webdesignleaves.com/pr/images/css/lineBox.jpg)

### ブロック要素の中央揃え
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
ブロック要素の幅(width)を固定した状態で横方向の余白(margin)をautoにすることで中央揃えを実現する。  

例）
```css
p{
  width: 100px;
  margin-width: auto;
}
```

## 2.縦方向の中央揃え
### 2.1.インライン要素の中央揃え(縦方向)
**行ボックスを基準に上下中央揃えする**場合は**vertifical-align**プロパティを使用する。
text-alignとは異なり、**中央揃えにしたいインライン要素(テーブルセルも可)に**
`vertifical-align:middle;`を設定する。  
ちなみにvertifical-alignのデフォルトは`baseline`である。  
![](http://www.htmq.com/style/images/vertical-align02.gif)



親ブロック要素ボックス領域を基準に中央揃えされる。
そのため親要素の高さ(heightプロパティ)が対象のインライン要素の高さ(行ボックス？)より
大きいか、同階層に対象のインライン要素より高さのある要素がないと適用されない。
![](https://www.granfairs.com/blog/upload/staff-2017-03-09-centering-by-css-04.png)

### 2.2.ブロック要素の中央揃え(縦方向)
横方向と同じくブロック要素同士は記述方向から順に詰めて配置されるものなので、
揃えるという概念は存在しない。横方向同様に余白(margin)を利用する。

例）
```css
p{
  height: 60px;
  margin-height: auto;
}
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

vertifical-alignクイックリファレンス  
http://www.htmq.com/style/vertical-align.shtml

CSSで要素を上下や左右から中央寄席する７つの方法  
https://www.granfairs.com/blog/staff/centering-by-css

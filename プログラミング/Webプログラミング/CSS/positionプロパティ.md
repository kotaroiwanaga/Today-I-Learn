## postionプロパティとは
要素の配置位置の基準となる**包含ブロック**を設定するプロパティである。  
要素の位置指定は基本的にこの包含ブロックの左端を基準に行われる。

ただし、positionプロパティは包含ブロック(基準位置)を決めるのみであって、
実際の表示位置を指定したい場合は、基準位置からの距離を設定する top, bottom, left, right を併用する。  
(top,bottom,left,rightを指定しないと表示位置は親要素の表示領域基準となる)

### 包含ブロックとは
要素を配置するときの基準となる領域のこと。
親要素の内容領域やウィンドウ(ブラウザの表示領域)などpositionプロパティを使って
明示的に指定することができる。  
デフォルトでは親要素の内容領域となる。  
![](https://www.webdesignleaves.com/pr/images/css/containingBlock.jpg)


### positionに設定できる値
#### static
デフォルトの値。
親要素の内容領域を包含ブロックとする。  
ただし、この値のときはtop, bottom, left, right は適用されない。

#### relative
親要素の内容領域を包含ブロックとする。  
staticとは異なり、top, bottom, left, rightを指定できる。

#### absolute
position:static;以外の直近の祖先要素を包含ブロックとする。  
該当する祖先要素がなければ、ウィンドウが包含ブロックとなる。

#### fixed
ウィンドウ(表示されている領域)を包含ブロックとする。
他の値の時も同じだが、postion:fixedを指定しただけでは表示位置はデフォルトと変わらないので、  
必ずtop, bottom, left, rightと併用すること。

### コラム ウィンドウの正体ってなんだ？
#### ページ全体(ウィンドウ) = body ?  
body要素をposition:relative;などに設定してleft:100px;などで表示領域の位置をずらすと
それに合わせてposition;:absolute;の子要素も移動するが、bodyをpostion:static;に戻すと
bodyの表示領域ではなく画面左端に配置されるので、bodyの外の何かを包含ブロックとしているみたい。
でもbodyにbackgroud-colorを設定するとbodyのmargin設定を無視してページ全体に色がつくので
bodyの表示領域の概念が謎。

#### ページ全体(ウィンドウ) = html ?  
body要素にmarginをつけた状態でbackgroun-colorを設定すると画面全体に色がつくが、
その状態でhtml要素にbackground-colorを設定すると余白部分にだけhtmlのbackground-colorの色がつく。
htmlにposition:relative;とmarginを設定するとpostion:absolute;やposition:relative;の要素は
marginに合わせて位置が変わった。が、background-colorは相変わらず全体に適用されている。
ちなみに、htmlをpostion:relative;の状態でleftやtopを設定してもbackground-colorの領域や子要素の位置は変わらなかった。

bodyもhtmlも祖先要素にpostion:static;以外が設定されている要素がなければ、自身がページ全体を担うことになる？

## 参考
視覚整形モデル/ボックス   
https://www.webdesignleaves.com/pr/css/css_basic_02.html

CSSクイックリファレンス position   
http://www.htmq.com/style/position.shtml

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

ただし、body要素をposition:absolute;にしても
包含ブロックはウィンドウのようだ。(こういう例外作るの嫌い、、、)
しかもfixedと違ってスクロールするとウィンドウとの距離が変わるので、
本当にウィンドウを包含ブロックにしているかと言われると微妙。
かと言ってbodyにmarginがあってもtop:0にすると余白無視してウィンドウの上端に配置されるので
bodyの表示領域を包含ブロックにしているわけでもない。なんだこいつ。

#### fixed
ウィンドウを包含ブロックとする。
他の値の時も同じだが、postion:fixedを指定しただけでは表示位置はデフォルトと変わらないので、  
必ずtop, bottom, left, rightと併用すること。
topとかを設定すると常にウィンドウとの距離を保とうとするので、スクロールしても画面に固定されたままになる。  
本来の意味を考えるとこいつだけが真にウィンドウに合わせて配置位置を決めているといえる。

## 参考
視覚整形モデル/ボックス   
https://www.webdesignleaves.com/pr/css/css_basic_02.html

CSSクイックリファレンス position   
http://www.htmq.com/style/position.shtml

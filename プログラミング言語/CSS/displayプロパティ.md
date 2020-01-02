# 目次
1. [displayプロパティとは](#displayプロパティとは)
2. [主なプロパティ値](#主なプロパティ値)  
    1. [display: none;](#displaynone)
    2. [display: block;](#displayblock)
    3. [display: inline;](#displayinline)
    4. [display: inline-block;](#displayinline-block)
    5. [display: list-item;](#displaylist-item)
    6. [テーブルベースのレイアウト](#テーブルベースのレイアウト)
    7. [display: flex;](#displayflex)
3. [参考](#参考)

# displayプロパティとは
要素の表示形式を指定することができる、CSSの中でも極めて重要なプロパティ値。要素の種類によって初期値が異なり、ほとんどの要素がblock(ブロックレベル要素)かinline(インライン要素)のいずれかを初期値に持つ。
  
[目次に戻る](#目次)

# 主なプロパティ値
比較的使用率の高いものだけを紹介する。

## display: none;
要素とその子要素の占有領域を折りたたむ。見かけ上は要素が存在していないように見える。

[目次に戻る](#目次)  

## display: block;
ブロックレベル要素として扱う。1行丸ごと占有するため、要素の前後に改行が入り、高さの概念を持つ。  
詳しくは⇒ [HTMLタグの分類](../HTML/HTMLタグの分類.md#ブロックレベル要素)

[目次に戻る](#目次)  

## display: inline;
インライン要素として扱う。行内の一部とみなされるため、要素の前後に改行は入らず、表示領域のサイズは内包コンテンツに従うため、変更できない。    
詳しくは⇒ [HTMLタグの分類](../HTML/HTMLタグの分類.md#インライン要素)
    
[目次に戻る](#目次)  

## display: inline-block;
ボックス内部はブロックレベル要素として扱われ、ボックス外部からはインライン要素として扱われる。  

[目次に戻る](#目次)   
  
## display: list-item;
li要素に初期値として割り当てられているプロパティ値。li要素をのdisplayプロパティ値を変更した後に戻す際はこの値を設定する。
  
[目次に戻る](#目次)    

## テーブルベースのレイアウト
tableのような振る舞いをさせるプロパティ値。`display: table;`や`display: table-row;`などがある。
  
[目次に戻る](#目次)    

## display: flex;
この値を指定した要素はflexコンテナとなり、その子要素はflexアイテムとなる(孫要素までは拡張されない)。「flex」とは「融通が利く」という意味であり、flexアイテムに様々な種類の並列レイアウトを適用させることができる。flexコンテナには専用のプロパティを設定することができ、これを使って様々な並列レイアウトを適用する。  
参考⇒ https://liginc.co.jp/web/html-css/css/21024/2

[目次に戻る](#目次)   




# 参考
- あなたはCSSプロパティ”display”をどのぐらい知っているだろうか？  
https://postd.cc/how-well-do-you-know-display/#those-we-know-quite-well-already
- スタイルシートリファレンス display  
http://www.htmq.com/style/display.shtml

[目次に戻る](#目次)  

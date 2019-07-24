## 定義ファイル(.def)とは
__declspec(dllexport) のようにDLLが公開する関数を決めることができるテキストファイル

defファイルで公開できるのは関数と変数だけ(クラスやクラスのメンバは公開できないよ)

書き方は下記参照(わっかりにくいけど)  
- https://docs.microsoft.com/ja-jp/cpp/build/reference/exports?view=vs-2019  
- http://skru-y.hatenablog.com/entry/2014/03/19/DLL%E3%81%BE%E3%81%A8%E3%82%81_03_def%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB  
- https://www.glamenv-septzen.net/view/668

## __declaspec(dllexport)の問題点

例えば、下記のようにSetData()を公開設定したとすると
```
__declspec(dllexport) void SetData(unsigned char* data)
```
Dependency Walkerを使ってDLLを開くと
```
?SetData@@YAXPAEH@Z
```
という風に関数名に余計な文字列を付けてることがわかる  
⇒エクスポートした関数をC#側から読み込もうとしても、うまくいきません。「エントリ ポイントがありません」と言われて動きません。

参考  
http://rokujo.hatenadiary.com/entry/2015/07/21/084811

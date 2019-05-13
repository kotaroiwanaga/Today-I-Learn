https://yukutare.hatenablog.com/entry/2018/07/19/012933

https://qiita.com/ymdymd/items/bfc1ddfdfe870a387f10

IOの場合↓この辺りでwin32/x64間違ってないか見てみる
```
IOでビルド通らないときプロパティでまず見るところ
・構成プロパティ→全般→出力ディレクトリ が
　../../../../$(Configuration)_$(Platform)\
　になっているか
・C/C++→追加のインクルードディレクトリ 
・リンカー→全般の追加のライブラリディレクトリ
　　$(OutDir)は入っているか
・リンカー→追加の依存ファイル
```

VC100でビルドしたものはMSVCP100.DLLとかMSVCR100.DLLに依存する。
VC141はMSVCP140.DLLとMSVCR140.DLLに依存する。

ランタイムがない場合、さっきのようなエラーが出るので、別途再頒布パッケージをインストールしないといけない

```
コンピューターに msvcp140.dll がないため、プログラムを開始できません。
この問題を解決するには、プログラムを再インストールしてみてください
```

※ちなみにデバッグ版のランタイムは再配布できないので注意 
　⇒対応するVisual Studioが入っていない環境でデバッグ版のモジュールを動かしたい時は注意
 
 ### 参考
 https://loumo.jp/wp/archive/20151106120018/

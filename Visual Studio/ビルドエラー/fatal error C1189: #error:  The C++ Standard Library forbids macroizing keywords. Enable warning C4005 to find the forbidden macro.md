## エラー内容
VS2010→VS2017バージョンアップ作業時に発生
```
fatal error C1189: #error:  The C++ Standard Library forbids macroizing keywords. Enable warning C4005 to find the forbidden macro.
```

## エラーの説明
標準ライブラリに定義済みのマクロを宣言してますよって怒ってる

VC++標準ライブラリのマクロは下記ヘッダに書かれているようだ
```
C:\Program Files (x86)\Microsoft Visual Studio\2017\Professional\VC\Tools\MSVC\14.16.27023\include\xkeycheck.h
```


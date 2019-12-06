## 概要
1テーブルまたはテーブル群を空にする。  
DELETE文でも同じことができるが、実際にテーブルを操作しない分、このコマンドのほうが高速。  
※テーブル所有者しか実行できない。  
※標準SQLにはTRUNCATEコマンドはない。

## 使い方
```
TRUNCATE TABLE [table名(複数テーブル指定時は","(カンマ区切り))]
```

自動インクリメントもリセットしたい場合は
```
TRUNCATE TABLE [table名] RESTART IDENTITY;
```

## 参考
https://www.postgresql.jp/document/8.1/html/sql-truncate.html
https://qiita.com/tonishi/items/2011175ae4835d5bcb55

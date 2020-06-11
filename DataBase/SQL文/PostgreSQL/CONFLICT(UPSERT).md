## CONFLICT(UPSERT)とは
CONFLICT句はPostgreSQL以外のSQLだとUPSERTという機能にあたるもので、
「INSERT句に対してもし制約で弾かれたらUPDATEする」というようなこ

## 構文
```sql
INSERT INTO テーブル名 VALUES ('', '', ...)
```


## 参考

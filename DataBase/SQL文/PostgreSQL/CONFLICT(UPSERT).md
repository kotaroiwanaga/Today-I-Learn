## CONFLICT(UPSERT)とは
CONFLICT句はPostgreSQL以外のSQLだとUPSERTという機能にあたるもので、
「INSERT句に対してもし制約で弾かれたらUPDATEする」というようなこ

### DO UPDATE
INSERTの制約違反時にUPDATEを行う。
1行目は普通のINSERT文  
2行目はどの制約に引っかかったときに適用するか  
3行目は制約に引っかかったときに何をするか
```sql
INSERT INTO テーブル名 VALUES ('値1', '値2', ...)
ON CONFLICT ON CONSTANT 制約名
DO UPDATE SET カラム名='値', カラム名='値', ...;
```
- ON CONSTANT 制約名 を省略すると全ての制約が適用される。 
- 対象となる行が複数ある場合はそれぞれの行で 挿入→挿入失敗なら更新 が行われる。

### DO NOTHING
制約違反時に何もしない

```sql
INSERT INTO テーブル名 VALUES ('値1', '値2', ...)
ON CONFLICT ON CONSTANT 制約名
DO NOTHING

```

## 参考
CONFLICT(UPSERT)を使ってみた
https://dev.classmethod.jp/articles/postgresql-9-5-new-function-upsert-use/

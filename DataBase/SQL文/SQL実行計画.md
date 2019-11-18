## SQL実行計画
ユーザによって発行されたクエリを実行するための手順書のこと。  
主にテーブルからの取得方法や、テーブルの結合方法などが書かれている。  
A5:SQLの場合はCtrl+Eで確認できる。  

### PosgreSQLの場合
Explain文を使う
(※Explain文のほかにもあります)

例)   
- 実行したSQL
```
SELECT
  emp_no
  , emp_name
FROM
  employee
WHERE
  emp_no = 2;
```

- 実行結果
```
Index Scan using employee_pkey on employee  (cost=0.15..8.17 rows=1 width=222) (actual time=0.007..0.008 rows=1 loops=1)  Index Cond: (emp_no = 2)
Total runtime: 0.023 ms

```

〇各用語の説明
```
actual time：処理時間を表す
rows：実行結果として、実際に戻ってきた行数を表す
loops：ステップの実行回数を表す
Planning time：解析されたクエリから実行計画を生成し、最適化するのに要した時間
Execution time：実行時間を表す
```

## 参考
https://www.casleyconsulting.co.jp/blog/engineer/259/

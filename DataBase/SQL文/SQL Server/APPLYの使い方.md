# SQL Server APPLYとは
JOINと同じく結合を行うことができる。
- CROSS APPLY
- OUTER APPLY

の2種類があり、JOINと比較すると下記のような対応になってるイメージ。

| APPLY句 | JOIN句 |
|----|----|
| CROSS APPLY | INNER JOIN |
| OUTER APPLY | LEFT (OUTER) JOIN |

# CORSS APPLY

下記のようなDB構成のとき。

#### テーブル名：department
| id | name |
|----|----|
| 0001 | 総務部 |
| 0002 | 人事部 |
| 0003 | 開発部 |

#### テーブル名：employee
| id | name | 所属部署ID |
|----|----|----|
| 1 | 田中太郎 | 0001 |
| 2 | 山田花子 | 0002 |
| 3 | 鈴木一郎 | 0002 |

各部署に所属する社員一覧を取得するSQLを書きたい場合。

### INNER JOINで書いた場合

```sql
SELECT
	dept.id AS dept_id
    , dept.name dept_name
    , emp.id AS emp_id
    , emp.name AS emp_name
FROM
	department AS dept
INNER JOIN
	employee AS emp
    ON dept.id = emp.dept_id
;
```

取得結果は下記となる。

| dept_id | dept_name | emp_id | emp_name |
|----|----|----|----|
| 0001 | 総務部 | 1 | 田中太郎 |
| 0002 | 人事部 | 2 | 山田花子 |
| 0002 | 人事部 | 2 | 鈴木一郎 |

### CROSS APPLYで書いた場合
上記と同じ取得結果を得たい場合、下記のように書く。

```sql
SELECT
	dept.id AS dept_id
    , dept.name dept_name
    , emp.id AS emp_id
    , emp.name AS emp_name
FROM
	department AS dept
CROSS APPLY
	(
      SELECT
      	id
      	, name
      FROM
      	employee
      WHERE
      	employee.dept_id = dept.id
    ) AS emp
;

```

APPLY句の特徴として、JOIN句と違うのは
**サブクエリ内でサブクエリの外で定義されたテーブルを参照できる**こと。

JOIN句では下記のように書くことができない。
```sql
SELECT
	dept.id AS dept_id
    , dept.name dept_name
    , emp.id AS emp_id
    , emp.name AS emp_name
FROM
	department AS dept
INNER JOIN
	(
      SELECT
      	id
      	, name
      FROM
      	employee
    ) AS emp
    ON dept.id = emp.dept_id
;
```

# OUTER APPLY
OUTER APPLYも特徴はCROSS APPLYと同じ。  

CROSS APPLYの説明と同じDB構成にて、各部署に所属する社員一覧を取得するSQLを書きたい場合。

### LEFT JOINで書いた場合

```sql
SELECT
	dept.id AS dept_id
    , dept.name dept_name
    , emp.id AS emp_id
    , emp.name AS emp_name
FROM
	department AS dept
LEFT JOIN
	employee AS emp
    ON dept.id = emp.dept_id
;
```

取得結果は下記となる。

| dept_id | dept_name | emp_id | emp_name |
|----|----|----|----|
| 0001 | 総務部 | 1 | 田中太郎 |
| 0002 | 人事部 | 2 | 山田花子 |
| 0002 | 人事部 | 2 | 鈴木一郎 |
| 0003 | 開発部 | NULL | NULL |


### CROSS APPLYで書いた場合
上記と同じ取得結果を得たい場合、下記のように書く。

```sql
SELECT
	dept.id AS dept_id
    , dept.name dept_name
    , emp.id AS emp_id
    , emp.name AS emp_name
FROM
	department AS dept
OUTER APPLY
	(
      SELECT
      	id
      	, name
      FROM
      	employee
      WHERE
      	employee.dept_id = dept.id
    ) AS emp
;
```

# 参考
【SQL Server】APPLY オペレータ  
https://yawalab.com/archives/343/apply-%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%82%BF/

SQL Server の APPLY オペレータ  
https://sql55.com/t-sql/sql-server-apply-operator.php


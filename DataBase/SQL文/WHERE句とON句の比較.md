# WHERE句とON句の違い
「LEFT JOINのON句でLEFT側のテーブルの絞り込み条件を書いても意味ないよ」と
業務中に指摘を受けて、ON句とWHERE句はどちらも条件式だからできることは同じだと勘違いしてたことに気づいた。  
今回はINNER JOINとOUTER JOINの違いも踏まえつつ、ON句とWHERE句について比較していく。

###### ※以降OUTER JOINに関してはLEFT JOINを代表として説明していくが、他のOUTER JOINとも共通することなので、LEFT JOIN ⇒ OUTER JOINだと思って読んでください。

## ON句 ~INNER JOINとLEFT JOINの比較~
ON句はFROM句の中でJOIN句とセットで使用する。JOIN句はテーブルのレコード同士を結合させることができる。ON句に書くのは**「結合条件=結合させるレコード間で満たすべき条件」**である。「ON句には結合条件を書く」というのはINNER JOINとLEFT JOINで共通していることであるが、WHERE句と比較するうえで大事になるのはINNER JOINとLEFT JOINの意味の違いにある。  

INNER JOINのON句に書くのは**「両テーブルのレコード同士の組み合わせ条件=LEFT側・RIGHT側それぞれのレコードの絞り込み(抽出)条件」**であり、LEFT JOINのON句に書くのは**「LEFT側に結合させるRIGHT側のレコードの結合条件」**である。

### 例) 以下のテーブルに対してそれぞれINNER JOINとLEFT (OUTER) JOIN句を使ってみる

employee(社員)テーブル
| id   | first_name | last_name | department_id | delflg |
| ---- | ---------- | --------- | ------------- | ------ |
| 1    | 一郎       | 山田      | 1             | 0      |
| 2    | 次郎       | 佐藤      | 2             | 0      |
| 3    | 三郎       | 田中      | 1             | 1      |

department(部署)テーブル
| id   | department_name | delflg |
| ---- | --------------- | ------ |
| 1    | 営業部          | 0      |
| 2    | 人事部          | 1      |

- INNER JOIN
```mysql
SELECT
	left_tb.first_name,
	left_tb.last_name,
	right_tb.department_name,
	left_tb.delflg AS emp_delflg,
	right_tb.delflg AS dep_delflg
FROM
	employee AS left_tb
INNER JOIN -- この行以外同じ文
	department AS right_tb
	ON left_tb.department_id = right_tb.id
	AND left_tb.delflg = '0'
	AND right_tb.delflg = '0'
	
-----------------------------------------------------------------
取得結果
first_name	last_name	department_name   emp_delflg   dap_delflg
一郎	       山田	     営業部             0            0
```



- LEFT JOIN
```mysql
SELECT
	left_tb.first_name,
	left_tb.last_name,
	right_tb.department_name,
	left_tb.delflg AS emp_delflg,
	right_tb.delflg AS dep_delflg
FROM
	employee AS left_tb
LEFT JOIN -- この行以外同じ文
	department AS right_tb
	ON left_tb.department_id = right_tb.id
	AND left_tb.delflg = '0'
	AND right_tb.delflg = '0'
	
-----------------------------------------------------------------
取得結果
first_name	last_name	department_name   emp_delflg   dap_delflg
一郎	       山田        営業部             0            0
三郎	       田中        営業部             1            0 
```

  上記それぞれINNER JOIN、LEFT JOINを使用したSELECT文ではON句に同じ条件を書いているにも関わらず、結果が異なっている。LEFT JOINでは `left_tb.delflg = '0'`が効いていないことがわかる。    
  ここでは**INNER JOINはLEFT側とRIGHT側で結合条件を満たすレコード同士を結合**している。一方で**LEFT JOINのON句はLEFT側の各レコードに結合させるRIGHT側のレコードの結合条件**として扱われるため、**いくらLEFT側の絞り込み条件を書いても意味がない**。同じON句でありながらINNER JOINとLEFT JOINでは意味が異なるのである。  
  正確に言うと**ON句には結合条件を書くのであり、どのテーブルの結合条件について書けるかはJOIN句の種類次第**になるということ。

## WHERE句

前述の通り、FROM句ではJOIN句を使って複数のテーブルを組み合わせることができる。しかし、それはあくまでFROM句の内部を見るとわかることであって、**FROM句の外(WHERE句)から見るとFROM句にはテーブルが一つしかないように見える**。なぜなら、**WHERE句はFROM句内のすべてのテーブル結合(JOIN句の処理)を終えた後に実行されるから**である。よってWHERE句に書くのは**「絞り込み条件=FROM句のテーブルのレコードを絞り込む条件」**である。  
- INNER JOINのON句：LEFT側・RIGHT側両方の絞り込み条件を書ける
- WHERE句：FROM句の全体のレコードに絞り込み条件を書ける

これにより、**ON句とWHERE句では本来の意味は違えど、実質的に同じ絞り込み結果を得ることができる**。

#### 例) INNER JOIN と WHEREで同じ絞り込み条件を書く

- INNER JOIN（さっきと同じSQL）

```mysql
SELECT
	left_tb.first_name,
	left_tb.last_name,
	right_tb.department_name,
	left_tb.delflg AS emp_delflg,
	right_tb.delflg AS dep_delflg
FROM
	employee AS left_tb
INNER JOIN
	department AS right_tb
	ON left_tb.department_id = right_tb.id
	AND left_tb.delflg = '0'
	AND right_tb.delflg = '0'
	
-----------------------------------------------------------------
取得結果
first_name	last_name	department_name   emp_delflg   dap_delflg
一郎	       山田	     営業部             0            0
```

- WHERE

```mysql
SELECT
	left_tb.first_name,
	left_tb.last_name,
	right_tb.department_name,
	left_tb.delflg AS emp_delflg,
	right_tb.delflg AS dep_delflg
FROM
	employee AS left_tb
INNER JOIN
	department AS right_tb
	ON left_tb.department_id = right_tb.id
WHERE
	left_tb.delflg = '0'
AND right_tb.delflg = '0'
	
-----------------------------------------------------------------
取得結果
first_name	last_name	department_name   emp_delflg   dap_delflg
一郎	       山田	     営業部             0            0
```




## まとめ(ON句とWHERE句の使い分け)
### ON句

### WHERE句


# 参考

検索条件をWHEREで指定する場合とJOIN ONで指定する場合の違い  
http://hakutoitoi.hatenablog.com/entry/2012/12/17/005208

SQL JOINの結合条件とWHEREの条件の違いと使い分け  
https://zukucode.com/2017/08/sql-join-where.html
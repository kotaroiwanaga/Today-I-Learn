# WHERE句とON句の違い
「LEFT JOINのON句でLEFT側のテーブルの絞り込み条件を書いても意味ないよ」と
業務中に指摘を受けて、ON句とWHERE句はどちらも条件式だからできることは同じだと勘違いしてたことに気づいた。  
今回はINNER JOINとOUTER JOINの違いも踏まえつつ、ON句とWHERE句について比較していく。

###### ※以降OUTER JOINに関してはLEFT JOINを代表として説明していくが、他のOUTER JOINとも共通することなので、LEFT JOIN = OUTER JOINだと思って読んでください。

## ON句 ~INNER JOINとLEFT JOINの比較~
ON句はFROM句の中でJOIN句とセットで使用する。JOIN句はテーブルのレコード同士を結合させることができる。ON句に書くのは**「結合条件=結合させるレコード間で満たすべき条件」**である。「ON句には結合条件を書く」というのはINNER JOINとLEFT JOINで共通していることであるが、WHERE句と比較するうえで大事になるのはINNER JOINとLEFT JOINの意味の違いにある。  
結論をいうとINNER JOINのON句に書くのは**「両テーブルのレコード同士の組み合わせ条件=LEFT側・RIGHT側それぞれのレコードの絞り込み(抽出)条件」**であり、LEFT JOINのON句に書くのは**「LEFT側に結合させるRIGHT側のレコードの結合条件」**である。

### 例) 以下のテーブルに対してそれぞれINNER JOINとLEFT (OUTER) JOIN句を使ってみる

employee(社員)テーブル
| id   | first_name | last_name | department_id |
| ---- | ---------- | --------- | ------------- |
| 1    | 一郎       | 山田      | 1             |
| 2    | 次郎       | 佐藤      | 2             |
| 3    | 三郎       | 田中      | 1             |

department(部署)テーブル
| id   | department_name | delflg |
| ---- | --------------- | ------ |
| 1    | 営業部          | 0      |
| 2    | 人事部          | 1      |

- INNER JOIN
```sql

```



- LEFT JOIN
```sql

```

  



## WHERE句

前述の通り、FROM句ではJOIN句を使って複数のテーブルを組み合わせることができる。しかし、それはあくまでFROM句の内部を見るとわかることであって、**FROM句の外(WHERE句)から見るとFROM句にはテーブルが一つしかないように見える**。なぜなら、**WHERE句はFROM句内のすべてのテーブル結合(JOIN句の処理)を終えた後に実行されるから**である。よってWHERE句に書くのは**「絞り込み条件=FROM句のテーブルのレコードを絞り込む条件」**である。

## まとめ(ON句とWHERE句の使い分け)
### ON句

### WHERE句


# 参考

検索条件をWHEREで指定する場合とJOIN ONで指定する場合の違い  
http://hakutoitoi.hatenablog.com/entry/2012/12/17/005208

SQL JOINの結合条件とWHEREの条件の違いと使い分け  
https://zukucode.com/2017/08/sql-join-where.html
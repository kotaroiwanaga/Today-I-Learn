## 分析関数(OVER)と集合関数(GROUP BY)
集合関数が**行をまとめて** 一つの集計結果を出すのに対して、  
分析関数は集計結果を出すのは同じだが、**行をまとめずに** それぞれの行で集計結果を出す。

例） COUNTで比較
```sql
-- 集合関数
SELECT
    COUNT(*)
FROM
    tb_test

    COUNT(*)
--------------
          3
```

```sql
-- 分析関数
SELECT
    id,
    name,
    COUNT(*) OVER()
FROM
    tb_test

  ID    NAME    COUNT(*)OVER()
-------------------------------
   1    APPLE                3
   2    BANANA               3
   3    ORANGE               3
```

## OVER句
OVER句では以下の３つの方法で集計対象の範囲指定ができる。  
OVER句になにも指定しなければ全行が集計対象になる。

- [Partition By指定](#Partition-By)
- [Order By指定](#Order-By)
- [Window (Frame)指定](#Window)

### Partition By
 対象をグループ別に区切ることができる。まさにGroup By付きの集合関数がそれぞれの行で実行されたイメージ。

例）
```sql
-- 集合関数
SELECT
  name, COUNT(*)
FROM
  tb_test
GROUP BY
  item

NAME       COUNT(*)
-------------------
Apple            3
Banana           2
```

```sql
-- 分析関数
SELECT 
  id, 
  name,
  COUNT(*)
    OVER(PARTITION BY name) AS COUNT(*)
FROM
  tb_test
ORDER BY 
  id

ID   NAME     COUNT(*)
---------------------- 
 1   Apple          3
 2   Banana         2
 3   Banana         2
 4   Apple          3
 5   Apple          3
```
### Order By
集合関数のOrder By とは意味が違うので注意。
分析関数のOrder By は **「行を順番に並べた上で、最初の行から現在行までのみを集計の対象とする」**
というものである。
つまり、1行目は1行目のみ、2行目は1行目から2行目まで..が集計対象となる。

例）
```sql
-- 分析関数
SELECT
  id,
  name,
  COUNT(*)
    OVER(ORDER BY id)
FROM
  tb_test

ID   NAME     COUNT(*)
---------------------- 
 1   Apple          1
 2   Banana         2
 3   Banana         3
 4   Apple          4
 5   Apple          5
```

### Window
Order By句のオプションみたいなもので、集計対象のFROMとTOを指定できる。
したがってWINDOW指定するときは必ずOrder By句が必要になる。

Order By句の説明にあった「行を順番に並べた上で、最初の行から現在行までのみを集計の対象とする」は
Window指定を省略したデフォルトの動作である。

集計対象の範囲指定方法には以下の2種類がある。
- [Rows](#Rows)
- [Range](#Range)

書き方は以下のどちらかとなる。終了点を省略した場合は終了点は現在行となる。
- ROWS/RANGE <開始点>
- ROWS/RANGE BETWEEN <開始点> AND <終了点>

### Rows
いかに使用例を記す

例）開始点：「2つ前の行(2 PRECEDING)」、終了点：「現在行」
```sql
SELECT 
  id, 
  name,
  SUM(id) OVER(
    ORDER BY
      id
    ROWS 2 PRECEDING
  ) result
FROM
  tb_test

ID   NAME      RESULT
------------------------
1    Apple          1     #         1
2    Banana         3     #     1 + 2
3    Banana         6     # 1 + 2 + 3
4    Apple          9     # 2 + 3 + 4 
5    Apple         12     # 3 + 4 + 5

```
例）開始点：1つ前の行(1 PRECEDING)、終了点：1つ後の行(1 FOLLOWING)
```sql
SELECT
  id,
  name,
  SUM(id) OVER(
    ORDER BY
      id
     ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
  ) result
FROM
  tb_test

ID   NAME      RESULT
------------------------
1    Apple          3     #     1 + 2
2    Banana         6     # 1 + 2 + 3
3    Banana         9     # 2 + 3 + 4
4    Apple         12     # 3 + 4 + 5
5    Apple          9     # 4 + 5

```

開始点、終了点で使える使用法は以下の通り
| 指定方法 | 説明 |
|:-:|:-:|
| UNBOUNDED PRECEDING | 先頭の行(終了点では使えない) |
|  |  |
|  |  | 
|  |  |
|  |  |

### Range

## 参考
- 分析関数（ウインドウ関数）をわかりやすく説明してみた  
https://qiita.com/tlokweng/items/fc13dc30cc1aa28231c5

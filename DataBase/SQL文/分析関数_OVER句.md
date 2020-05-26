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

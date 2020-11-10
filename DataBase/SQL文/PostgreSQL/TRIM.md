# (PostgresSQLの)TRIM
characters（デフォルトでは空白）で**指定された文字群のみを含む最も長い文字列**を、stringの先頭、末尾、そしてその両方から削除する。

## 文法
### BOTH/TRIM
指定した文字群のみを含む最も長い文字列をstringの両端から削除する。 
ちなみに文字群を指定しなかった場合は、空白を両端から削除する。

```sql
-- 1.BOTHあり
SELECT
  'xabxcxx',
  TRIM(BOTH 'x' FROM 'xabxcxx')
 ;

-- 2.BOTHなし
 SELECT
  'xabxcxx',
  TRIM('x' FROM 'xabxcxx')
 ;

 -- 結果 (1,2とも同じ)
 before  | after |
 ---------------------
 xabxcxx | abxc   |

```

### LEADING/LTRIM
指定した文字群のみを含む最も長い文字列をstringの先頭(左端)から削除する。

```sql
-- 1.LEADING
SELECT
  'xabxcxx',
  TRIM(LEADING 'x' FROM 'xabxcxx')
 ;

-- 2.LTRIM
 SELECT
  'xabxcxx',
  LTRIM('x' FROM 'xabxcxx')
 ;

 -- 結果 (1,2とも同じ)
 before  | after |
 ---------------------
 xabxcxx | abxcxx   |
```

### TRAILING/RTRIM
指定した文字群のみを含む最も長い文字列をstringの末尾(右端)から削除する。

```sql
-- 1.TRAILING
SELECT
  'xabxcxx',
  TRIM(TRAILING 'x' FROM 'xabxcxx')
 ;

-- 2.RTRIM
 SELECT
  'xabxcxx',
  RTRIM('x' FROM 'xabxcxx')
 ;

 -- 結果 (1,2とも同じ)
 before  | after |
 ---------------------
 xabxcxx | xabxc   |
```

## PosgreSQLのTRIMの注意点
例えば以下のように書いたとすると**'x'と'-'のみで構成される最も長い文字列**を先頭・末尾から削除する。  
'x-'という並びは考慮されないので注意。
```
SELECT
  'x-xxxabc-xx',
  TRIM(BOTH 'x-' FROM 'x-xxxabc-xx')
 ;
 
 -- 結果
 before      | after |
 ---------------------
 x-xxxabc-xx | abc   |
```



# 参考
文字列関数と演算子  
https://www.postgresql.jp/document/9.3/html/functions-string.html

PostgreSQL/文字列の不要なスペースをトリミングする・TRIM・LTRIM・RTRIM  
https://db.just4fun.biz/?PostgreSQL/%E6%96%87%E5%AD%97%E5%88%97%E3%81%AE%E4%B8%8D%E8%A6%81%E3%81%AA%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%92%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%99%E3%82%8B%E3%83%BBTRIM%E3%83%BBLTRIM%E3%83%BBRTRIM

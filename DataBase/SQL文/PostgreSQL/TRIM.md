# (PostgresSQLの)TRIM
characters（デフォルトでは空白）で**指定された文字群のみを含む最も長い文字列**を、stringの先頭、末尾、そしてその両方から削除する。

## 文法
### LEADING/LTRIM
指定した文字群のみを含むもっともの長い文字列をstringの先頭から削除する

## 注意点
例えば以下のように書いたとすると**'x'と'-'のみで構成される最も長い文字列**を先頭・末尾から削除する。  
'x-'という並びは考慮されないので注意。
```
SELECT
  'x-xxxabc-xx',
  TRIM(BOTH 'x-' FROM 'x-xxxabc-xx'
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

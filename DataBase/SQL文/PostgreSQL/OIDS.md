**※PostgreSQLのオプション**

## オブジェクト識別子(OID)
PostgreSQLの内部で様々なシステムテーブルの主キーとして使用されるもの。
OID以外にも型が存在する(詳しくは[参考](https://www.postgresql.jp/document/8.0/html/datatype-oid.html))。

## オプションの効果
**大規模なデータベースやテーブル**に対してはOIDSを**使用しないほうが効果的**。  
OIDは4Byte符号なし整数として実装されているため、大規模なデータベースだと  
主キーに一意な値を割り当てるには不十分な数になる可能性がある。

## 使い方
テーブル定義時に使う
```
CREATE TABLE xxx
(
  ...
) WITHOUT OIDS
```

#### WITH OIDS または 未記入(デフォルト)
⇒オブジェクト識別子を主キーとして使用する  
※設定

#### WITHOUT OIDS
⇒オブジェクト識別子を主キーに使用しない

## 参考
https://www.postgresql.jp/document/8.0/html/datatype-oid.html
http://tak-lab.net/2015/10/postgres-without-oids-%E3%81%A8%E3%81%AF%EF%BC%9F/

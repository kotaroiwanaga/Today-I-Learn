## Arrays.asListとは
java.util.Arrays.asList()は**配列をListとして扱う**ことができるメソッド。

これを使うと**配列をListに変換することなく**、Listのメソッドを使用できる。
```java
String[] array = {"foo", "bar", "baz"};

Arrays.asList(array).stream().forEach(s -> {
  System.out.println(s);
});
```

## 注意点
**配列をリストとして扱う**ことができるだけで、**実態は配列のまま**であること。  
例えば以下のような書き方をすると**UnsupportedOperationException**になる

```java
// List生成
List<String> list = Arrays.asList("a", "b", "c");

// 要素を追加
list.add("d");

// 要素を削除
list.remove(0);
```

なぜなら、あくまで中身は配列であり、配列は固定長(要素追加したり、削除したりできない。)であるから。

## 参考
https://qiita.com/HomMarkHunt/items/c0172bd6c9801c5768d2

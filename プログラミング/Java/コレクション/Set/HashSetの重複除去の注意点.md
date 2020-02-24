## HashSetとは
Set型を継承する具象クラスの一つ。特徴は重複を許さないこと。  
例えば下記のように重複する用ををSetに追加しようとしても追加されない(例外にはならずfalseを返す)。

```java
HashSet<String> set = New HashSet<>();
String[] array = {"a", "b", "a", "c", "b", "a"};

for(String s : array){
  System.out.println("add(" + s + ") : " + set.add(s));
}
```
出力
```
add(a) : true
add(b) : true
add(a) : false
add(c) : true
add(b) : false
add(a) : false
```

## 自作クラスを要素の型にしたHasSetを作る際の注意点
**※あくまで個人的考察だが**  
- 同一比較によって重複判定するため、フィールの値が等しくても異なるものだと判定される。
- equals()をオーバーライドしてみたが改善されず。(デバッグで確認したがequalsは呼ばれていないようだ)

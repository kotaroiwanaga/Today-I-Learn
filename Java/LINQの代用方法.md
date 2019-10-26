C#のLINQの機能をJavaで実現するには

## 合計値(int)
```java
List<Integer> list = new ArrayList<Integer>();

int sum = list.stream()     // streamの機能を使う
          .mapToInt(x -> x) // Integer → int に変換
          .sum();
```

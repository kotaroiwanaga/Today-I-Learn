C#のLINQの機能をJavaで実現するには

## 合計値(int)
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int sum = list.stream()     // streamの機能を使う
          .mapToInt(x -> x) // Integer → int に変換
          .sum();
```

## 最大値/最小値
※最小値はmax⇒minにするだけなので省略

- **方法１**
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int max = list.stream()     // streamの機能を使う
          .mapToInt(x -> x) // Integer → int に変換
          .max()
          .orElse(0);       // 該当する値がなかった場合に返す値を決める
```

- **方法２**
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int max = Collections.max(list);
```

## 最大値/最小値のインデックス
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int max = list.indexOf(Collections.max(list));
```

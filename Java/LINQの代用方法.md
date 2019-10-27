C#のLINQの機能をJavaで実現する方法

# 目次
- [合計値](https://github.com/kotaroiwanaga/Today-I-Learn/blob/master/Java/LINQ%E3%81%AE%E4%BB%A3%E7%94%A8%E6%96%B9%E6%B3%95.md#%E5%90%88%E8%A8%88%E5%80%A4int)

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

## 抽出：条件に合う要素だけのリストを作る（LINQのWhereにあたる）
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

// 偶数のみのリストを抽出する
List<Integer> evenList = list.stream()                       // streamの機能を使う
                             .filter(x -> x % 2 == 0)        // 条件を入力
                             .collect(Collectors.toList());  // List型に変換

```

# 参考
Listのメソッド
https://www.sejuku.net/blog/20355#indexOf

streamを使う1
https://qiita.com/pepepe/items/337134b4fccbfee83a2d

streamを使う2
https://futurismo.biz/archives/3987/#%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E5%90%88%E8%A8%88%E3%82%92%E6%B1%82%E3%82%81%E3%82%8B

LINQ to Objects と Java8-Stream API と Kotlin の対応表
https://qiita.com/amay077/items/9d2941283c4a5f61f302

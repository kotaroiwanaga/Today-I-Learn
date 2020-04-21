C#のLINQの機能をJavaで実現する方法

# 目次
- [合計値](#合計値)
- [最大値/最小値](#最大値最小値)
- [最大値/最小値のインデックス](#最大値最小値のインデックス)
- [最大値/最小値(オブジェクトのメンバ変数)](#最大値最小値オブジェクトのメンバ変数)
- [抽出](#抽出条件に合う要素だけのリストを作るLINQのWhereにあたる)
- [射影](#射影各要素に同じ処理を施したリストを作るLINQのSelectにあたる)
- [並び替え(昇順)](#自然順序昇順に並び替え)
- [並び替え(自作クラス)](#オブジェクトのメンバ変数で並び替え)
- [並び替え(任意の条件)](#任意の条件順に並び替えLINQのOrderByにあたる)
- [要素数](#要素数LINQのCountにあたる)
- [重複をなくす](#重複をなくすLINQのDistinctにあたる)

## 合計値
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int sum = list.stream()     // streamの機能を使う
          .mapToInt(x -> x) // Integer → int に変換
          .sum();
```
[目次に戻る](#目次)

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
[目次に戻る](#目次)

## 最大値/最小値のインデックス
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

int max = list.indexOf(Collections.max(list));
```
[目次に戻る](#目次)

## 最大値/最小値(オブジェクトのメンバ変数)
```java
// ※Pointはint x をメンバ変数に持つ
List<Point> list = new ArrayList<Point>();

Point max = list.stream()
                .max(Comparator.comparingInt(point -> ppoint.getX()))
		.get();
```

## 抽出：条件に合う要素だけのリストを作る（LINQのWhereにあたる）
```java
import java.util.*;
import java.util.stream.Collectors;

List<Integer> list = new ArrayList<Integer>();

// 偶数のみのリストを抽出する
List<Integer> evenList = list.stream()                       // streamの機能を使う
                             .filter(x -> x % 2 == 0)        // 条件を入力
                             .collect(Collectors.toList());  // List型に変換

```
[目次に戻る](#目次)

## 射影：各要素に同じ処理を施したリストを作る（LINQのSelectにあたる）
```java
import java.util.*;
import java.util.stream.Collectors;

List<Integer> list = new ArrayList<Integer>();

// 各要素の数値を10倍にしたリストをを作る
List<Integer> result = list.stream()                 // stream機能を使う
                     .map(x -> x * 10)               // 処理を記入
                     .collect(Collectors.toList());  // List型に変換
        
```
[目次に戻る](#目次)

## 自然順序（昇順）に並び替え
```java
import java.util.*;
import java.util.stream.Collectors;

List<Integer> list = new ArrayList<Integer>();

List<Integer> result = list.stream()                         // stream機能を使う
                             .sorted()
                             .collect(Collectors.toList());  // List型に変換
```
[目次に戻る](#目次)

## オブジェクトのメンバ変数で並び替え
```java
List<Point> list = new ArrayList<Point>();

// メンバ変数xでソート
list.sort(Comparator.comparing(Point::getX));

//yで降順ソート
list.sort(Comparator.comparing(Point::getY).reversed());

//xで昇順ソート、xが同じ場合はyで降順ソート、yも同じ場合はcolorで昇順ソート
list.sort(Comparator.comparing(Point::getX)
		.thenComparing(Point::getY).reversed()
		.thenComparing(Point::getColor));
```
[目次に戻る](#目次)

## 任意の条件順に並び替え（LINQのOrderByにあたる）
```java
import java.util.*;
import java.util.stream.Collectors;

List<Integer> list = new ArrayList<Integer>();

// 降順に並び替え
List<Integer> result = list.stream()                         // stream機能を使う
                             .sorted((x, y) -> y - x)        // 並べ替え条件を入力(->の右側の計算結果が0より大きい場合に並び替え)
                             .collect(Collectors.toList());  // List型に変換

```
[目次に戻る](#目次)

## 要素数（LINQのCountにあたる）
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

long cnt = list.stream() // stream機能を使う
               .count(); // 戻り値がlongであることに注意
```
[目次に戻る](#目次)

## 重複をなくす（LINQのDistinctにあたる）
```java
import java.util.*;

List<Integer> list = new ArrayList<Integer>();

List<Integer> result = list.stream()
                       .distinct()
                       .collect(Collectors.toList());
```
※要素の型に不変でないオブジェクトを使う場合は注意 ⇒[参考：distinctの罠](stream().distinct()の罠.md)

[目次に戻る](#目次)


# 参考
Listのメソッド  
https://www.sejuku.net/blog/20355#indexOf

streamを使う1  
https://qiita.com/pepepe/items/337134b4fccbfee83a2d

streamを使う2  
https://futurismo.biz/archives/3987/#%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E5%90%88%E8%A8%88%E3%82%92%E6%B1%82%E3%82%81%E3%82%8B

LINQ to Objects と Java8-Stream API と Kotlin の対応表  
https://qiita.com/amay077/items/9d2941283c4a5f61f302

自作クラス型のリストをメンバ変数で並び替え  
http://lovedvoraklayout.hatenablog.com/entry/java-object-sort

# List⇒配列
**toArray**を使う
```java
import java.util.*;

List<String> list = new ArrayList<>();

// List⇒配列
// toArray()に格納先の配列を渡してあげる
String[] array = list.toArray(new String[list.size()]);
```

## 注意点
下記のように変更しても動作するが、サイズ0の配列を作った後にすぐ削除して新しくListと同じサイズの配列を作り直すため**処理が遅くなる**
```diff
-String[] array = list.toArray(new String[list.size()]);
+String[] array = list.toArray(new String[0]);
```

# 配列⇒List
**asList**を使う
```java
import java.util.*;

String[] array = new array[5];

// 配列⇒List
List<String> list = Arrays.asList(array);
```

## 注意点
### 1. List\<T>のTはオブジェクト型のみ有効
オブジェクト型のリストList\<Intenger>は作れても、**プリミティブ型のリストList\<int>は作れない**ので気を付ける。  
特に下記のようにList\<T>型に格納しないような使い方をすると、エラーは出ないのに思いもよらない動作をすることがあるので注意。

```java
import java.util.*;

int[] array = {1, 2, 3, 4};

int index = Arrays.asList(array).indexOf(1);
// index = -1 となる(1を値に持つ要素が見つからなかった)
```
  
### 2. そのままではサイズが変更できない
**add()やremove()などはArrayListでないと利用できない**ので、List⇒ArrayListに変換する必要がある。
```java
import java.util.*;

String[] array = new array[5];

// 配列⇒List
List<String> list = Arrays.asList(array);

// List⇒ArrayList
List<String> newList = new ArrayList<>(list);
newList.add("a");
```

# 参考
https://www.sejuku.net/blog/16155#asListList

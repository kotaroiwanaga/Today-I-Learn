## 配列⇒List
**toArray**を使う
```java
import java.util.*;

List<String> list = new ArrayList<>();

// 配列⇒List
// toArray()に格納先の配列を渡してあげる
String[] array = list.toArray(new String[list.size()]);
```

### 注意点
```diff
-String[] array = list.toArray(new String[list.size()]);
+String[] array = list.toArray(new String[0]);
```
としても動作するが、サイズ0の配列を作った後にすぐ削除して、新しくListと同じサイズの配列を作り直すため**処理が遅くなる**

# 参考
https://www.sejuku.net/blog/16155#asListList

## 書き方
### key,value両方ループ
```java
for(Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey());
    System.out.println(entry.getValue());
}
```

### keyループ
```java
Map<String, Integer> map = new HashMap<>();

for(String key : map.keySet()){
    System.out.println(key);
}
```

### valueループ
```java
Map<String, Integer> map = new HashMap<>();

for(Integer value : map.values()){
    System.out.println(value);
}
```

## 参考
https://qiita.com/kaneko_tomo/items/b9bd6775a78cb95d2a1b

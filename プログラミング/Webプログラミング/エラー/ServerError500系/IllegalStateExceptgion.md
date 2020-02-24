## 発生したエラー
- エラー番号：500
- エラーの種類：
```
java.lang.IllegalStateException: Neither BindingResult nor plain target object for bean name 'eventAddForm' available as request attribute
```
BindingResultもなければ"eventAddForm"という名前のBeanFormもないよと怒ってます

## 考えられる原因
### JSP側
1. form:formタグのidプロパティが間違ってる。  
("eventAddForm"という名前の属性がモデルに追加されてない。)  

### Controller側
1. "eventAddForm"という名前の属性をモデルに割り当てていない。   
(@ModelAttributeの引数の値を間違えている、そもそも割り当てるためのメソッドを書いていない。)  
2. "eventAddForm"の名前で追加している属性のクラス定義に間違いがある。  
(フィールドの型をString以外にしている、getter/setterを書いていない、フィールド名を間違えている)

### その他
1. 最新のコードが反映されていない  
　　⇒サーバーを再起動する。

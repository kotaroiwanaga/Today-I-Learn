# 目次
[1. 構造体はデフォルトコンストラクタが定義できない](#構造体がなぜかデフォルトコンストラクタを定義できない)

# 構造体がなぜかデフォルトコンストラクタを定義できない
タイトル通り引数なしのコンストラクタを定義しようとするとコンパイルエラーになる
```
struct Hoge{
  int a;

  // コンパイルエラー
  public Hoge(){

  }
  
  // OK
  public Hoge(int a){
    this.a = a;
  }
}
```

このように構造体にはデフォルトコンストラクタを明示的に定義できない(オーバーライドできない)にもかかわらず、
**暗黙的にデフォルトコンストラクタが定義されている**。

### この謎仕様による弊害
構造体のフィールドに規定値(nullとか)が代入される可能性を排除できない。

以下のようにsetterからxにnullが入ることを防いだところで、
引数なしでインスタンス化されてしまったらxはnullになってしまう。
```
public class Program{
  static void = new Hoge();
}

public struct Hoge{
  private string x;
  
  public SetX(string x){
    if(x != null){
      this.x = x;
    }
  }
}
```
  
デフォルト引数を使ったとしてもデフォルトコンストラクタが優先されてしまい、nullが入るようだ
```
public struct Hoge{
  private string x;

  public Hoge(string x = ""){
    this.x = x;
  }
}
```

## 参考
http://atsukanrock.hatenablog.com/entry/20090309/1236656352

  
  
[目次に戻る](#目次)

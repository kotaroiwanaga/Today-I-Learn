## Object.equals()でデフォルト
C#, Java共通の仕様なのだが、Object.equals()はデフォルトでは同一比較(== と同じ比較方法)を行っている。

## 注意が必要な場面
- 自作クラスの場合、equalsをオーバーライドしない限りデフォルトのままであるため、  
  不変オブジェクトと同じようにequalsと同じように使用すると思ってもみない結果が出るかも。
- C#はLINQが充実してるからまだいいが、Javaのstream()などを使って新しくCollectionを作成する際に  
　要素同士の比較にequals()が使われている場合があるため注意が必要。  
  ⇒参考 [stream().distinct()の罠](./Java/コレクション/[stream().distinct()の罠.md)

## 参考
Java のequals  
http://buzzword111.hatenablog.com/entry/2014/11/09/150456

C# のequals  
http://light11.hatenadiary.com/entry/2018/07/27/221551

### エラーの説明
コンパイラ オプション /MT (静的リリース)、/MTd (静的デバッグ)、/MD (動的リリース)、 /MDd (動的デバッグ) が混在してるんだけどって怒ってる

### 解決策
依存関係のあるプロジェクト同士で「構成プロパティ」→「C/C++」→「コード生成」→「ラインタイム ライブラリ」で選択してるオプションを一致させる

### 参考
https://social.msdn.microsoft.com/Forums/vstudio/ja-JP/685d495c-cff5-42fe-8ab7-3da0f6c21660/visual-studio-20121239112398125221253112463124561252112540?forum=vsgeneralja

http://msdn.microsoft.com/ja-jp/library/bb531344.aspx

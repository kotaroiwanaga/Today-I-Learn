### 方法1:Git Bashを使う
gitをインストールするといっしょにインストールされる。
Git Bash上であればLinuxコマンドが使えるようになる。

### 方法2:busyboxコマンド

- 下記よりbusybox.exeをダウンロード  
http://frippery.org/busybox/

- ダウンロードしたbusybox.exeのディレクトリの環境パスを通す

- 以下のコマンドを実行するとシェルが起動し、Linuxコマンドが使えるようになる
```
> busybox sh -l
```

やめるときはexit
```
> exit
```

参考
https://qiita.com/tetsuy/items/22cba0bc2048967b270a

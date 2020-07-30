# はじめに
「Subversionは悪、Gitにするべき」  
両者を使ってみると確かにそうだなと思うが、具体的に何がどう違うのか、どんな部分でGitのほうが優れているのか理解が曖昧だったので調べてみた。

本稿ではバージョン管理システムのうち集中型と分散型について両者の違いに主点を当てて説明していく。
節女のためにGitを分散型の代表、Subversionを集中型の代表としてそれぞれ扱っていくが、Subversionの問題解決のためにGitが作られたとか、
Gitが初の分散型バージョン管理システムだというわけではないので注意。あくまで代表例として出してるだけ。

# バージョン管理システムとは
バージョン管理とは成果物の変更を管理することであり、それを担うシステムをバージョン管理システムという。
各作業者のファイルの変更をまとめたり、以前のバージョンとの差分をとったり、復元したりなど、
チーム開発を進めるうえで必要な操作を担い、開発効率を向上させることができる。

バージョン管理システムには対象のデータの管理方法によって種類があり、本稿では以下のシステムについて説明する。
- **集中型**  
例) Subversion(SVN)，Concurrent Version System(CVS)
- **分散型**  
例) Git, Mercurial, Bazaar, Fossil

## 集中型バージョン管理システム
リポジトリ(データの保管場所)がサーバ上のリモートリポジトリの１つだけに集中しており、
作業者全員が同じリポジトリに対して変更を加えていく。
作業者はリモートリポジトリから最新のデータをローカルの作業ディレクトリに複製(update)し、
ローカルでデータを変更し、リモートリポジトリに反映(commit)させることで複数人での共同編集を実現している。
![](https://bst-image.imgix.net/prod-hivelocity/content/uploads/2014/11/postimg02_20141106-.jpg?auto=format&ixlib=php-1.2.1)

## 分散型バージョン管理システム
リモートリポジトリからローカルへリポジトリごと複製(clone, 最新の状態に更新するときは pull)する。

![](https://bst-image.imgix.net/prod-hivelocity/content/uploads/2014/11/postimg03_20141106-.jpg?auto=format&ixlib=php-1.2.1)

# GitとSubversionの比較
ここから具体的な両者の違いとそれによるメリット・デメリットについて見ていく。

## リポジトリの所在
リポジトリが中央(リモートサーバ)に一局集中してるのが中央集中型であり、リポジトリが各作業者のローカル環境とリモートサーバに分散しているのが分散型である。

## 変更管理方法
Subversionはファイルごと、Gitはコミット単位で変更を管理する。

## ブランチ
Gitのブランチ＝コミット履歴(コミットツリー)につけた目印

# 参考
Git と Subversion の構造的な違い  
https://www.ricksoft.jp/blog/archives/9483

Git - Wikipedia  
https://ja.wikipedia.org/wiki/Git

BitKeeper - Wikipedia  
https://ja.wikipedia.org/wiki/BitKeeper

バージョン管理システム歴史  
https://karasuyamatengu.hatenadiary.org/entry/20111218/1324164137

【初心者】【バージョン管理】中央集中型システムと分散型システムについて  
https://qiita.com/y518gaku/items/9a789b4bddfabe687dfa

Gitではじめるバージョン管理  
https://www.hivelocity.co.jp/blog/33793/

分散バージョン管理システムGit入門  
https://www.itmedia.co.jp/enterprise/articles/0902/09/news019.html#:~:text=%E5%88%86%E6%95%A3%E5%9E%8B%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A7%E3%81%AF%E3%80%81%E5%A4%89%E6%9B%B4%E3%82%92%E5%8A%A0%E3%81%88%E3%81%9F,%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AB%E9%80%81%E4%BF%A1%E3%81%99%E3%82%8B%E3%80%82

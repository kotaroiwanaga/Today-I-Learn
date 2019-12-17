
下記を参考にした
http://akira-arets.blogspot.com/2018/08/docker-mate-desktop-vncserver.html
https://gtrt7.com/blog/linux/rdp-centos
https://qiita.com/shinoere/items/35793d9c6155145cb37c
https://qiita.com/FukuharaYohei/items/a6c1e1a2ba8d1285cfa5

コンテナを起動
> docker run --privileged -d -p 5992:5902 --name <コンテナ名> centos:centos6.8 /sbin/init 

コンテナ確認
> docker ps

コンテナにログイン
> docker exec -it <コンテナ名> /bin/bash 


☆ここからコンテナ内での作業

yumを更新しておく
> yum update -y

wgetをインストール
> yum -y install wget

ファイル編集用にemacsコマンドインストール (viコマンドを使ってもよいが、ファイル保存がうまくいかなかったので)
> yum -y install emacs

管理者権限に切り替え
> su -

xrdp, tigervnc-serverなどをインストールするために必要なepel-releaseをインストール

> yum install y epel-release

※epel-releaseを有効になってる場合、コマンドで--enablerepo=epelをつける必要がなくなる

xrdp, tigervnc-serverをインストール
> yum -y install--enablerepo=epel xrdp
> yum -y install --enablerepo=epel tigervnc-server   

デスクトップ環境をインストール
Xfceがインストール可能か確認(Xfceが一覧にあればOK)
> yum -y --enablerepo=epel grouplist

Xfceグループの中身を確認
> yum -y --enablerepo=epel groupinfo Xfce

どの段階まで自動インストールするか設定
> group_package_types=default,mandatory

※↑３つのコマンドはやらなくてもいい

Xfceのインストール
> yum -y groupinstall --enablerepo=epel Xfce

xfce4のインストール
> yum -y groupinstall --enablerepo=epel "X Window System"

X Window Systemの起動(グラフィカルログイン)時にxfce4が起動するように設定
> echo "exec startxfce4" > ~/.xsession

参考
http://www.turbolinux.co.jp/products/server/10s/manual/command_guide/command_guide/xenv.html

Xfceのインストールについて
http://note.kurodigi.com/centos7-xfce/
https://qiita.com/n-yamanaka/items/cd02aa3f9737d66f42d3

日本語キーボード対応(標準インストーラで導入されるのは英語キーボードのため)
> cd /etc/xrdp
> wget http://www.mail-archive.com/xrdp-devel@lists.sourceforge.net/msg00263/km-e0010411.ini
> cp km-e0010411.ini.1 km-e0200411.ini 
   ↑km-e0010411.ini.1が作られてない場合、英語キーボードすら入ってなかったてことだと思うので、そのままでよい

xrdpのサービス起動と自動起動を有効
> service xrdp start
> chkconfig xrdp on

↑のコマンド参考
http://blog.livedoor.jp/customnotes/archives/1018857354.html

Firewallのを切ってリモートデスクトップ接続を有効にする

> service iiptables stop
↑本当はリモートデスクトップ接続のポートだけを開けたほうが安全だけど(ローカルで試すだけなんで)
参考
http://capella.3rin.net/Entry/49/

rootにパスワードの設定
> passwd

または

ユーザ追加
> useradd <ユーザ名>
> passwd <ユーザ名>

上記で設定したユーザのホームディレクトリに.Xclientsを作成し、実行権限を与える
> su <ユーザ名>
> echo "xfce4-session" > ~/.Xclients
> chmod a+x ~/.Xclients

一旦コンテナから抜ける
> exit

参考
https://www.hiroom2.com/2017/10/01/centos-7-xrdp-xfce-ja/

☆ここからホストOS上での作業


イメージを作成(コミット)する (消えたら困るので)
> docker commit <コンテナ名> <イメージ名>

ポート転送して起動
> docker run --name <コンテナ名> -p 13389:3389 -it <イメージ名> /bin/bash


☆ここからコンテナ内での作業
xrdpの起動
> service xrdp restart



☆ここからホストOS上での作業

リモートデスクトップを起動し、コンピュータ：「localhost:13389」で接続
設定したユーザ名(rootの場合は「root」)、パスワードを入力



※コンテナ側でエラーが出たときは/var/logにいろんなログがあるので見てみるといい
※リモートデスクトップ接続しても画面に背景しか表示されない場合、コンテナを再起動してみる
> docker restart <コンテナ名>

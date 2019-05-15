# インストール、準備

windows10の場合
- docker desktop for windows をインストール
-  Hyper-V を有効にする
https://docs.microsoft.com/ja-jp/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v
- コマンドプロンプトにてDockerコマンドを入力してコマンドが受け付けられることを確認

windows8の場合
- virtualboxをすでにインストールしている場合は最新のものにアップデート
- docker toolkit をインストール(virualbox未インストールの場合、virutalboxのインストールにチェックを入れる)
- docker quickstart terminalを起動し、くじらの絵が出ることを確認(初回起動には結構時間がかかる)

# centosイメージの取得

以下を参考にする
https://qiita.com/mats16/items/90a5d1490b38903b30ad

プルするバージョンを指定する場合は以下のようにする（例centos6.8）
> docker pull centos:centos6.8

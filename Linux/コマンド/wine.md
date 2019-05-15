■wine(exeファイルの実行に使う)のインストール
> yum install --enablerepo=epel wine

×文字化け対策用にwinetricksを利用してフォントのインストール

winetricksのインストール
> cd /usr/local/bin/
> wget  https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
> chmod +x winetricks

winetricksでfontインストール
> yum -y install cabextract

winetricks起動
> winetricks

fontのインストール
(winetricksのGUI上で)
・「Select the default wineprefix」を選択し、「OK」
・「Install a font」を選択し、「OK」

※インストール中何度もOKボタン押さないといけない

参考：wineのインストール
https://qiita.com/kuroko1t/items/59d62e2ac692295ca30a

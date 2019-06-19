## IrfranViewerとは
動画やmp3も開けるフリーの画像ビューワー
frawファイルも開けるので重宝する

## frawファイルを開くまで

#### ツールダウンロード

1. 下記から IrfanView（64bit版）と IrfanView PlugIns（64bit版）をダウンロード 
https://forest.watch.impress.co.jp/library/software/irfanview/

2. iviewXXX_x64_setup.exeを実行してツールをダウンロード  
※今回は画像ビューワーとして使いたいので「Image only」をクリックして画像のプラグインだけインストールする  

3. iviewXXX_plugins_x64_setup.exeを実行しプラグインをインストール(これがないとfraw形式は読み込めない)  
※インストール先はiviewXXX_x64_setup.exeのときと同じ場所にする

##### frawのフォーマットを確認
```
struct FRAW_HEADER
{
	char			id[2];		//  0 : ID
	unsigned char	ver;		//  2 : version
	unsigned char	rev;		//  3 : revision
	uint32_t		offs;		//  4 : offset
	unsigned short	width;		//  8 : width
	unsigned short	height;		// 10 : height
	unsigned short	depth;		// 12 : depth
	unsigned short	kind;		// 14 : kind (NEGA:1,POSI:2)
	unsigned short	base;		// 16 : FPX resolution kind(4:4base,16:16base)
	unsigned char	reserve[14];
};
```
これによると画像の幅、高さの情報は12, 14バイト目に書いてあるらしい




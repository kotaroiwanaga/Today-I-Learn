基本的な使い方については検索

初期のソース読み込み時はCMakeが使える使えないを判断してこうもくにチェック入れてくれてるので、
基本的にはチェック変えずにConfigureしていい

だたし、そのままConfigure→Generateすると使わないものも入っちゃって無駄になるので、
いらないものは目で見てチェック外す

### opencvをcmakeした時によくわからなかったWITH_XXXについて

- cuFFT
NVIDIA®CUDA™高速フーリエ変換（FFT）製品  
NVIDIA GPUで高性能を提供できるように設計されている  
https://docs.nvidia.com/cuda/cufft/index.html  

- PvAPI
GigE Vision 製カメラを制御するライブラリ
http://tessy.org/wiki/index.php?Computer%20Vision%20Advent%20Calendar%202012%202%C6%FC%CC%DC
http://www.aprolink.jp/download/av/software/avt_pvapi/japanese/AVT_PvAPI_SDK.pdf

- GigEAPI
いい感じの記事見つけられなかったけど↑と同じでカメラ系なのでは？

- VFW
Video for Windows
https://www.ecoop.net/coop/vfw/avi.html

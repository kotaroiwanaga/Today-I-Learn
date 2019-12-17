Virtual Boxにてovaファイルをインポートしたところ下記のようなエラーが出た

```
終了コード : 
E_INVALIDARG (0x80070057)
```

試したこと
①UUID変更
https://shimi-dai.com/virtualbox-uuid-e_invalidarg-0x80070057/

```
>VBoxManage.exe -nologo internalcommands sethduuid CentOS6.5_64.ova
VBoxManage.exe: error: Format autodetect failed: VERR_NOT_SUPPORTED
```
⇒だめだった

②cloneしたものをインポートしてみる
https://forums.virtualbox.org/viewtopic.php?f=6&t=4821&start=15

```
>VBoxManage clonehd CentOS6.5_64.ova CentOS6.5_64_.ova

VBoxManage.exe: error: Could not get the storage format of the medium 'CentOS6.5_64.ova' (VERR_NOT_SUPPORTED)
VBoxManage.exe: error: Details: code VBOX_E_IPRT_ERROR (0x80bb0005), component MediumWrap, interface IMedium, callee IUnknown
VBoxManage.exe: error: Context: "OpenMedium(Bstr(pszFilenameOrUuid).raw(), enmDevType, enmAccessMode, fForceNewUuidOnOpen, pMedium.asOutParam())" at line 191 of file VBoxManageDisk.cpp
```
⇒だめだった

①②どちらとも`error: Format autodetect failed: VERR_NOT_SUPPORTED`とあるのでovaファイル認識されてない？
ちなみに全く関係ない形式のファイルで実行すると同じエラー表示がされた

```
>VBoxManage.exe clonehd C:\IO\IOLinux版をDockerイメージ化\eclipse-cpp-indigo-SR2-incubation-linux-gtk-x86_64.tar.gz C:\IO\IOLinux版をDockerイメージ化\eclipse-cpp-indigo-SR2-incubation-linux-gtk-x86_64.tar.gz
VBoxManage.exe: error: Could not get the storage format of the medium 'C:\IO\IOLinux版をDockerイメージ化\eclipse-cpp-indigo-SR2-incubation-linux-gtk-x86_64.tar.gz' (VERR_NOT_SUPPORTED)
VBoxManage.exe: error: Details: code VBOX_E_IPRT_ERROR (0x80bb0005), component MediumWrap, interface IMedium, callee IUnknown
VBoxManage.exe: error: Context: "OpenMedium(Bstr(pszFilenameOrUuid).raw(), enmDevType, enmAccessMode, fForceNewUuidOnOpen, pMedium.asOutParam())" at line 191 of file VBoxManageDisk.cpp
```

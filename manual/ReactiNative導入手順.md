# 1. Node.js(NVMforWindows)のインストール
Windowsストアで「アプリインストーラ」がインストールされていることを確認
Powershellを管理者権限で起動

```
winget install -e --id CoreyButler.NVMforWindows
nvm list available
// LTSの最新バージョンを選択します
nvm install 18.13.0
nvm use 18.13.0
```

# 2.Android Studioのインストール
* CUIでインストールする
```
winget install -e --id Google.AndroidStudio
```
* GUIでインストールする
→https://developer.android.com/studio/install?hl=ja

WindowsメニューからAndroid Studioを起動して
各種ライセンスに同意します。
「More Actions」から「Virtual Device Manager」を選択します。
「Create Device」を選択して、エミュレータを１つ作成します。(例: Pixel 6 Pro API 33 [Android 13.0 Google APIs|x86_64])

# 3.AndroidStudioのPATHを通す
環境変数に以下のPATH情報を追加する。

| 環境変数名   | 環境変数値                            |
| :----------- | :------------------------------------ |
| ANDROID_HOME | C:\Users\○○\AppData\Local\Android\Sdk |
| Path         | %ANDROID_HOME%\platform-tools         |

# 4.サンプルプロジェクトを実行
任意の場所でPowershellを起動します。
```
cd C:\~ // 任意のフォルダに移動
npx react-native init reactNativeTest --template react-native-template-typescript
cd reactNativeTest
npx react-native run-android
```

npxがない場合はインストールが必要かも？
ダウンロードサイト → https://nodejs.org/en/
ダウンロード完了後に以下の確認を行う
```
npm --version
npx --version
```
npxの確認が行えない場合は以下のコマンドを実行
```
npm install -g npx
```
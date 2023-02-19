# 0. 公式サイトからGoをダウンロード
- 公式サイト
https://go.dev/doc/install
ダウンロード手順は「Go installation」のあたりに書いてある。

# 1. パッケージの追加方法
importに対象のパッケージを追加
``` go
import (
	"net/http"
	
	"github.com/labstack/echo/v4"
)
```
パッケージ追加コマンドを実行
``` 
go mod init back
```
go.modに対象のパッケージが追加される
``` Go
require github.com/labstack/echo/v4 v4.10.0

require (
	github.com/labstack/gommon v0.4.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.16 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	github.com/valyala/fasttemplate v1.2.2 // indirect
	golang.org/x/crypto v0.2.0 // indirect
	golang.org/x/net v0.4.0 // indirect
	golang.org/x/sys v0.3.0 // indirect
	golang.org/x/text v0.5.0 // indirect
)
```

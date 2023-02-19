package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	// echoオブジェクトを作成
	e := echo.New()

	// ルーティング
	e.GET("/", hello)
	e.GET("/users/:id", getUser)
	// ↓GET以外もやり方がある
	//e.POST("/users", saveUser)
	// e.PUT("/users/:id", updateUser)
	// e.DELETE("/users/:id", deleteUser)
	e.GET("/show", show)

	e.Logger.Fatal(e.Start(":1323"))
}

// http://localhost:1323
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "hello")
}

// http://localhost:1323/users/1234
func getUser(c echo.Context) error {
	// User ID from path `users/:id`
	id := c.Param("id") // IDがURIの中のidを取ってきてくれるみたい
	return c.String(http.StatusOK, id)
}

// http://localhost:1323/show?team=aaaa&member=bbb
func show(c echo.Context) error {

	// Get team and member from the query string
	// QueryParamがHTMLのクエリパラメータをさばいてくれるみたい
	team := c.QueryParam("team")
	member := c.QueryParam("member")
	return c.String(http.StatusOK, "team:"+team+", member:"+member)
}

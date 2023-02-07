package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Ret struct {
	Success bool
}

func main() {
	r := mux.NewRouter()

	r.Handle("/api/auth", auth)

	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

var auth = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	var login Login

	if err := json.NewDecoder(r.Body).Decode(&login); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	email := login.Email
	password := login.Password
	fmt.Printf("email = %s\n", email)
	fmt.Printf("password = %s\n", password)

	// success
	if email == "testuser" && password == "testuser" {
		ret := &Ret{
			Success: true,
		}
		json.NewEncoder(w).Encode(ret)
		return
	}

	// failure
	ret := &Ret{
		Success: false,
	}
	json.NewEncoder(w).Encode(ret)
})

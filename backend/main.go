package main

import (
	"backend/db"
	"backend/router"
)

func main() {
	dbConn := db.Init()
	router.Router(dbConn)
}

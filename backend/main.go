package main

import (
	"backend/db"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Init()

	r := gin.Default()

	r.GET("/greeting", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

		c.JSON(200, gin.H{
			"message": "hello, world",
		})
	})
	r.Run(":8000")
}


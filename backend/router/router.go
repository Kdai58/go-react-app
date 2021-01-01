package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"time"

	"backend/controllers"
)

func Router(dbConn *gorm.DB) {
	todoHandler := controllers.TodoHandler{
		Db: dbConn,
	}
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"PUT", "PATCH", "DELETE", "POST", "GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "*"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.GET("/greeting", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

		c.JSON(200, gin.H{
			"message": "hello, world",
		})
	})
	r.GET("/todo", todoHandler.GetAll)           // 一覧画面
	r.POST("/todo", todoHandler.CreateTask)      // 新規作成
	r.GET("/todo/:id", todoHandler.EditTask)     // 編集画面
	r.PUT("/todo/:id", todoHandler.UpdateTask)   // 更新
	r.DELETE("todo/:id", todoHandler.DeleteTask) // 削除
	r.Run(":8000")
}

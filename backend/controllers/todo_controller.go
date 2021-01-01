package controllers

import (
	"backend/models"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"net/http"
)

type TodoHandler struct {
	Db *gorm.DB
}

func (h *TodoHandler) GetAll(c *gin.Context) {
	var todos []models.Todo
	h.Db.Find(&todos)
	c.JSON(http.StatusOK, todos)
}

func (h *TodoHandler) CreateTask(c *gin.Context) {
	todo := models.Todo{}
	err := c.BindJSON(&todo)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
	h.Db.Create(&todo)
	c.JSON(http.StatusOK, &todo)
}

func (h *TodoHandler) EditTask(c *gin.Context) {
	todo := models.Todo{}
	id := c.Param("id")
	h.Db.First(&todo, id)
	c.JSON(http.StatusOK, todo)
}

func (h *TodoHandler) UpdateTask(c *gin.Context) {
	todo := models.Todo{}
	id := c.Param("id")
	h.Db.First(&todo, id)
	err := c.BindJSON(&todo)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}
	h.Db.Save(&todo)
	c.JSON(http.StatusOK, &todo)
}
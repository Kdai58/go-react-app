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

package db

import (
	"backend/models"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func Init() *gorm.DB {
	err := godotenv.Load(fmt.Sprintf("../%s.env", os.Getenv("GO_ENV")))
	if err != nil {
		panic("Can't read .env file")
	}

	const (
		DBMS := os.Getenv("DBMS")
		USER := os.Getenv("USER")
		PASS := os.Getenv("PASS")
		PROTOCOL := os.Getenv("PROTOCOL")
		DBNAME := os.Getenv("DBNAME")

		CONNECT = USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?" + "charset=utf8mb4&parseTime=True&loc=Asia%2FTokyo"
	)
	db, err := gorm.Open(DBMS, CONNECT)

	if err != nil {
		panic("failed to connect to the database")
	}

	db.LogMode(true)
	db.AutoMigrate(&models.Todo{})
	return db
}

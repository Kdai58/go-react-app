package db
import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"backend/models"
)
func Init() *gorm.DB {
	const (
		DBMS = "mysql"
		USER = "root"
		PASS = "root"
		PROTOCOL = "tcp(mysql:3306)"
		DBNAME = "go-react-app"
		CONNECT = USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME
	)
	db, err := gorm.Open(DBMS, CONNECT)

	if err != nil {
		panic("データベースへの接続に失敗しました")
	}

	db.LogMode(true)
	db.AutoMigrate(&models.Todo{})
	return db
}

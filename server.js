const express = require('express') /*const ตัวแปรที่ใช้ได้ทั้งหน้า เปลี่ยนค่าไม่ได้*/
const { twig } = require('twig')

const app = express()

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))


// app.get('/', function(req, res) { ฟังก์ชันที่ไม่มีชื่อ เพราะใช้ครั้งเดียวแล้วก็ไป เลยไม่จำเป็นต้องกำหนดชื่อ
// 	res.send('Hello')
// })

// app.get('/home', function(req, res) {
// 	res.send('Home')
// })


app.listen(8000, function(err) { /*ฟังก์ชั่นข้างหลังคือ call back คือทำต่อหลังจากทำอีกอย่างเสร็จ 8000, function(err)*/
	console.log('Server is running on port 8000') /*แสดงค่าตัวที่รัน*/
})
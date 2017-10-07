exports.index = function(req, res) {
	res.render('home.twig')
}

// exports.index = function(req, res) { /*สร้างฟังก์ชัน index ที่รับค่า require กับ respond*/
// 	let content = {
// 		banner: [
// 			{
// 				id: 1,
// 				url: '//image/img-1.jpg'
// 			},
// 			{
// 				id: 2,
// 				url: '//image/img-1.jpg'
// 			}
// 		]
//  	}

//  	res.json(content)
// }
exports.index = function(req, res) { /*สร้างฟังก์ชัน index ที่รับค่า require กับ respond*/
	let content = {
		news: [
			{
				id: 1,
				url: '//image/img-1.jpg',
				title: 'news 1'
			},
			{
				id: 2,
				url: '//image/img-1.jpg',
				title: 'news 2'
			}
		]
 	}

 	res.json(content)
}
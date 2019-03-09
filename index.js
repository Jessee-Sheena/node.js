const express = require('express')
const PORT = process.env.PORT || 5000
var path = require('path');

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/math', (req, res) => {
		var oper1 = Number(req.query.value1);
		var oper2 = Number(req.query.value2);
		var operation = req.query.operation;
		var total = getTotal(oper1, oper2, operation);

		console.log("Total = " + total);

		var param = {
			total: total
		};

		res.render("pages/math", param);
	})
	.get('/math_service', (req, res) => {
		var oper1 = Number(req.query.value1);
		var oper2 = Number(req.query.value2);
		var operation = req.query.operation;
		var total = getTotal(oper1, oper2, operation);

		console.log("Total = " + total);

		var param = {
			total: total
		};

		res.write(JSON.stringify(param));
		res.end();
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`))

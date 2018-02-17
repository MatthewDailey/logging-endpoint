const express = require('express')
const app = express()

app.use(require('body-parser').json())

app.get('/', (req, res) => {
	console.log(req.body);
	res.send('success');
})

app.post('/', (req, res) => {
	console.log(req.body)
	res.send({passcode: req.body.passcode})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

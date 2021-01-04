const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('POSTMAN으로 GET과 POST request 테스트');
})

app.get('/select', (req, res) => {
    res.send(req.query);
})

app.post('/select', (req, res) => {
    if (req.body.email==="abcd@naver.com" && req.body.password===1234) {
        res.send("로그인 성공");
    } else {
        res.send("로그인 실패");
    }
})


app.listen(port, () => {
    console.log('server is working');
})

const fs = require('fs');
const cors = require('cors'); //разрешает всем сторонним ресурсам отправлять запрос на 3000
const express = require('express');
const { log, error } = require('console');


//user

const userJson = "./src/app/shared/mocks/users.json"; //путь к моковым данным
const jsonFileData = fs.readFileSync(userJson, 'utf-8');
let parseJasonData = JSON.parse(jsonFileData); //

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/register', (req, res) => {
    //ищем пользователя по совпадению
    if (req.body?.login) {
        const isUserExist = parseJasonData.users.find((user) => user.login === req.body?.login);

            if (!isUserExist) {
                parseJasonData.users.push(req.body);
                const json = JSON.stringify(parseJasonData);
                fs.writeFileSync(userJson, json, 'utf-8', (data) => {}, (error) => {
                    console.log('Ошибка при записи файла', error)
                });

                res.send('ok');
            } else {
                throw new Error('Пользователь уже зарегистрирован');
            } 
    } else {
        throw new Error('Не найдено свойство login');
    }
    console.log('parseJsonData Registration', parseJasonData)

})


app.post('/auth', (req, res) => {
    log('req.body', req.body)


    if (req.body?.login && req.body.password) {
        //считываем файл
        const jsonFileData = fs.readFileSync(userJson, 'utf-8', (error, data) => {}, (error) => {console.log('err read file', error);});
    
        //парсим файл
        const parseJasonData = JSON.parse(jsonFileData);
        console.log('parseJsonDatha auth', parseJasonData)

        if (Array.isArray(parseJasonData?.users)) {

            //проверяем корректность пользователя
            const isUserExist = parseJasonData?.users.find((user) => user.login === req.body?.login && user.password === req.body?.password);

            if (isUserExist) {
                res.send(isUserExist);
            } else {

                throw new Error('AUTH-Error')

            }
        } 
    } else {
        throw new Error('не нфйдено свойство login или password');
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

            







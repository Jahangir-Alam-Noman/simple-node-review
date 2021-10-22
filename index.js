const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('learning node and express ever');
})



/* app.get('/users', (req, res) => {
    res.send('Here are my users');
}) */

/* app.get('/users', (req, res) => {
    res.send({ id: 1, name: 'Shabana', email: 'shabana45@gmail.com', phone: '0178888888' })
})
 */


const users = [
    { id: 0, name: 'Sonia', email: 'Sonia@gmail.com', phone: '0178888888' },
    { id: 1, name: 'shabana', email: 'shabana1@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Srijit', email: 'Srijit@gmail.com', phone: '0178888888' },
    { id: 3, name: 'shusmita', email: 'shusmita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'subornamirza', email: 'subornamirza@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Sumaiya', email: 'Sumaiya@gmail.com', phone: '0178888888' }


];


// app.get('/users', (req, res) => {
//     res.send(users);
// })

// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id);
// })


/* 
app.get('/users', (req, res) => {
    console.log(req.query.search);
})
 */


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user =>
            user.name.toLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users);
    }
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.json(newUser);
})



app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'bananas', 'apples', 'oranges']);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazliiiii');
})



app.listen(port, () => {
    console.log("listening to port", port);
})
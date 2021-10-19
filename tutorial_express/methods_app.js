const express = require('express');
const app = express();
let {people} = require('./mock_db');


app.listen(5000, () => {
    console.log('Listening on 5000');
});
// parse form data
app.use(express.urlencoded({extended: false}));

// parse json
app.use(express.json());

// GET: people
app.get('/api/people', (req, res) => {
    return res.status(200).json({success: true, data: people});
})
// POST: people
app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if (name) {
        const person = {
            id: people.length + 1,
            name
        };
        people.push(person);
        return res.status(201).json({success: true, data: person})
    }
    return res.status(400).json({success: false, data: "Must include 'name' field in data"})
});

app.put('/api/people/:personId', (req, res) => {
    const {personId} = req.params;
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, data: "Must include 'name' field in data"})
    }
    const person = people.find((person) => person.id === Number(personId));
    if (!person) {
        return res.status(404).json({success: false, data: `Couldn't find person with id ${personId}`})
    }
    people = people.map((person) => {
        if (person.id === Number(personId)) {
            person.name = name;
        }
        return person
    });
    return res.status(200).json({success: true, data: person});
})

app.delete('/api/people/:personId', (req, res) => {

    const {personId} = req.params;
    const person = people.find((person) => person.id === Number(personId));
    if (!person) {
        return res.status(404).json({success: false, data: `Couldn't find person with id ${personId}`})
    }
    people = people.filter((person) => person.id !== Number(personId));

    return res.status(200).json({success: true, data: `Person '${person.name}' was removed`});
})
app.get('*', (req, res) => {
    return res.redirect(301, '/api/people')
})
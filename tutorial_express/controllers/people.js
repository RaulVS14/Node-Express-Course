let {people} = require("../mock_db");
const getPeople = (req, res) => {
    return res.status(200).json({success: true, data: people});
};
const createPerson = (req, res) => {
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
};
const updatePerson = (req, res) => {
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
};
const deletePerson = (req, res) => {

    const {personId} = req.params;
    const person = people.find((person) => person.id === Number(personId));
    if (!person) {
        return res.status(404).json({success: false, data: `Couldn't find person with id ${personId}`})
    }
    people = people.filter((person) => person.id !== Number(personId));

    return res.status(200).json({success: true, data: `Person '${person.name}' was removed`});
};
module.exports = {getPeople, createPerson, updatePerson, deletePerson}
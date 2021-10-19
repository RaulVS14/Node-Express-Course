const express = require('express');
const {getPeople, createPerson, updatePerson, deletePerson} = require("../controllers/people");
const router = express.Router();
//
// // GET: people
// router.get('/', getPeople);
//
// // POST: person create
// router.post('/', createPerson);
//
// // PUT: person update
// router.put('/:personId', updatePerson);
//
// // DELETE: person delete
// router.delete('/:personId', deletePerson);

// Shorter solution by linking
router.route('/').get(getPeople).post(createPerson);
router.route('/:personId').put(updatePerson).delete(deletePerson);

module.exports = router;
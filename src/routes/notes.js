const { Router } = require('express');
const router = Router();
const notesCtrl = require('../controllers/notes.controller');

router.route('/').get(notesCtrl.getNotes);

router.route('/').post(notesCtrl.saveNote);

router.route('/:id').delete(notesCtrl.deleteNote);

router.route('/:id').put(notesCtrl.updateNote);

router.route('/:id').get(notesCtrl.getNote);

module.exports = router;
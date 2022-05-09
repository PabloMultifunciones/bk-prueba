const Note = require('../models/Note');
const notesCtrl = {}

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    return res.json(notes);
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content, author});
    return res.json({message : "Note Updated"});
}

notesCtrl.getNote = async (req, res) => {
    const result = await Note.findById(req.params.id);
    return res.json(result);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    return res.json({message : "Note Deleted"});
}

notesCtrl.saveNote = async (req, res) => {
    const isVoid = (field) => field.length === 0;
    const { title, content, author } = req.body;
    if (isVoid(title) || isVoid(content) || isVoid(author)) {
        return res.json({result: 'Note not saved'});
    }
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: {
            type: Date,
            default: Date.now
        }
    });
    await newNote.save();
    return res.json({result: 'Note Saved'});
}

module.exports = notesCtrl;
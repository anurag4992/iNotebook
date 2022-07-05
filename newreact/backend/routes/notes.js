const express = require('express');
const router = express.Router();
const fetchUser = require("../middleWare/fetchUser")
const Note = require("../models/Note")
const { body, validationResult } = require('express-validator');

router.get("/fetchallNotes", fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

router.post("/addNote", fetchUser, [
    body('title', "Title must me atleast 3 char long").isLength({ min: 3 }),
    body('description', "Description should be atleast 5 char long").isLength({ min: 5 })
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()

        res.json(saveNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

router.put("/updateNote/:id", fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find note to update
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})

router.delete("/deleteNote/:id", fetchUser, async (req, res) => {

    //find note to update
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})


module.exports = router
import Note from "../model/noteModel.js"; // Pastikan nama filenya juga diganti ke noteModel.js

// Get All Notes
export const getNotes = async (req, res) => {
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Get Note By ID
export const getNoteById = async (req, res) => {
    try {
        const response = await Note.findOne({
            where: { id: req.params.id },
        });
        if (!response) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Create Note
export const createNote = async (req, res) => {
    try {
        if (!req.body.judul || !req.body.isi_catatan) {
            return res.status(400).json({ message: "Judul dan isi catatan harus diisi" });
        }
        await Note.create(req.body);
        res.status(201).json({ msg: "Catatan berhasil dibuat" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Update Note
export const updateNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        await Note.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Catatan berhasil diubah" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Delete Note
export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        await Note.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Catatan berhasil dihapus" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

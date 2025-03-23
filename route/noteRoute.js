import express from "express";
import { getNotes, createNote, updateNote, deleteNote, getNoteById } from "../controller/noteController.js";

const router = express.Router();

// Endpoint RESTful untuk Catatan (Notes)
router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;

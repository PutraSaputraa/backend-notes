import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Note = db.define(
    "notes",
    {
        judul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isi_catatan: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        createdAt: "tanggal_dibuat",
        updatedAt: "tanggal_diubah",
    }
);

export default Note;

(async () => {
    await db.sync({ force: true }); // Hapus & buat ulang tabel
    console.log("Database & tabel berhasil disinkronisasi");
})();

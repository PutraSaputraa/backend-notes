import express from "express"
import cors from "cors"
import router from "./route/noteRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log("Server Telah Berjalan"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

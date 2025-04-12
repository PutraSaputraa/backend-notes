import express from "express"
import cors from "cors"
import router from "./route/noteRoute.js"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// app.listen(5000, ()=> console.log("Server Telah Berjalan"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

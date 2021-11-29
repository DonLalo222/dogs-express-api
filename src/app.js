import express from 'express';
import { router as dogRouter } from "./routes/dogs.js";
const app = express();
const port = 3000;

// routes
app.use('/dogs', dogRouter);

app.listen(port, () => {
  console.log(`Api listening at http://localhost:${port}`)
})
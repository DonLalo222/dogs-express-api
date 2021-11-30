import express from 'express';
import helmet from 'helmet';
import { router as dogRouter } from "./routes/dogs.js";

const app = express();
const port = 3000;

app.use(helmet());
// routes
app.use('/api/dogs', dogRouter);

app.listen(port, () => {
  console.log(`Api listening at http://localhost:${port}`)
})
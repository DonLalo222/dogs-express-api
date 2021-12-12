import express from 'express';
import helmet from 'helmet';
import { router as dogRouter } from "./routes/dogs.js";
import { router as catController } from "./routes/cats.js";
import cors from "cors";

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(helmet());
app.use(cors());
// routes
app.use('/api/dogs', dogRouter);
app.use('/api/cats', catController);

app.listen(app.get('port'), () => {
  console.log(`Api listening at http://localhost:${app.get('port')}`)
})
import express from 'express';
import helmet from 'helmet';
import { router as dogRouter } from "./routes/dogs.js";

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(helmet());
// routes
app.use('/api/dogs', dogRouter);

app.listen(app.get('port'), () => {
  console.log(`Api listening at http://localhost:${app.get('port')}`)
})
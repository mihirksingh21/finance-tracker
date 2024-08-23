import express, { Express } from 'express';
import mongoose from 'mongoose';
import financialRecordRouter from './routes/financial-records';


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const mongoURI: string = "mongodb+srv://singhmihir12345:zKUat8na8VsIbLgA@financetracker.ifa6d.mongodb.net/";

mongoose
    .connect(mongoURI, {})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.use("/financial-records", financialRecordRouter);


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});



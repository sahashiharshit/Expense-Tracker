import express, { json } from 'express';
import cors from 'cors';
import db from './util/database.js';
import expenseRoutes from './routes/expensesRoute.js';
const app = express();

app.use(json());
app.use(cors());
app.use("/expenses",expenseRoutes);

db.sync().then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err));



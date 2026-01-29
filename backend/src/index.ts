import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import  mongoose  from 'mongoose';
mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req: Request, res: Response) => {
    res.json({message: 'API is working'});
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;

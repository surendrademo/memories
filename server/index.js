import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './db/connectdb.js'
import postRoutes from './routes/posts.js'
// const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const port = process.env.PORT || 5000;
// const CONNECTION_URL = "mongodb+srv://SURENDRASINGH:rOHIT45@atlascluster.nytslmt.mongodb.net/?retryWrites=true&w=majority";
// const CONNECTION_URL = "mongodb://localhost:27017";
// connectDB(CONNECTION_URL);
const CONNECTION_URL = "mongodb+srv://sunnysingh:rOHIT45@cluster0.c9uxwnn.mongodb.net/memo?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err))

// const client = new MongoClient(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("firstdb").collection("PostMessage");
//     // perform actions on the collection object
//     client.close();
// });

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.json({ message: "authantication is sucessfull......" })
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`server running on port : ${PORT}`)))
//     .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
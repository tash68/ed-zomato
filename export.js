import { MongoClient } from 'mongodb';



const filter = {};

const client = await MongoClient.connect(
  'mongodb+srv://tash68:Mongodb68@cluster68.oo9cm.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('ed-zomato').collection('entries');
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();
// const mongoose = require('mongoose')


// module.exports = () =>{


//     return mongoose.connect(
//         "mongodb+srv://tashogeti:Mongodb68@cluster68.dsbcxbp.mongodb.net/?retryWrites=true&w=majority"
//     )
// }

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tashogeti:Mongodb68@cluster68.dsbcxbp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




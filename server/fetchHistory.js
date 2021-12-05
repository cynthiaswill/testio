const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://yzhang4:123456abc@cluster0.rspyf.mongodb.net/My_test_project?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function fetchHistory(roomname) {
  try {
    await client.connect();
    const database = client.db("My_test_project");
    const history = database.collection("chatHistory");
    // query for chatHistory with the matching roomname
    const query = { roomname: `${roomname}` };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { timestamp: 1 },
      // Include only the `username` and `text` fields in each returned document
      projection: { _id: 0, username: 1, text: 1 },
    };
    const cursor = history.find(query, options);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}

module.exports = { fetchHistory };

// fixing the port and url for DB and Server______ used by main file(index.js)
const PORT = 5555;
const MONGO_URL = "mongodb://localhost:27017/";
const DB_NAME = "todo";

const DB_URL = mongodb+srv://TodoAppdb:TodoApp@todoapp.7caeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;

module.exports = { PORT, DB_URL };
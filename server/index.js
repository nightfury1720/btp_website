express = require('express');
bodyParser = require('body-parser');
mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const route = require('./route/posts.js');
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api", route);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://Rivatus:Test1234@cluster0.2s51y.mongodb.net/Database?retryWrites=true&w=majority";
// Create your own mongodb database while working on the feature, so you have access to it.  

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch((error) => console.log(error));

// Check this if facing mongo connection error with wifi: https://stackoverflow.com/questions/56334603/cant-connect-to-mongodb-atlas-querytxt-etimeout

mongoose.set('useFindAndModify', false);

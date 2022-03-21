const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://somikaverma:somikaverma12@mymongodb.q7idm.mongodb.net/bookmymeal?retryWrites=true&w=majority")

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
    console.log('Server is running on port no.3000');
});
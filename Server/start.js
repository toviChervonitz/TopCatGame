const express = require('express');
const cors = require('cors');
const userController = require("./controllers/user")
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userController)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
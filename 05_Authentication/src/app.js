const express = require('express')
const authRoutes = require("./routes/auth.routes")
const cookieParser = require('cookie-parser')
const postRoutes = require('../src/routes/post.routes')

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)

module.exports = app
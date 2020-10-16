// import lib

const express = require("express");
const path = require("path");
const pages = require('./pages.js')
//starting express
const server = express()
server

.use(express.urlencoded({extended: true}))
.use(express.static("public"))

//config template engine
.set ('views', path.join(__dirname, "views"))
.set ('view engine', 'hbs')

// create an route
.get("/", pages.index)
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
// server on
server.listen(5500)
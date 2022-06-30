const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//เชื่อมต่อDatabase
const data = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "request_form",
});

app.post("/AddData", (req, res) => {
  const sqlInsert =
    "INSERT INTO contactor (corg,cname,ctel,cdep,softname,type,obj,des,os,hardware,software,db,user,other,orguser,place,producer,admin,orgown,orgadmin,useFile,userFile,designFile,date) VALUES ?";
    const corg = req.body.corg;
    const cname = req.body.cname;
    const ctel = req.body.ctel;
    const cdep = req.body.cdep;
    const softname = req.body.softname;
    const type = req.body.type;
    const obj = req.body.obj;
    const des = req.body.des;
    const os = req.body.os;
    const hardware = req.body.hardware;
    const software = req.body.software;
    const db = req.body.db;
    const user = req.body.user;
    const other = req.body.other;
    const orguser = req.body.orguser;
    const place = req.body.place;
    const producer = req.body.producer;
    const admin = req.body.admin;
    const orgown = req.body.orgown;
    const orgadmin = req.body.orgadmin;
    const useFile = req.body.useFile;
    const userFile = req.body.userFile;
    const designFile = req.body.designFile;
    const date = req.body.date;
  data.query(
    sqlInsert,
    [
        corg,
        cname,
        ctel,
        cdep,
        softname,
        type,
        obj,
        des,
        os,
        hardware,
        software,
        db,
        user,
        other,
        orguser,
        place,
        producer,
        admin,
        orgown,
        orgadmin,
        useFile,
        userFile,
        designFile,
        date,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen("3001", () => {
    console.log("Running on port 3001");
  });
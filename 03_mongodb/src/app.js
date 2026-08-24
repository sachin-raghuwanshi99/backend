const express = require('express');
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

app.post("/notes",async (req,res)=>{
    const data = req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message: "note created"
    })
})

app.get("/notes", async (req,res) =>{

  //  const notes = await noteModel.find() // returns array []
  const notes = await noteModel.findOne({
    title: "title_01"
  }) // returns object



    res.status(201).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete({
        _id: id
    });

    res.status(201).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({_id: id},{description:description})

    res.status(200).json({
        message:"Note updated successfullly"
    })
})

module.exports = app; 
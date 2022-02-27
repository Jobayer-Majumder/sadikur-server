const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const worksModel = require('../models/worksModel');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const imgName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + imgName)
    },
})
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}).single('file')

router.post('/addDesign', async (req, res) => {
    upload(req, res, async function (err) {
        const { title, category, description } = req.body;
        if (err) {
            res.json({ message: 'Only .png, .jpg and .jpeg format allowed!' })
            console.log(err)
        }

        var img = fs.readFileSync(req.file.path);
        var encode_img = img.toString('base64');
        var final_img = Buffer.from(encode_img, 'base64');

        const worksData = new worksModel({
            title: title,
            category: category,
            description: description,
            file: final_img
        })

        try{

            const data = await worksData.save();
            res.json({message: 'Design added successfully'})
            console.log(data, 'from database')

        }catch(err){
            console.log(err)
        }
    })


});


module.exports = router;
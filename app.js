const express = require('express')

const sharp = require('sharp')

const multer  = require('multer')
const savedImg = multer.memoryStorage()
const upload = multer({ storage: savedImg})

const app = express()

app.use(express.json())

app.post('/imagen', upload.single("imagen") , async function(req, res) {

  const body = req.body

  const imagen = req.file

  const processedImg = sharp(imagen.buffer)

  const resizedImg = processedImg.resize(300)

  const resizedImgBuffer = await resizedImg.toBuffer()

  console.log(resizedImgBuffer)

  res.send('Hola mundo desde el post')
})

app.get('/', function (req, res) {
  
  res.send('Hola Mundo')
})



app.listen(3000)
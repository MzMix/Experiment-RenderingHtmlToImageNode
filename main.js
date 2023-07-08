//Created based on: https://www.npmjs.com/package/node-html-to-image

const nodeHtmlToImage = require('node-html-to-image')
const fs = require('fs');

const image = fs.readFileSync('./testImg.png');
const base64Image = new Buffer.from(image).toString('base64');
const dataURI = 'data:image/jpeg;base64,' + base64Image

nodeHtmlToImage({
    output: './image.png',
    html: `<html>
    <head>
      <style>
        body {
          width: 500px;
          height: 500px;
        }
        img{
            width: 80%;
            height: auto;
            margin: 20px auto;
        }
      </style>
    </head>
    <body>
        Hello world!
        <img src="{{imageSource}}" />
    </body>
  </html>
  `,
    content: { imageSource: dataURI }
})
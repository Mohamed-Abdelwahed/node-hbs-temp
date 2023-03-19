const express = require('express')

const app = express()
const port = process.env.port || 3000


const path = require("path");
// console.log(`${__dirname}\\..\\public`);
// console.log(path.join(__dirname , '../public'));//C:\Users\Mo7amed\Desktop\nodejs\node-lec-\public
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));
// app.get('/' , (req,res)=>{
//     res.send("Hello world")
// })


// app.get('/about' , (req , res)=>{
//     res.send('about page')
// })


// app.get('/service' , (req,res)=>{
//     res.send("SERVICE PAGE")
// })

// app.get('/team' , (req,res)=>{
//     res.send('<h1>this is team</h1><button>Send</button>')
// })

app.get("/data" , (req,res)=>{
    res.send({
        name:"Mohamed",
        age:22,
        city:"Menoufia"
    })
})


app.get("/data1", (req, res) => {
  res.send({
    name: "Mahmoud",
    age: 22,
    city: "quesna",
  });
});

///////////////////////////////////////////////////////////////

//static
// path
// const path = require("path");
// // console.log(`${__dirname}\\..\\public`);
// // console.log(path.join(__dirname , '../public'));//C:\Users\Mo7amed\Desktop\nodejs\node-lec-\public
// const x = path.join(__dirname, "../public");

// app.use(express.static(x));


////////////////////////////////////////////////////////////

// hbs ==>embedded template engines
app.set("view engine", "hbs");
const viewsDirectory = path.join(__dirname  , './teamp1/views')
app.set('views' , viewsDirectory)
// console.log(viewsDirectory);
const hbs = require('hbs')

const partialsPath = path.join(__dirname , './teamp1/partials')
hbs.registerPartials(partialsPath)
app.get('/' , (req,res)=>{
    res.render('index' , {
        title:"page hbs title HOME",
        name:"Mohamed Abdelwahed",
        desc:"this is testing home page for index hbs"

    })
})


app.get('/service' , (req,res)=>{
    res.render('service' , {
        name:"Mohamed Abdelwahed Mohamed",
        title:"SERVICE PAGE",
        city:"Menoufia",
        age:22,
        img1:'images/mohamed.jpg'
    })
})

app.get("/contact", (req, res) => {
  res.render("service", {
    name: "Mohamed Abdelwahed Mohamed",
    title: "CONTACT PAGE",
    phone: "01019643798",
    email: "falzlam440@gmail.com",
    img1: "images/mohamed-suite.jpg",
  });
});


app.get("/team", (req, res) => {
  res.render("service", {
    name: "Mohamed Abdelwahed Mohamed",
    title: "TEAM PAGE",
    city: "CAIRO",
    age: 25,
    img1: "images/mohamed-formal.jpg",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "Mohamed Abdelwahed Mohamed",
    title: "ABOUT PAGE",
    who: "web-developers",
    site: "falzlam440@gmail.com",
    img1: "images/mohamed-red.jpg",
  });
});



app.listen( port,()=> console.log(`your website server run on localhost:${port}`))      
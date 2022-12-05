const axios = require('axios') //to make http request easy
const express = require('express') //express framework
const cheerio = require('cheerio') //to select html elements from a web page
const cors = require('cors')

const PORT = 3000
const URL = 'https://www.bbc.com/'

const app = express()
app.use(cors())

// axios(URL).then(response=>{const html = response.data;
// const $ = cheerio.load(html);
// const articles = []
// $('.fc-item__title', html).each(function(){
//     const title = $(this).text()
//     const url =  $(this).find('a').attr('href')
//     articles.push({title,url})
// })
//     console.log(articles)
// }).catch(err=>console.log(err))




app.get('/',function (req,res){
    res.json('this is webscraper')
})

app.get('/results',(req,res)=>{
    axios(URL).then(response=>{const html = response.data;
        const $ = cheerio.load(html);
        const articles = []
        $('.media__link', html).each(function(){
            const title = $(this).text()
            const url =  $(this).find('a').attr('href')
            articles.push({title,url})
        })
            // console.log(articles)
            res.json(articles)
        }).catch(err=>console.log(err))        
})


app.listen(PORT,()=>{console.log('server running at port '+PORT)})


// .fc-item__title
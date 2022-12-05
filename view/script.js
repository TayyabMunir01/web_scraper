const section = document.getElementById('results')

const myURL = 'http://localhost:3000/results'

fetch(myURL).then(response => response.json()).then(data=>data.forEach(article=>{
    const title = '<li>'+ article.title + '</li>'
    section.insertAdjacentHTML("beforeend",title)
})).catch(err=> console.log(err))



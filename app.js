const http = require('express')
const hbs = require('hbs');
const app = http();

app.use(http.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partiales', err =>{
    console.log(err)
})

app.set('view engine', 'hbs');

const port = process.env.PORT || 8080;

hbs.registerHelper('getAge', () => {
   return new Date().getFullYear();
})
app.get('/', (req, resp) => {
    resp.render('home', {
        name: "Javier Baez",
    })
})

app.get('/about', (req, resp) => {
    resp.render('about', {
        name: "Javier Baez",
    })
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
});


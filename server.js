const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')	
const app = express()
const indexRouter = require('./src/routers/indexRouter.js')
const routerProducto = require('./src/routers/routerProducto.js')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, 'public')))
app.use('/',indexRouter);
app.use('/productos', routerProducto)
app.use('/api/productos', routerProducto)

// config view engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("public"), "layouts"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
//app.set('views', './views')
//app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const server = app.listen(3000, ()=> {console.log('listening on port',server.address().port)})
server.on('error',(err)=>console.log('error',err.message))

/*let botonHandlebars = document.getElementById("botonHandlebars")
botonHandlebars.addEventListener('click', () => {
  const response = fetch (`http://localhost:8080/api/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(nuevoProducto),
})}*/

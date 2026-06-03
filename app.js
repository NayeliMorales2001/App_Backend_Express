require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

// ===== SESIONES =====
app.use(session({
  secret: 'mi_secreto_express',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

// ===== ARCHIVOS ESTATICOS =====
app.use('/views', express.static(path.join(__dirname, 'views')));

// ===== MOTOR DE VISTAS =====
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===== BODY PARSER =====
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ===== VISTAS =====
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/altas', (req, res) => {
  res.render('altas');
});

app.get('/editar', (req, res) => {
  res.render('editar');
});

app.get('/consulta', (req, res) => {
  res.render('consulta');
});

// ===== RUTAS =====
const alumno_rutas = require('./routes/alumnos_routes');
app.use('/alumnos', alumno_rutas);

// ===== PUERTO =====
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor ejecutandose en puerto " + PORT);
});
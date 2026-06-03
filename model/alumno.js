'use strict';

const db = require('../config/database');

let Alumno = function(alumno){
this.num_control = alumno.num_control;
this.nombre = alumno.nombre;
this.primer_ap = alumno.primer_ap;
this.segundo_ap = alumno.segundo_ap;
this.fecha_nac = alumno.fecha_nac;
this.semestre = alumno.semestre;
this.carrera = alumno.carrera;
};

// ===== CREAR =====
Alumno.create = async function(alumno, result){
try {
const [res] = await db.query(
`INSERT INTO alumnos 
(num_control,nombre,primer_ap,segundo_ap,fecha_nac,semestre,carrera)
VALUES (?,?,?,?,?,?,?)`,
[
alumno.num_control,
alumno.nombre,
alumno.primer_ap,
alumno.segundo_ap,
alumno.fecha_nac,
alumno.semestre,
alumno.carrera
]
);
result(null, res);
} catch(err) {
console.log(err);
result(err, null);
}
};

// ===== CONSULTA TODOS =====
Alumno.findAll = async function(result){
try {
const [rows] = await db.query("SELECT * FROM alumnos");
result(null, rows);
} catch(err) {
console.log(err);
result(err, null);
}
};

// ===== CONSULTA POR ID =====
Alumno.findById = async function(id,result){
try {
const [rows] = await db.query(
"SELECT * FROM alumnos WHERE num_control=?",
[id]
);
result(null, rows[0]); // 🔥 IMPORTANTE
} catch(err) {
console.log(err);
result(err, null);
}
};

// ===== ELIMINAR =====
Alumno.delete = async function(id,result){
try {
const [res] = await db.query(
"DELETE FROM alumnos WHERE num_control=?",
[id]
);
result(null, res);
} catch(err) {
console.log(err);
result(err, null);
}
};

// ===== ACTUALIZAR =====
Alumno.update = async function(id, alumno, result){
try {
const [res] = await db.query(
`UPDATE alumnos 
SET nombre=?, primer_ap=?, segundo_ap=?, fecha_nac=?, semestre=?, carrera=? 
WHERE num_control=?`,
[
alumno.nombre,
alumno.primer_ap,
alumno.segundo_ap,
alumno.fecha_nac,
alumno.semestre,
alumno.carrera,
id
]
);
result(null, res);
} catch(err) {
console.log(err);
result(err, null);
}
};

// ===== BUSQUEDA =====
Alumno.search = async function(texto,result){
try {
const [rows] = await db.query(
`SELECT * FROM alumnos 
WHERE num_control LIKE ? OR nombre LIKE ?`,
[`%${texto}%`,`%${texto}%`]
);
result(null, rows);
} catch(err) {
console.log(err);
result(err, null);
}
};

module.exports = Alumno;
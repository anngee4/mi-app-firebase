# 📚 Sistema de Gestión de Alumnos

Este proyecto es una aplicación web desarrollada con HTML, CSS y JavaScript , que permite gestionar un listado de alumnos almacenado en Firebase Firestore. Implementa funciones CRUD (Crear, Leer, Actualizar, Eliminar) y está pensada como herramienta educativa y de aprendizaje sobre el uso de bases de datos NoSQL en la nube.


## 🎯 Objetivo General

Desarrollar una aplicación web funcional conectada a Firebase que permita realizar operaciones CRUD, manejando subdocumentos y arreglos, y que sea útil en un contexto real de gestión de estudiantes, demostrando dominio de tecnologías web y bases de datos NoSQL (Firestore).


## 🛠 Tecnologías Utilizadas

- HTML, CSS y JavaScript 
- Firebase Firestore  (Base de datos NoSQL en tiempo real)
- Replit (como entorno de desarrollo online)
- GitHub Pages 


  ## 🧱 Estructura de la base de datos (Firestore)

La base de datos está organizada en una colección principal llamada "alumnos", y cada documento representa un estudiante. Dentro de cada documento se pueden incluir subcampos y arreglos.

Colección: `alumnos`
{
  "nombre": "Isabella",
  "edad": "18",
  "carrera": "Informática",
  "materias": ["Matemáticas", "Programación", ""],
  "contacto": {
    "email": "isabella@example.com",
    "telefono": "555-123-4567"
  }
}


## 🚀 Instrucciones de uso

1. Clona o abre el proyecto en Replit.
2. Crea un proyecto en Firebase y habilita Firestore (modo prueba).
3. Copia las credenciales del SDK y pégalas en `firebase-config.js`.
4. Abre `index.html` en navegador o haz clic en "Run" en Replit.
5. ¡Empieza a gestionar alumnos!


## 👥 Autores o equipo de desarrollo

- Nombre del los desarrolladores:
     Angelin Ramirez Cabrera
    Brian Absael Marquez Lara.

  
## ✅ Funcionalidades

- Registrar alumnos con nombre, edad, grupo, materias y otros..
- Leer y mostrar en tiempo real la lista de estudiantes.
- Editar información de alumnos.
- Eliminar registros de alumnos.
- Buscar alumnos por nombre.


# 🎓 ¿Para qué sirve este proyecto?

- Aprender a conectar una app web con Firebase Firestore.
- Comprender el uso de operaciones CRUD con JavaScript.
- Explorar cómo se organizan subdocumentos y arreglos en Firestore.
- Usar Firebase como alternativa práctica para proyectos educativos, escolares o personales.



# 📚 Sistema de Gestión de Alumnos

## 🎯 Objetivo General

Desarrollar una aplicación web conectada a Firebase que permita registrar, consultar, editar y eliminar información de alumnos, incluyendo subdocumentos como contacto y listas de materias, utilizando Firestore como base de datos NoSQL y desplegada en Replit.

## 🛠 Tecnologías Utilizadas

- Firebase
- Replit 
- GitHub 
  

## Estructura de la Base de Datos (Firestore)

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


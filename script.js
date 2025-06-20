// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs,
  doc, deleteDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// Configuración Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC6cIoc_xfZQq4Nqm8mGQ8YnNO_UjE93uM",
    authDomain: "my-bd1-2150c.firebaseapp.com",
    projectId: "my-bd1-2150c",
    storageBucket: "my-bd1-2150c.firebasestorage.app",
    messagingSenderId: "755243371902",
    appId: "1:755243371902:web:cdd72c4d1cae265fd1b72f",
    measurementId: "G-T09N32TS17"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const alumnosRef = collection(db, "alumnos");

let modoEdicion = false;
let idActual = "";

// Guardar o actualizar alumno
const form = document.getElementById("alumnoForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: form.nombre.value,
    edad: parseInt(form.edad.value),
    carrera: form.carrera.value,
    materias: form.materias.value.split(",").map(m => m.trim()),
    contacto: {
      email: form.email.value,
      telefono: form.telefono.value
    }
  };

  if (modoEdicion) {
    const alumnoDoc = doc(db, "alumnos", idActual);
    await updateDoc(alumnoDoc, datos);
    modoEdicion = false;
    idActual = "";
    form.querySelector("button").textContent = "Guardar";
  } else {
    await addDoc(alumnosRef, datos);
  }

  form.reset();
  mostrarAlumnos();
});

// Mostrar alumnos
async function mostrarAlumnos() {
  const contenedor = document.getElementById("listaAlumnos");
  contenedor.innerHTML = "";
  const snapshot = await getDocs(alumnosRef);

  snapshot.forEach((docu) => {
    const data = docu.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Edad:</strong> ${data.edad}</p>
      <p><strong>Carrera:</strong> ${data.carrera}</p>
      <p><strong>Materias:</strong> ${data.materias.join(", ")}</p>
      <p><strong>Email:</strong> ${data.contacto.email}</p>
      <p><strong>Teléfono:</strong> ${data.contacto.telefono}</p>
      <button onclick="editarAlumno('${docu.id}', ${JSON.stringify(data).replace(/"/g, '&quot;')})">Editar</button>
      <button onclick="eliminarAlumno('${docu.id}')">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });
}

// Eliminar
window.eliminarAlumno = async (id) => {
  await deleteDoc(doc(db, "alumnos", id));
  mostrarAlumnos();
};

// Editar
window.editarAlumno = (id, datos) => {
  form.nombre.value = datos.nombre;
  form.edad.value = datos.edad;
  form.carrera.value = datos.carrera;
  form.materias.value = datos.materias.join(", ");
  form.email.value = datos.contacto.email;
  form.telefono.value = datos.contacto.telefono;
  idActual = id;
  modoEdicion = true;
  form.querySelector("button").textContent = "Actualizar";
};

// Buscar alumno por nombre
window.buscarAlumno = async () => {
  const nombreBuscar = document.getElementById("buscar").value.trim().toLowerCase();
  const snapshot = await getDocs(alumnosRef);
  const contenedor = document.getElementById("listaAlumnos");
  contenedor.innerHTML = "";

  snapshot.forEach(docu => {
    const data = docu.data();
    if (data.nombre.toLowerCase().includes(nombreBuscar)) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${data.nombre}</h3>
        <p><strong>Edad:</strong> ${data.edad}</p>
        <p><strong>Carrera:</strong> ${data.carrera}</p>
        <p><strong>Materias:</strong> ${data.materias.join(", ")}</p>
        <p><strong>Email:</strong> ${data.contacto.email}</p>
        <p><strong>Teléfono:</strong> ${data.contacto.telefono}</p>
        <button onclick='editarAlumno("${docu.id}", ${JSON.stringify(data).replace(/"/g, '&quot;')})'>Editar</button>
      `;
      contenedor.appendChild(div);
    }
  });
};

// Mostrar todos los alumnos
window.mostrarAlumnos = async () => {
  const snapshot = await getDocs(alumnosRef);
  const contenedor = document.getElementById("listaAlumnos");
  contenedor.innerHTML = "";

  snapshot.forEach(docu => {
    const data = docu.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${data.nombre}</h3>
      <p><strong>Edad:</strong> ${data.edad}</p>
      <p><strong>Carrera:</strong> ${data.carrera}</p>
      <p><strong>Materias:</strong> ${data.materias.join(", ")}</p>
      <p><strong>Email:</strong> ${data.contacto.email}</p>
      <p><strong>Teléfono:</strong> ${data.contacto.telefono}</p>
      <button onclick='editarAlumno("${docu.id}", ${JSON.stringify(data).replace(/"/g, '&quot;')})'>Editar</button>
    `;
    contenedor.appendChild(div);
  });

  // Limpia el campo de búsqueda si es necesario (opcional)
    document.getElementById("buscar").value = "";
  };

mostrarAlumnos();

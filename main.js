let listaContactos=[
{
    nombre:"Pedro",
    apellido:"Benitez",
    direccion:{
        ciudad:"Trujillo",
        direccion:"Colon"
    },
    telefono:212313123,
    correo:"correodePrueb@gamil.com",
    
},
{
    nombre:"Carlos",
    apellido:"Smith",
    direccion:{
        ciudad:"Trujillo",
        direccion:"Colon"
    },
    telefono:2313112313,
    correo:"correodePrueb@gamil.com",
},
{
    nombre:"Maria",
    apellido:"Cardona",
    direccion:{
        ciudad:"Trujillo",
        direccion:"Colon"
    },
    telefono:212313,
    correo:"correodePrueb@gamil.com",
}];

console.log(listaContactos);






function createNewContact(Contact){

    listaContactos.push(Contact);
}


const nuevoContacto={
    nombre:"Jose ",
    apellido:"Fuentes",
    direccion:{
        ciudad:"Trujillo",
        direccion:"Colon"
    },
    telefono:212313123,
    correo:"correodePrueb@gamil.com",    
}

createNewContact(nuevoContacto);

console.log(listaContactos);

function eliminarContactos(nombre){
    listaContactos =listaContactos.filter(contactos => contactos.nombre !== nombre)
}

const contactoAEliminar = "Pedro";
eliminarContactos(contactoAEliminar);

console.log(listaContactos);
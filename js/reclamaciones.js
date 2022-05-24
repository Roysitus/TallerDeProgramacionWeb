datos={
    nombre: '',
    apellidos: '',
    correo: '',
    telefono:'',
    DNI:'',
    queja:''
}

const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const DNI = document.querySelector('#DNI');
const queja = document.querySelector('#queja');
const libro = document.querySelector('.libro_reclamaciones')

nombre.addEventListener('input', leer);
telefono.addEventListener('input',leer);
correo.addEventListener('input',leer);
apellidos.addEventListener('input',leer);
DNI.addEventListener('input',leer)
queja.addEventListener('input',leer)

libro.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('holis')

    // Validar el formulario

    const { nombre, apellidos, correo, telefono, DNI, queja } = datos;
    if(nombre === ''|| apellidos ===''|| correo ===''|| telefono ===''|| DNI ===''|| queja ===''){
        
        alert('Porfavor rellenar todos los campos')
    }else{
        alert('Mensaje enviado correctamente, gracias por su aporte ' + nombre + ' ' + apellidos)
    }
})


function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}
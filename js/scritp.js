
//Eventos inputs
const datos={
    nombre:'',
    sexo:'',
    telefono:'',
    correo:'',
    contraseña:''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const contraseña = document.querySelector('#contraseña');
const formulario = document.querySelector('.formulario');
const contenedorFormulario = document.querySelector('.contenedor-formulario');

nombre.addEventListener('input', leer);
telefono.addEventListener('input',leer);
correo.addEventListener('input',leer);
contraseña.addEventListener('input',leer);


formulario.addEventListener('submit', function(evento){
    
    evento.preventDefault();

    // Validar el formulario

    const { nombre, sexo, telefono, correo, contraseña } = datos;

    if(nombre === '' || correo === '' || contraseña === '' ){
        mostrarError('Debes llenar los campos');
    }else{
        mostrarVerificado('Los datos se enviaron correctamente');
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

//Motrar Error en Pantalla

function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    
    error.classList.add('error');
    formulario.appendChild(error);

    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 3000);
}

function mostrarVerificado(mensaje){
    const verificado = document.createElement('p');
    verificado.textContent = mensaje;

    verificado.classList.add('verificado');
    formulario.appendChild(verificado);

    //Set Timeout
    setTimeout(() => {
        verificado.remove();
    }, 3000);
}



var eye = document.getElementById('Eye');
var input=document.getElementById('Input');
eye.addEventListener("click",function(){
    if(input.type == "password"){
        input.type= "text"
        eye.style.opacity=0.8
    }else{
        input.style = "password"
        eye.style.opacity=0.2
    }

});

function Iniciar(){
    let correo,contra,id4;
    correo=document.getElementById("correo").value;
    contra=document.getElementById("Input").value;
    id4=document.getElementById("id4").checked;
    if(id4){
        if(correo==0){
            alert("No ingreso su correo");
            return 0;
        }
        
        if(contra==0){
            alert("No ingreso su contraseña");
            return 0;
        } 
        alert("Acaba empezar sesion");
        document.reg.submit();
        window.open('NuestrosCursos.html'); 
    }else{
        alert("No aceptó los términos que se requiere"); return 0;
    }    
            
}


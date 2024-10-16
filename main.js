//Ejercicio 1
//Ejercio 1.2

let a=5;
let b=3;
let c=a+b;

console.log("La suma de a + b es : "+ c);

//Ejercicio 3
document.getElementById("saludar-btn")
.addEventListener("click", function() {
  let nombre = prompt("¿Cuál es tu nombre?");
  
  if (nombre) {
      console.log("Hola, " + nombre + "! Bienvenido a nuestra página.");
  } else {
      console.log("No ingresaste un nombre.");
  }
});

// Ejercicio 2
//Ejercicio 2.1
let a1 = 15;
let b1 = 10;
let c1;

if (a<b){
  c1 = b1;
} else {
  c1 = a1
}
console.log("El numero mayor es"+c1);

//Ejercicio 2.2
document.getElementById("verificar-btn").addEventListener("click", function() {
  let numeroIngresado = prompt("Por favor, ingresa un número:");
 
    if (numeroIngresado !== null && !isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(numeroIngresado);
      if (numeroIngresado % 2 === 0) {
          console.log("El número " + numeroIngresado + " es par.");
      } else {
          console.log("El número " + numeroIngresado + " es impar.");
      }
  } else {
      console.log("Por favor, ingresa un número válido.");
  }
});

//Ejercicio 3
//Ejercicio 3.1
let i = 10;
while (i>=0){
console.log(i);
i--;
}
//Ejercicio 3.2
document.getElementById("mayor100").addEventListener("click", function() {
  let numero;
  
  // Bucle do...while dentro del evento click
  do {
    numero = prompt("Por favor, ingresa un número mayor a 100:");
    
    if (numero === null || isNaN(numero)) {
      console.log("Por favor, ingresa un número válido.");
    } else if (numero <= 100) {
      console.log("El número " + numero + " no es mayor a 100. Inténtalo de nuevo.");
    }
    
  } while (numero <= 100 || isNaN(numero));  // Condición para continuar el bucle

  console.log("¡Gracias! Has ingresado el número " + numero + ", que es mayor a 100.");
});


//Ejercicio 4
//Ejercicio 4.1
let r1=5;
esPar(r1);
function esPar(r1){
  if (r1 % 2 === 0 ){
    console.log ("El numero "+ r1 + " es par " + true);
  } else {
    console.log ("El numero "+ r1 + " es impar " + false);
  }
}
//Ejercicio 4.2
let temperaturaC = 30;
conversion(temperaturaC);
function conversion(temperatura){
  let temperaturaF = temperatura * 1.8 + 32;
  console.log(temperatura + "°C son equivalentes a "+temperaturaF + "°F")
}

//Ejercicio 5
//Ejercicio 5.1
let persona = {
  nombre : "Ana", 
  edad : 30,
  ciudad:{
    nombreCiudad : "Barcelona",
    cambiarCiudad : function  (ciudad){
      this.nombreCiudad = ciudad;
      console.log("Cambiaste el nombre de la ciudad a "+this.nombreCiudad+" de la persona "+persona.nombre);
    }
  }
}
console.log("Persona : "+persona.nombre+" Edad : "+persona.edad+" Ciudad : "+persona.ciudad);
persona.ciudad.cambiarCiudad("Madrid");
//Ejercicio 5.2
let libro = {
  titulo : "Don Quijote de la Mancha",
  autor : "Miguel de Cervantes Saavedra",
  año : 1605,
  antiguedad : function (){
    let resultado = (2024-this.año)>= 10
    console.log("El libro : "+this.titulo+" del autor "+ this.autor+" es antiguo : " + resultado);
  }
}
libro.antiguedad();

//Ejercicio 6
//Ejercicio 6.1
let arreglo1 = [0,1,2,3,4,5,6,7,8,9,10];
let arregloMultiplicado = [];
for (let i = 0;i<=10;i++){
let numero = 2*arreglo1[i];
arregloMultiplicado.push(numero);
} 
console.log(arreglo1);
console.log(arregloMultiplicado);

//Ejercicio 6.2

let arregloPar = [];
for (let i = 0; i<=20;i++){
  if (i % 2 == 0){
    arregloPar.push(i);
  }
}
console.log(arregloPar);

//Ejercicio 7
//Ejercicio 7.1
const azul = document.getElementById("azul");

const handleStyleButton = () => {
  const p1 = document.getElementById("parrafo1");
  const p2 = document.getElementById("parrafo2");
  const p3 = document.getElementById("parrafo3");
  if (p1.classList.contains("pBlue") && p2.classList.contains("pBlue") && p3.classList.contains("pBlue")) {
  p1.classList.remove("pBlue");
  p2.classList.remove("pBlue");
  p3.classList.remove("pBlue");
} else {
  p1.classList.add("pBlue");
  p2.classList.add("pBlue");
  p3.classList.add("pBlue");
}

  
  };

azul.addEventListener("click",() => {
  handleStyleButton();
})
//Ejercicio 7.2

const buttonInput = document.getElementById("inp");

const getDataInput = () => {
  const texto = document.getElementById("input1").value;
  alert("Has ingresado el siguiente texto: " + texto);
};

buttonInput.addEventListener("click", () => {
  getDataInput(); 
});

//Ejercicio 8
//Ejercicio 8.1

const buttonElemento1 = document.getElementById("elemento1");
const buttonElemento2 = document.getElementById("elemento2");
const buttonElemento3 = document.getElementById("elemento3");
const buttonElemento4 = document.getElementById("elemento4");


const elementoButton = (buttonElemento) => {
  console.log(buttonElemento.textContent);
}

buttonElemento1.addEventListener("click",() => {
  elementoButton(buttonElemento1);
})
buttonElemento2.addEventListener("click",() => {
  elementoButton(buttonElemento2);
})
buttonElemento3.addEventListener("click",() => {
  elementoButton(buttonElemento3);
})
buttonElemento4.addEventListener("click",() => {
  elementoButton(buttonElemento4);
})

//Ejercicio 8.2

const buttonDes = document.getElementById("desCampo");
const buttonHab = document.getElementById("habCampo");
const campo = document.getElementById("input2");

const habCampo = () => {
  campo.disabled=false;
}
const desCampo = () => {
  campo.disabled = true;
}

buttonHab.addEventListener("click",() => {
  habCampo();
});
buttonDes.addEventListener("click",() => {
  desCampo();
});


//Ejercicio 9

const buttonGCorreo = document.getElementById("guardar");
const buttonECorreo = document.getElementById("eliminar");
const correoInput = document.getElementById("correo");
const correoGuardadoDiv = document.getElementById("correoGuardado");

const guardarCorreo = () => {
  const correo = document.getElementById("correo").value;
  localStorage.setItem("datos", JSON.stringify({
    correo,
  })
  )
  mostrarCorreoGuardado();
};
const eliminarCorreo = () => {
  localStorage.removeItem("datos");
  correoGuardadoDiv.textContent = "";
};


const mostrarCorreoGuardado = ()=>{
  const datos = JSON.parse(localStorage.getItem("datos"));
    if (datos && datos.correo) {
      correoGuardadoDiv.textContent = `Correo guardado: ${datos.correo}`;
    } else {
      correoGuardadoDiv.textContent = "";
    }
  };

buttonGCorreo.addEventListener("click",()=>{
  guardarCorreo();
})
buttonECorreo.addEventListener("click",()=>{
  eliminarCorreo();
})
mostrarCorreoGuardado();




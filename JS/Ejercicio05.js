// Repaso de  Ciclo y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,255,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")


console.log("%c1.- Condicionales - Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual= new Date();
/*let fechaActual = new Date("2025/06/05");*/
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if(fechaActual.getHours()<12)
console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);
        

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();


let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);
let estacion;
let horarioVerano=false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Incia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    estacion="Primavera"
    horarioVerano=true;
}
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los días Soleados y Calurosos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire ... ")
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los árboles suelen cambiar de follaje")
        console.log("Se registarán temperaturas más templadas")
        console.log("Los animales comienza con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
        estacion="Otoño"
        horarioVerano=true;
    }
else 
{
       console.log("Estamos en INVIERNO..")
       console.log("En esta temporada los días son más cortos y las noches más largas...")
       console.log("En algunas regiones suele nevar ...")
       console.log("Dado las bajas temperaturas, se recomienda abrigarse")
       estacion="Invierno"
       horarioVerano=false;
               
} 

console.log ("%c2.- Operador Ternario(validacion?cumple:no_cumple)", style_console);
// En java Script exista una operacion simplificada que valida si una condicion se cumpkle o no y que hacer en cada caso
const edadPersona = 18;
const mayoriaEdadMX =18;
const mayoriaEdadUS = 21;
let evaluarMayoriaEdad = (edad)=>
    edad>=18? "Eres mayor de edad.": "No eres mayor de edad."
console.log("Evaluando la mayoria de edad de una paersona")
console.log(evaluarMayoriaEdad(edadPersona));
// Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por mo quie debemos de considerar un segundo parametyrtoen la evaluacion
evaluarMayoriaEdad=(edad,pais)=>
(edad>=18 && pais === "MX")?`En ${pais} eres mayor de edad`: `En ${pais} No eres mayor de edad `;
console.log ("Evaluando la mayoria de edad de una persona en mexico...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos....")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.-SwITCH -CASE(Eleccion por valor definido)" ,style_console);
// Calculando tu generacion en base a tu edad

let asignaGeneracion=(anioNacimiento)=>{
    switch(true)
{
case(anioNacimiento<1968):
return "Baby Boomers";
case (anioNacimiento>1968 && anioNacimiento<=1980):
    return "Generacion X";
    case (anioNacimiento>1980 && anioNacimiento<=1994):
        return "Milenials";
    
    case (anioNacimiento>1994 && anioNacimiento<=2010):
        return "Centenials";
        
    case (anioNacimiento>2010):
        return "Krystal";


}
}

console.log(`Dado que nació en el año 1997 soy de la generación: ${asignaGeneracion(1982)}`);

console.log("%c4.- Manejo de Excepciones (TRY / CATCH))", style_console);
// En algunas ocaciones exixtiran errores que no son culpa del programa, si no del usurio, la red, o incluso el middleware., 
console.log("intentamos dividir : 10/0 el resultado es:");
try{ //intenta
let result= 10/0;
console.log(result);

}catch (error){
    console.log("Ocurrio un error: " +error.message);
}console.log("Intentamos dividir: la variable a/10, el resultado es:"

)
try{//intenta
let result= a/10; // dividir una variable no definida entre 0
console.log(result)
}
catch(error)
{
    console.log("Ocurrioun error:" +error.message);

}

console.log("Intentamos dividir: el resultado de la variable x / entre el valor de la variab le y, el resultado esd: ")
try{
    let x=8, y=2, result= x/y;
    console.log(result)
}
catch(error)
{
    console.log("Ocurriop un error: " +error.message);
}


console.log("%c5.- Control de ciclos (Break / Continue)", style_console);

//en algunas ocaciones sera importante detener un ciclo de manera brupta para controlar casos especioales en un ciclo

console.log("vamos a contar del unos al 10...")

for (let num=1;num<=10;num++)
    if(num== 7)
        break;
    else
    console.log(num);

    console.log("Ahora necvesitamos que si llegas al 7 te lo saltes ese numero y continues")
    for(num=1;num<=10;num++)
        {
        if(num==7)
            {
                continue;
            }
            console.log(num);
        }

        // fin de sentencias de control



        console.log("%c6.- Ciclo Iterativo - (For)",style_console);
        // recorre de manera interativa (i) de incrementa o decrementa
        console.log("Los dias de la semana son en orden ascendente son:")
            let dias=["Domingo", "Lunes"," Martes", "Miercoles", "Jueves", "Viernes", "Sabado"
            ]
            for(let i=0;i<dias.length;i++)
                console.log(dias[i])

            console.log("Ahora vamos a imprimir los menses en orden desendente...")
            const meses=["enero", "febrero", "marzo", "abril", "mayo","junio","julio","agosto","septuembre","octuble","noviembre","diciembre"]

            for (let i=meses.length-1;i>=0;i--)
                console.log(meses[i]);

            console.log("%c7.- Ciclo condicionales -(While", style_console);
            // estos ciclos (Buckle) depende de una condicion para continuar ejecutandopce

            let finDeSemana = false;
            let mensaje="";
            let j=0;
            while(j<dias.length){
                switch (j){
                    case 0:
                        finDeSemana= false;
                        mensaje="morming...zzzzzzzzzz";
                        break;
                        case 1:
                            finDeSemana= false;
                            mensaje="San lunes q hueva";
                            break;
                            case 2:
                                finDeSemana= false;
                                mensaje= "Segundo dia de chamba pipipi";
                                break;
                                case 3:
                                    finDeSemana = false;
                                    mensaje="ombligo de semana!!!";
                                    break;
                                    case 4:
                                        finDeSemana=false;
                                        mensaje="Ya mero";
                                        break;
                                        case 5:
                                            finDeSemana=false;
                                            mensaje= "viernesuqui"
                                            break;
                                            case 6:
                                                finDeSemana= false;
                                                mensaje="sabadito rico";
                                                break;
                }


                // imprimir el nombre del dia del mensaje
                if(!finDeSemana){
                    console.log(`Dias: ${j} ${dias[j]}`)
                    console.log(`mensaje del dia ${mensaje}`)

                }
                j++;

                }

                console.log("%c8.- Ciclo condicionales, que se ejecuta al menos una vez - (DO WHILE)", style_console);
                let episodios=[
                    "Episodio 1: Su voluntad va decidir su destino ",
                    "Episodio 2: No soy ave",
                    "Episodio 3: ¿Que hay tan terco que la juventud?",
                    "Episodio 4: Un escondido e innato tesoro",
                    "Episodio 5: Una cuerda que vibra al mismom ritmo"
                    
                ];
                let indice =0;
                let continuarViendo = true; // esta variable simula la decision del usuario de continuar viendo
                do{
                    console.log(`Reproduciendo ${episodios[indice]}`);
                    //simulamos la reproduccion del episodio
                    indice++;
                    // simulamos una pregunta al usuario si desea segui viendo
                    if(indice<episodios.length){
                        continuarViendo= confirm("¿deseas continuar con el siguiete episodio?");

                    }else{
                        continuarViendo=false;
                    }
                }while (continuarViendo && indice<episodios.length );
                console.log("Fin de la reproduccion");


                // Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos.
                console.log("%c9.-Ciclo para recorrer elementos finitos - (For - Of)", style_console);

                let seriesTrending=[
                    {nombre: "Anne", temporadas: 3, totalViewers:"1.8", totalReprods:"2.3"},
                    {nombre: "Demon Slayer", temporadas: 4, totalReprods:"5.4", totalViewers:"5.4"},
                    {nombre:"Propuesta laboral", temporadas:1, totalViewers:"3.5", totalReprods:"3.6" },
                    {nombre:"Veinticinco y Veintiuno", temporadas :1,  totalReprods:"5.6", totalViewers:"5.7"},
                    {nombre:"My vida con los chicos Walter", temporadas:2, totalReprods:"3.4",totalViewers:"4.3"}
                ];
                // usando for
                for (let serie of seriesTrending){
                    console.log(`Serir: ${serie.nombre}, Temporadas: ${serie.temporadas}`);

                }
                try{
                    console.log(`La ultima serie leida fue: ${serie.nombre}`)
                }catch(error){
                    console.log("mensaje de error"+error.message)
                }
                console.log("%c10.- Siclos para recorrer las propiedades de los elementos finitos- for -in", style_console);
                // usando for.int paea recorrer cada serie
                for (let i in seriesTrending){
                    console.log(`Series ${parseInt(i)+1}:`);
                    for(let propiedad in seriesTrending[i]){
                        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
                    }
                    console.log(".....................................................");
                }
                console.log("%c11.- Ciclo initerrumpidos para cada uno de los elemtyos del arreglo (FOR EACH)", style_console);
                // lista de series de TV trending con temporadas, viewers y reproducciones
                let seriesTrending2 = [
                    {nombre: "Anne", temporadas: 3, viewers: 2000000, reproducciones:343423343},
                    {nombre: "Demon Slayer", temporadas: 4, viewers: 232323, reproducciones:747474},
                    {nombre:"propuesta laboral", temporadas: 1, viewers:57574, reproducciones:578484},
                    {nombre:"Veintisinco y Ventiuno", temporadas: 1, viewers:8484, reproducciones:8583},
                    {nombre:"My vida con los chicos Walter", temporadas:2, viewers:854848, reproducciones:956958}
                ];

               //usando forEach para recorrer cada serie y calcular la calificacion

seriesTrending2.forEach((serie, index)=>{

    let calificacion= (serie.reproducciones / serie.viewers).toFixed(2);
    
    //calcula la calificacion y la redondeamos a 2 decimales
    
    console.log(`Serie ${index + 1}:`)
    
    console.log(`Nombre: ${serie.nombre}`)
    
    console.log(`Temporadas: ${serie.temporadas}`)
    
    console.log(`Viewers: ${serie.viewers}`)
    
    console.log(`Reproduccion: ${serie.reproducciones}`)
    
    console.log (`calificacion: ${calificacion }`)
console.log ("------------------------------------")
})

//Usando filter para filtrar y map para transformar la informacion

//Lista de series que queremos verificar

let seriesDeseadas=["Anne", "Demon Slayer", "Propuesta Laboral"];

//usando map e includes para filtrar y obtener los nombres de series con 3 temporadas 
let seriesConTresTemporadas =seriesTrending2

.filter(serie=>serie.temporadas<=3)//Filtramos las series que tienen 3 temporadas 
.map(serie=>serie.nombre)//Obtenemos solo los nombres de esas series

 .filter(nombre=>seriesDeseadas.includes (nombre))//Filtramos las que estan en la lista de series deseadas

//Mostrar los resultados

console.log("Series con 3 temporadas que están en la lista deseada: ");

console.log(seriesConTresTemporadas);



            
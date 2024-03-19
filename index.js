
/*Mi perro se comió mi tarea*/
let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
let accion = ['comió', 'pisó', 'aplastó', 'rompió'];
let que = ['mi tarea', 'mi teléfono', 'el auto'];
let cuando = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras oraba'];


// console.log(quien.length)

function azar(x,y,z,w) {
    let letraAzar=[];
    let numeroAleatoriox=Math.floor(Math.random()*x.length)
    let numeroAleatorioy=Math.floor(Math.random()*y.length)
    let numeroAleatorioz=Math.floor(Math.random()*z.length)
    let numeroAleatoriow=Math.floor(Math.random()*w.length)
    
    let fraseAleatoria=`${x[numeroAleatoriox]} ${y[numeroAleatorioy]} ${z[numeroAleatorioz]} ${w[numeroAleatoriow]}`
    return fraseAleatoria
}

let fraseFinal=azar(quien,accion,que,cuando)
console.log (fraseFinal)
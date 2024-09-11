interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number}

const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"Drive",
    detalles:{
        autor:"Stalinky",
        year:1500}
}

/*console.log(`El volumen actual es:${reproductor.volumen} `)
console.log(`Los segundos son: ${reproductor.segundo}`)
console.log(`La cancion es: ${reproductor.detalles.autor} `)
console.log(`el cantante es: ${reproductor.detalles.autor}`)
console.log(`el año es: ${reproductor.detalles.year}`)*/

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor,year}=detalles;
console.log(`El volumen actual es:${volumen} `)
console.log(`Los segundos son: ${segundo}`)
console.log(`La cancion es: ${cancion} `)
console.log(`el cantante es: ${autor}`)
console.log(`el año es: ${year}`)

const jjk:string[]=['ITADORI','GOJO','NOBARA','MAKI']
console.log(`Personaje 1: ${jjk[0]} `)
console.log(`Personaje 2: ${jjk[1]} `)
console.log(`Personaje 3: ${jjk[2]} `)
console.log(`Personaje 4: ${jjk[3]} `)

const[a,,b,c]=jjk;
console.log(`personaje 1; ${[a]}`)
console.log(`personaje 2; ${[b]}`)
console.log(`personaje 3; ${[c]}`)
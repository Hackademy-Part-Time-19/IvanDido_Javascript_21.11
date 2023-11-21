

let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadarui",
        prezzo: 600,
    },
]
//ORDINAMENTO LISTA PER PREZZO
let listaOrdinataPrezzo = listaProdotti.sort(function (a, b) { return a.prezzo - b.prezzo})

console.log(listaOrdinataPrezzo)

//ORDINAMENTO LISTA PER NOME

function OrdinaNome(a, b) {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }
  var listaOrdinataNome = listaProdotti.sort(OrdinaNome);

 console.log(listaOrdinataNome);


//FILTRARE VALORI >250 CREANDO UNA FUNZIONE

function filtraPrezzo(a){
    let v=250
    let listaFiltrata = []
    for (let i = 0; i < a.length; i++) {

        if((a[i].prezzo)>v){
        listaFiltrata[i] = a[i] }   
    
    }
    return listaFiltrata
  }
let listaFiltrata250 = filtraPrezzo(listaProdotti)
console.log(listaFiltrata250)


// FILTRARE VALORE >250 CON METODO FILTER
let listaFiltrataPrezzo = listaProdotti.filter((a) => a.prezzo > 250);
console.log(listaFiltrataPrezzo)
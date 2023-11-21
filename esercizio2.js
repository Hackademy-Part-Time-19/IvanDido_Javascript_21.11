let stringa = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let urlSplittata = stringa.split("?")
console.log(urlSplittata)

let parametri = urlSplittata[1].split("&")
console.log(parametri)
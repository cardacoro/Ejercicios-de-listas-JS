// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compras = ['Pastas', 'Arroz', 'Carne', 'Pollo', 'Cebollin']

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

compras.push("Aceite de Girasol")
console.log(compras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compras.pop();
console.log(compras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const películas = [
    {titulo: 'Avatar', director: 'James Cameron', fecha: 2009},
    {titulo: "Avatar 2", director: 'James Cameron', fecha: 2022},
    {titulo: 'Fireproof', director: 'Alex Kendrick', fecha: 2008},
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const nuevasPeliculas = películas.filter(peliculas => peliculas.fecha > 2010);
console.log(nuevasPeliculas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = películas.map(peliculas => peliculas.director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = películas.map(peliculas => peliculas.titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaConcatenada = directores.concat(titulos);
console.log(listaConcatenada); 

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaConcatenada2 = [...directores, ...titulos];
console.log(listaConcatenada2);
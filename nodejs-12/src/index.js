const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const { products } = require('../src/data/products');


const identificador = [210,340,150]


function getShoppingCart(ids, productsList) {	
	return productsList.filter( (item) => {
		return ids.includes(item.id) 			
	})
}

const result = getShoppingCart(identificador, products)
console.log("resultado:" , result);



// export default { getShoppingCart };


1. vou passar pelo array recebido de objetos, pegar o nome e a catrgoria de cada um e colocar no modelo de objeto final

2. depois  vou passar novamente pelo array recebido de produtos, vou pegar os valores de cada e somar aplicando uma função que os some; o retorno de função de soma eu vou guardar no objeto final no lugar de total price

3. vou passar no objeto final e conferir quantas categorias diferentes existentes naquele array; vou passar conferindo a categoria de cada item do objeto final e para cada iteração cado encontrada a categoria correspondente da pesquisa, irá me retornar true ou false, onde cada true será salvo num variável.

Vou salvar numa variável com um array a quantidade de true recebido. 

um contador irá passar no array de true para saber quantos true exitem e ira passar por uma condicional para saber qual promoção será aplicada e o retorno disso será  colocado no objeto final etiquetando o tipo de promoção.

vou passar novamente pelo array recebecido inicialmete dos itens escolhidos e acessar promotions verificar em looks se a promoção etiquetada se encontra la, caso encontre ira passar por price e pegar o valor disponível 

esse valor sera colocado em um array, onde um afunção de soma o receberá como parâmentro e fará os calculos de valor total.

esse valor total será colocado no objeto final

4. vou usar um switch para colocar cada possibilidade de promoção que receberá o nome do tipo de promoção colocada no objeto final

5 um método vai pegar o valor final com desconto e o valor inicial sem desconto fazer o calculo percentual do desconto aplicado; o retorno dessa função será colocado no objeto final 




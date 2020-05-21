const SINGLE_LOOK = 'SINGLE LOOK';
const DOUBLE_LOOK = 'DOUBLE LOOK';
const TRIPLE_LOOK = 'TRIPLE LOOK';
const FULL_LOOK = 'FULL LOOK';

function getShoppingById(ids, productsList) {	
	return productsList.filter( (item) => {
		return ids.includes(item.id) 			
	})
};

function getProductsByCategory(productsByIds) {	
	return productsByIds.map(item => item.category)
};

function pickCategoryToGroup(productByCategory) {
	return [...new Set(productByCategory)].length
};

function selectPromotionByCategory(categories) {
	if(categories == 4 ){
		return FULL_LOOK; 
	} else if(categories == 3){
		return TRIPLE_LOOK;

	} else if(categories == 2){
		return DOUBLE_LOOK
	
	} else if(categories == 1){
		return SINGLE_LOOK
	}
};

function calculateShoppingCartTotalPrice(promotionType, productsList) {
	const totalValueShoppingCart = productsList.reduce((acc, product, index) => {
		return acc + product.regularPrice
	}, 0)

	return totalValueShoppingCart
};

function calculateShoppingCartTotalPriceWithDiscount(promotionType, productsList) {
	const totalValueShoppingCart = productsList.reduce((acc, product, index) => {
		const productPrice = getProductPromotionedPrice(promotionType, product)
		return acc + productPrice
	}, 0)

	return totalValueShoppingCart
};

function getProductPromotionedPrice(promotionType, item) {
	const itemPromotion = item.promotions.find(promotion => promotion.looks.includes(promotionType))
	if (itemPromotion !== undefined) {
		return itemPromotion.price
	}

	return item.regularPrice
}

function getShoppingCart(ids, productsList) {	
	const productsById = getShoppingById(ids, productsList);
	const productByCategory = getProductsByCategory(productsById);
	const groupingCategory = pickCategoryToGroup(productByCategory);
	const typePromotion = selectPromotionByCategory(groupingCategory);
	const totalValueShoppingCart = calculateShoppingCartTotalPrice(typePromotion, productsById);
	const totalValueShoppingCartWithDiscount = calculateShoppingCartTotalPriceWithDiscount(typePromotion, productsById);
	const discountTotal = totalValueShoppingCart - totalValueShoppingCartWithDiscount
	const percentage = discountTotal / totalValueShoppingCart * 100

	const products = productsById.map(
		product => ({ 
			name: product.name,
			category: product.category
		})
	)
	
	return {
		products: products,
		promotion: typePromotion,
		totalPrice: totalValueShoppingCartWithDiscount.toFixed(2),
		discountValue: discountTotal.toFixed(2),
		discount: percentage.toFixed(2) + '%'
	}
};

module.exports = { getShoppingCart };
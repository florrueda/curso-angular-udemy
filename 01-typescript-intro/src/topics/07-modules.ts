import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    }
];

//Tax = 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15})

    console.log("total: ", total);
    console.log("tax:", tax);
    
    
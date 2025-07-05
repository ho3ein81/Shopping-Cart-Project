export const product = []

for (let i = 1; i <= 9; i++) {
    product.push({
        id: i,
        title: `Book ${i+1}`,
        price: 200+i,
        qty:1,
        image: `https://picsum.photos/20${i}`,
       
    });
}
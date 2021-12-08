const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {

        for (const item of this.items) {
             if (item.name === product.name) {
                 item.quantity += 1;
                 return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i +=1) {
            const { name } = items[i];

            if (productName === name) {
                console.log('нашли такой продукт ', productName);
                console.log('индекс: ', i);

                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('lemon');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());


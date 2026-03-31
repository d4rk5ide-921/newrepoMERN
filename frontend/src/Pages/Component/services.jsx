export const ProductService = {

    getProductsSmall() {
        return Promise.resolve([
            {
                id: '1000',
                name: 'Bamboo Watch',
                image: 'bamboo-watch.jpg',
                price: 65,
                inventoryStatus: 'INSTOCK'
            },
            {
                id: '1001',
                name: 'Black Watch',
                image: 'black-watch.jpg',
                price: 72,
                inventoryStatus: 'LOWSTOCK'
            },
            {
                id: '1002',
                name: 'Blue Band',
                image: 'blue-band.jpg',
                price: 79,
                inventoryStatus: 'OUTOFSTOCK'
            },
            {
                id: '1003',
                name: 'Gaming Set',
                image: 'game-controller.jpg',
                price: 99,
                inventoryStatus: 'INSTOCK'
            },
            {
                id: '1004',
                name: 'Running Shoes',
                image: 'running-shoes.jpg',
                price: 120,
                inventoryStatus: 'LOWSTOCK'
            },
            {
                id: '1005',
                name: 'Leather Bag',
                image: 'leather-bag.jpg',
                price: 150,
                inventoryStatus: 'INSTOCK'
            }
        ]);
    }

};

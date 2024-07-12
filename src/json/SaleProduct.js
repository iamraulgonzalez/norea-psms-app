export const topProducts = [
    {
        id: 1,
        image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png',
        name: 'MacBook Pro M1',
        category: 'Laptop',
        stock: 100,
        saleQty: 10,
        salePrice: 2000,
        sales: function () {
            return this.saleQty * this.salePrice;
        }
    },
    {
        id: 2,
        image: 'https://static0.anpoimages.com/wordpress/wp-content/uploads/2024/01/galaxy-s24-ultra-titanium-violet.png',
        name: 'Samsung Galaxy S24 Ultra',
        category: 'Smart Phone',
        saleQty: 20,
        salePrice: 21,
        stock: 80,
        sales: function () {
            return this.saleQty * this.salePrice;
        }
    },
    {
        id: 3,
        image: 'https://productimages.hepsiburada.net/s/462/500/110000499040988.jpg',
        name: 'iPhone 15 Promax',
        category: 'Smart Phone',
        stock: 20,
        saleQty: 2,
        salePrice: 36,
        sales: function () {
            return this.saleQty * this.salePrice;
        }
    },
    {
        id: 4,
        image: 'https://images.squarespace-cdn.com/content/v1/6065dbd423870765d7cc67cf/1712929138357-2EYH7V8DL1R7A7UK1VD4/Dell_Latitude_3520_Thumbnail_1.png?format=1000w',
        name: 'Dell Latitude 15',
        category: 'Laptop',
        stock: 10,
        saleQty: 49,
        salePrice: 20,
        sales: function () {
            return this.saleQty * this.salePrice;
        }
    },
    {
        id: 5,
        image: 'https://p3-ofp.static.pub/fes/cms/2022/12/28/lnfmv13jwu5nb0xzzmczeytk58lh6e366455.png',
        name: 'Lenovo IdeaPad 3',
        category: 'Laptop',
        stock: 0,
        saleQty: 29,
        salePrice: 100,
        sales: function () {
            return this.saleQty * this.salePrice;
        }
    },
];

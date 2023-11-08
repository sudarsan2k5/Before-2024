class Product{
    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductList{
    product = [
        new Product(
            'A Pillow', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pillows_on_a_hotel_bed.jpg/1280px-Pillows_on_a_hotel_bed.jpg', 'A Soft Pillow!', 90.82
        ),
        new Product(
            'A Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/800px-Ardabil_Carpet.jpg', 'A Carpet which you might like - or not.', 109.82
        ),

    ];
    constructor(){

    }
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.product){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src = "${prod.imageUrl}" alt= "${prod.title}">
                <div class= "product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Card</button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}
const productList = new ProductList();
productList.render();
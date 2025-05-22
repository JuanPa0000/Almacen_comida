import './../App.css';

export default function ProductCard({product, deleteProduct, activeProductDetails}) {
    let category;
    switch (product.category) {
        case 1:
            category=<i className="fa-solid fa-seedling" style={{ color: 'lightgreen' }}></i>;
            break;
        case 2:
            category=<i className="fa-solid fa-apple-whole" style={{ color: 'red' }}></i>;
            break;
        case 3:
            category=<i className="fa-solid fa-drumstick-bite" style={{ color: 'sienna' }}></i>;
            break;
        case 4:
            category=<i className="fa-solid fa-fish" style={{ color: 'blue' }}></i>;
            break;
        case 5:
            category=<i className="fa-solid fa-cow" style={{ color: 'black' }}></i>;
            break;
        case 6:
            category=<i className="fa-solid fa-bowl-rice" style={{ color: 'gray' }}></i>;
            break;
        case 7:
            category=<i className="fa-solid fa-bread-slice" style={{ color: 'orange' }}></i>;
            break;
        case 8:
            category=<i className="fa-solid fa-wine-glass" style={{ color: 'violet' }}></i>;
            break;
        case 9:
            category=<i className="fa-solid fa-cookie" style={{ color: 'pink' }}></i>;
            break;
        case 10:
            category=<i className="fa-solid fa-egg" style={{ color: 'gray' }}></i>;
            break;
    }
    
    function onDetails(){
        activeProductDetails(product.product, product.description, product.stock, product.category, product.size, product.price)
    }

    return (
        <div className='productCard'>
            <div className='productCard-image'></div>
            <div className='productCard-title'>
                <p className='productCard-title-name'>{product.product}</p>
                <p className='productCard-title-description'>{product.description}</p>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <p className='productCard-stock'>x{product.stock}</p>
                <p className='productCard-category'>{category}</p>
                <p className='productCard-size'><i className="fa-solid fa-weight-hanging"></i>{product.size}Kg</p>
                <p className='productCard-price'>{product.price}$</p>
            </div>
            <div className='productCard-buttons'>
                <button className='productCard-buttons-details' onClick={onDetails}><i className="fa-solid fa-bars"></i></button>
                <button className='productCard-buttons-add'><i className="fa-solid fa-plus"></i></button>
                <button className='productCard-buttons-delete' onClick={deleteProduct}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}
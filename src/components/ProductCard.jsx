import './../App.css';

export default function ProductCard() {
    let vegetales= <i className="fa-solid fa-seedling" style={{ color: 'lightgreen' }}></i>;
    let frutas= <i className="fa-solid fa-apple-whole" style={{ color: 'red' }}></i>;
    let carnes= <i className="fa-solid fa-drumstick-bite" style={{ color: 'sienna' }}></i>;
    let pescados= <i className="fa-solid fa-fish" style={{ color: 'blue' }}></i>;
    let lacteos= <i className="fa-solid fa-cow" style={{ color: 'black' }}></i>;
    let cereales= <i className="fa-solid fa-bowl-rice" style={{ color: 'gray' }}></i>;
    let pan=<i className="fa-solid fa-bread-slice" style={{ color: 'orange' }}></i>;
    let bebidas= <i className="fa-solid fa-wine-glass" style={{ color: 'violet' }}></i>;
    let dulces= <i className="fa-solid fa-cookie" style={{ color: 'pink' }}></i>;
    let huevos= <i className="fa-solid fa-egg" style={{ color: 'gray' }}></i>;

    return (
        <div className='productCard'>
            <div className='productCard-image'></div>
            <div className='productCard-title'>
                <p className='productCard-title-name'>Tomates</p>
                <p className='productCard-title-description'>Vienen de canarias, de muy lejos, donde las tias estan como un quesito</p>
            </div>
            <p className='productCard-stock'>x210</p>
            <p className='productCard-category'>{cereales}</p>
            <p className='productCard-size'><i class="fa-solid fa-weight-hanging"></i>24Kg</p>
            <p className='productCard-price'>70$</p>
            <div className='productCard-buttons'>
                <button className='productCard-buttons-details'><i class="fa-solid fa-bars"></i></button>
                <button className='productCard-buttons-add'><i class="fa-solid fa-plus"></i></button>
                <button className='productCard-buttons-delete'><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}
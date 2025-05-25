import '../App.css';

export default function DetailsCard({productName,description,stock,category,size,price,closeProductDetails}){
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const año = hoy.getFullYear();
    const day = `${dia}/${mes}/${año}`;

    const ahora = new Date();
    const horas = ahora.getHours();      
    const minutos = ahora.getMinutes();
    const hour = `${horas}:${minutos}`;

    return (
    <div className='detailsCard'>
        <button onClick={closeProductDetails} className='detailsCard-closeButton'><i className="fa-solid fa-xmark"></i></button>
        <div className='detailsCard-title'>
            <h1 className='detailsCard-title-name'>{productName}</h1>
            <p className='detailsCard-title-description'>{description}</p>
        </div>
        <div className='detailsCard-date'>
            <div className='detailsCard-date-day'>
                <h3 className='detailsCard-date-day-title' style={{marginBottom: '0'}}>Fecha</h3>
                <p className='detailsCard-date-day-content' style={{margin: '0'}}>{day}</p>
            </div>
            <div className='detailsCard-date-hour'>
                <h3 className='detailsCard-date-hour-title' style={{marginBottom: '0'}}>Hora</h3>
                <p className='detailsCard-date-hour-content' style={{margin: '0'}}>{hour}</p>
            </div>
        </div>
        <div className='detailsCard-extra'>
            <div className='detailsCard-extra-stock'>
                <h2 className='detailsCard-extra-stock-title'>Stock:</h2>
                <p className='detailsCard-extra-stock-content'>{stock}</p>
            </div>
            <div className='detailsCard-extra-category'>
                <h2 className='detailsCard-extra-category-title'>Categoría:</h2>
                <p className='detailsCard-extra-category-content'>{category}</p>
            </div>
            <div className='detailsCard-extra-size'>
                <h2 className='detailsCard-extra-size-title'>Peso:</h2>
                <p className='detailsCard-extra-size-content'>{size}</p>
            </div>
            <div className='detailsCard-extra-price'>
                <h1 className='detailsCard-extra-price-content'>{price}$</h1>
        </div>
        </div>
    </div>
    );
}
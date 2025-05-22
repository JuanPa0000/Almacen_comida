import '../App.css';

export default function DetailsCard(name,description,stock,category,size,price){
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const año = hoy.getFullYear();
    const day = `${dia}/${mes}/${año}`;

    const ahora = new Date();
    const horas = ahora.getHours();       // 0 - 23
    const minutos = ahora.getMinutes();
    const hour = `${horas}:${minutos}`;

    console.log(name,description,stock,category,size,price);
    return (
    <div className='detailsCard'>
        <i class="fa-solid fa-xmark"></i>
        <div className='detailsCard-title'>
            <h1 className='detailsCard-title-name'>a</h1>
            <p className='detailsCard-title-description'>a</p>
        </div>
        <div className='detailsCard-date'>
            <div className='detailsCard-date-day'>
                <h2 className='detailsCard-date-day-title '>Fecha</h2>
                <p className='detailsCard-date-day-content'>{day}</p>
            </div>
            <div className='detailsCard-date-hour'>
                <h2 className='detailsCard-date-hour-title'>Hora</h2>
                <p className='detailsCard-date-hour-content'>{hour}</p>
            </div>
        </div>
        <div className='detailsCard-extra'>
            <div className='detailsCard-extra-stock'>
                <h2 className='detailsCard-extra-stock-title'>Stock:</h2>
                <p className='detailsCard-extra-stock-content'>a</p>
            </div>
            <div className='detailsCard-extra-category'>
                <h2 className='detailsCard-extra-category-title'>Categoría:</h2>
                <p className='detailsCard-extra-category-content'>a</p>
            </div>
            <div className='detailsCard-extra-size'>
                <h2 className='detailsCard-extra-size-title'>Peso:</h2>
                <p className='detailsCard-extra-size-content'>a</p>
            </div>
            <div className='detailsCard-extra-price'>
                <h1 className='detailsCard-extra-price-content'>a$</h1>
        </div>
        </div>
    </div>
    );
}
import '../App.css';

export default function AddMoreCard(){
    return (
        <div className='addMoreCard'>
            <form className='addMoreCard-form'>
                <div className='addMoreCard-form-stockDiv'>
                    <label htmlFor='stock'>Stock:</label>
                    <input className='addMoreCard-form-stockDiv-input' name='stock' id='stock'></input>
                </div>
                <div className='addMoreCard-form-sizeDiv'>
                    <label htmlFor='size'>Peso:</label>
                    <input name='size' className='addMoreCard-form-sizeDiv-input' id='size'></input>
                </div>
                <div className='addMoreCard-form-priceDiv'>
                    <label htmlFor='price'>Precio:</label>
                    <input className='addMoreCard-form-priceDiv-input' name='price' id='price'></input>
                </div>
            </form>
        </div>
    )
}
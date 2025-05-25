import '../App.css';

export default function AddMoreCard({closeAddMoreCard, addMoreProducts, index}){
    
    function onSaveButton(event){
        event.preventDefault();
        const getForm=event.target;

        const newProducts={
            stock: getForm.stock.value,
            size: getForm.size.value,
            price: getForm.price.value
        };
        addMoreProducts(newProducts, index);
        closeAddMoreCard();
    }

    return (
        <div className='addMoreCard'>
            <form className='addMoreCard-form' id='addMoreCard-form' onSubmit={onSaveButton}>
                <div className='addMoreCard-form-stockDiv'>
                    <label htmlFor='stock'>Stock:</label>
                    <input className='addMoreCard-form-stockDiv-input' name='stock' id='stock' type='number' required defaultValue={0}></input>
                </div>
                <div className='addMoreCard-form-sizeDiv'>
                    <label htmlFor='size'>Peso:</label>
                    <input name='size' className='addMoreCard-form-sizeDiv-input' id='size' type='number' required defaultValue={0}></input>
                </div>
                <div className='addMoreCard-form-priceDiv'>
                    <label htmlFor='price'>Precio:</label>
                    <input className='addMoreCard-form-priceDiv-input' name='price' id='price' type='number' required defaultValue={0}></input>
                </div>
            </form>

            <div className='addMoreCard-buttons'>
                <button className='addMoreCard-buttons-save' form='addMoreCard-form' type='submit'>Guardar</button>
                <button className='addMoreCard-buttons-cancelar' onClick={closeAddMoreCard}>Cancelar</button>
            </div>
        </div>
    )
}
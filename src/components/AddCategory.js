import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => { //recibo lo que envíe desde GifExpertApp 
    //como una props. A ese porps lo desestruturo y dejo lo que necesito: setCategorias.
    
    const [inputValue, setinputValue] = useState(''); //'' porque sino inpuVaue me arroja undefine

    const handleInputChange = (e)=>{ //toma lo que está en el input
        setinputValue(e.target.value); //se actualiza el value
    }

    const handleSubmit = (e)=>{ 
        e.preventDefault();//no permite que se refresque

        if( inputValue.trim().length > 2){
        setCategorias(e =>[inputValue, ...e]); //agrega un valor al array, en este caso, el de las categorias
    //y como el array es lo que se imprime: se imprime tb el valor que acabo de agregar
    //podría poner ([...e, inputValue]), pero no tengo acceso al array categories. Podría entonces
    //importarlo como a setCatyegorias, pero no es necesario si ocupo (e=>[...e,inputValue]) porque
    //ese e=> ya dice que conservamos el valor que hasta entonces existe.
        setinputValue('');
        }
    }

    return (
        //onSubmit es lo que se envía (solo el valor pero aún no hemos hecho nada con él)
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange } //permite el cambio del texto en el input
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}



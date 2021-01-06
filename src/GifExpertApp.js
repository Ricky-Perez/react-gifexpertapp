import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);


    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} //así RELACIONO lo del padre GifExpertApp
        //entonces lo puedo ocupar y modificar en AddCategory para luego imprimirlo aquí
        //Además, en la pestaña de componentes del navegador tienen que estar los
        //dos componentes: GifExpertApp y AddCategory
        />

        <hr />
        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                
                categorias.map( category =>(
                    <GifGrid 
                    key={category}
                    category={category} />
                ))
     
            }
        </ol>

        </>
    )
}


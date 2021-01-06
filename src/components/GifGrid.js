import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

 

    // useEffect( ()=> {//lo usamos para que no se ejecute de nuevo todo el código
    //                 // siempre que react necesite renderizar algo
    //     getGifs( category )
    //         .then( gifs => setImages( gifs ) );
    // }, [ category ]) //el category aquí es por si cambiara en servidor, y entonces 
    // //lo ejecuta de nuevo, sino el useEffect no permitiría que corra de nuevo
    //ME LO LLEVÉ PARA EL HOOK DE USEFETCHGIFS


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3> 

                {loading && <p className="card animate__animated animate__flash">Loading...</p>}

                <div className="card-grid">
            
                    {images.map( img => (
                        <GifGridItem 
                                key={img.id}
                                {...img }
                        />
                    ))}
            
                </div>

        </>

    )
}


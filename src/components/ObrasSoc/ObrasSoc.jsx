import React from 'react';
import { useState , useEffect } from 'react';
import ObrasDetail from './ObrasDetail/ObrasDetail';

const ObrasSoc = () => {
    const [obras,setobras] = useState([])
    const [buscar,setbuscar] = useState("")
    useEffect(() => {
        fetch('../../json/obras.json')
        .then(response => response.json())
        .then(datos=>{             
            if (buscar===""){
                const obrasList = <ObrasDetail plantilla={datos}/>
                setobras(obrasList)
            }
            else{
                const buscarAux =datos.filter(obra=> obra.ObraSocial.includes(buscar))
                const obrasList = <ObrasDetail plantilla={buscarAux}/>
                setobras(obrasList)
            }
            
         } )
                    
    }, [buscar]);
    return (
        <div>
            <div className='d-flex justify-content-center align-items-start mt-5 mb-4 '>
                <label htmlFor="" className='Buscar'>Buscar : </label>
                <input className='Buscarinput' type="search" onChange={(e)=>setbuscar(e.target.value.toUpperCase())} />
                
            </div>
            
            <div className='d-flex justify-content-center'>
            <table className="table">
                <thead className="colorArriba">
                    <tr className=''>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Baja Complejidad</th>
                        <th scope="col">Alta Complejidad</th>
                        <th scope="col">Notas</th>
                        <th scope="col">AMP o Apid</th>
                    </tr>
                </thead>  
                <tbody className='textoTabla'>
                {obras}
               </tbody>     
            </table> 
            </div>
                        
        </div>
    );
}

export default ObrasSoc;

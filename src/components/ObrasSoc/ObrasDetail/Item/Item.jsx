import React from 'react';

const Item = ({data}) => {    
    return (
        <>
         
               <tr>      
                      <td>{data.id}</td>            
                      <td>{data.ObraSocial}</td>
                      <td>{data.BajaComplejidad}</td>
                      <td>{data.AltaComplejidad}</td>
                      <td>{data.Notas}</td>
                      <td>{data.AmpOApid}</td>
                </tr>       
              
         
        
          
        </>
    );
}

export default Item;

import React from 'react';
import Item from './Item/Item';

const ObrasDetail = ({plantilla}) => {
        console.log(plantilla)
    return (
        <>
            {plantilla.map(obra =><Item data={obra} key={obra.id}/>)}
        </>
    );
}

export default ObrasDetail;

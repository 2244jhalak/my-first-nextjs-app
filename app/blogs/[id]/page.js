import { notFound } from 'next/navigation';
import React from 'react';

const pageDetails = ({params}) => {

    if(params.id==='7'){
        notFound();
    }
    
    return (
        <div className='mt-10'>
            <h2 className='test-2xl font-semibold'>{params.id}</h2>
            
            
        </div>
    );
};

export default pageDetails;
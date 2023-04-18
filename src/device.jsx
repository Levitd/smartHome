import React from 'react';
import { activeLink } from './utils/utils_dom';
import { useParams } from 'react-router-dom';

const Device = () => {
    activeLink(".nav-link", "devices");
    const params = useParams();
    const { id } = params;
    console.log(id, params);
    return (
        <div className='device'>
            <div key={`dev${id}`} className='alert alert-info _h4'>Устройство {id}</div>
        </div>
    );
}

export default Device;
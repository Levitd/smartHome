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
            <h4>
                <div key={`dev${id}`} className='alert alert-info'>Устройство {id}</div>
            </h4>
        </div>
    );
}

export default Device;
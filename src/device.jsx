import React, { useState, useEffect } from 'react';
import API from './api';
// import { activeLink } from './utils/utils_dom';
import { useParams } from 'react-router-dom';
import Loading from './loading';

const Device = () => {
    const params = useParams();
    const { _id } = params;
    console.log(_id, params);

    const [deviceSelect, setDevice] = useState([]);

    useEffect(() => {
        console.log('useEffect', _id);
        API.ApiDevices.getById(_id).then((data) => setDevice(data));
        // console.log(deviceSelect, 'device_select');
    }, []);

    if (deviceSelect && deviceSelect.length > 0) {
        return (
            <div className='device'>
                <div key={`dev${_id}`} className='alert alert-info _h4'>Устройство {deviceSelect.name}</div>
            </div>
        );
    } else {
        return <Loading />
    }
}

export default Device;
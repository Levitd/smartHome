import React, { useState, useEffect } from 'react';
// import { activeLink } from './utils/utils_dom';
import apiDevices from './api/apiDevices';
import { Link } from 'react-router-dom';

const Devices = () => {
    const [devices, setUsers] = useState([]);

    useEffect(() => {
        apiDevices.fetchAll().then((data) => setUsers(data));
    }, []);

    // activeLink(".nav-link", "devices");

    if (devices.length > 0) {
        return (
            <>
                <div className='devices'>
                    <div className='alert alert-info h4'>Ваши Устройства</div>
                    <div className='flex_devices'>
                        {devices.map((el) => {
                            return (<button key={el.id} type="button" className='btn btn-info'><Link className='button_device' key={`device${el.id}`} to={`/device/${el.id}`}>{el.name}</Link></button>);
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Devices;
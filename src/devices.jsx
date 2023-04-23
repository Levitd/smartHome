import React, { useState, useEffect } from 'react';
// import { activeLink } from './utils/utils_dom';
import API from './api';
import { Link } from 'react-router-dom';
import Loading from './loading';
import { Button } from 'antd';

const Devices = () => {
    const [devices, setUsers] = useState([]);

    useEffect(() => {
        API.ApiDevices.fetchAll().then((data) => setUsers(data));
    }, []);

    // activeLink(".nav-link", "devices");
    /*
                                return (<button key={el.id} type="button" className='btn btn-info'>
                                    <Link
                                        className='button_device'
                                        key={`device${el.id}`}
                                        to={`/device/${el.id}`}>{el.name}
                                    </Link>
                                </button>);
    
    */

    if (devices.length > 0) {
        return (
            <>
                <div className='devices'>
                    <div className='_h4'>Ваши Устройства</div>
                    <div className='flex_devices'>
                        {devices.map((el) => {
                            return (
                                <div className='button_device' key={`div_device${el._id}`}>
                                    <Link
                                        className=''
                                        key={`device${el._id}`}
                                        to={`/device/${el._id}`}>
                                        <Button className='button_device_item' color='default' fill='solid' size='middle'>
                                            {el.name}
                                        </Button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div >
            </>
        );
    } else {
        return <Loading />
    }
}

export default Devices;
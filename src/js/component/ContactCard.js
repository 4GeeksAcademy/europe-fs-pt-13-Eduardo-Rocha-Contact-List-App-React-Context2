import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ContactCard = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
            {store.contacts.map((contact, idx) => (

                < div className="card" key={idx} >
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png&f=1&nofb=1&ipt=92a90edf209dc0c18ad6b9c2650eac6c40ba3a97b656fc2347e6964011e7dcc9&ipo=images" className="img-fluid profile-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link to={`/contact/${idx}`}>
                                    <FontAwesomeIcon className='icon-right' icon={faPencil} />
                                </Link>
                                <FontAwesomeIcon className='icon-right' icon={faTrashCan} />
                                <div className='card-title' >{contact.full_name}</div>
                                <FontAwesomeIcon className='icon' icon={faLocationDot} /><div className='card-text' >{contact.address}</div>
                                <FontAwesomeIcon className='icon' icon={faPhone} /><div className='card-text' >{contact.phone}</div>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} /><div className='card-text' >{contact.email}</div>
                            </div>
                        </div>
                    </div>
                </div >
            ))}
        </>
    )
}

export default ContactCard;

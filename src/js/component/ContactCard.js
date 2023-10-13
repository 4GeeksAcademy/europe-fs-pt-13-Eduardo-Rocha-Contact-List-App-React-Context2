import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ContactCard = () => {
    const { store } = useContext(Context);


    return (
        <>
            {store.contacts.map((contact, idx) => (
                <div className="card" key={idx}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F24-248366_profile-clipart-generic-user-generic-profile-picture-gender.png&f=1&nofb=1&ipt=92a90edf209dc0c18ad6b9c2650eac6c40ba3a97b656fc2347e6964011e7dcc9&ipo=images" className="img-fluid profile-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <Link to="/editContact">
                                    <FontAwesomeIcon icon={faPencil} />
                                </Link>
                                <FontAwesomeIcon icon={faTrashCan} />
                                <div className='card-title' key={idx}>{contact.full_name}</div>
                                <FontAwesomeIcon icon={faLocationDot} /><div className='card-text' key={idx}>{contact.address}</div>
                                <FontAwesomeIcon icon={faPhone} /><div className='card-text' key={idx}>{contact.phone}</div>
                                <FontAwesomeIcon icon={faEnvelope} /><div className='card-text' key={idx}>{contact.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactCard;

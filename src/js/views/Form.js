import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from '../store/appContext';


const Form = () => {

    const { id } = useParams()
    const { store, actions } = useContext(Context);
    console.log(store.contacts);
    let contact;
    let name;
    let email;
    let address;
    let phone;
    const contactIndex = parseInt(id, 10);
    //get store to get if the id exists to then grab which record it is and map it to the fields

    if (!isNaN(contactIndex) && contactIndex >= 0 && contactIndex < store.contacts.length) {
        contact = store.contacts[contactIndex];
        name = contact.full_name;
        email = contact.email;
        address = contact.address;
        phone = contact.phone;
    } else {
        console.log("Contact not found or invalid index");
    }


    return (
        <>
            <h1 className="text-center mt-5">{id ? "Edit Contact" : "Add Contact"}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input defaultValue={id ? name : null} type="text" className="form-control" id="full-name" aria-describedby="fullnameHelp" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input defaultValue={id ? email : null} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input defaultValue={id ? phone : null} type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input defaultValue={id ? address : null} type="text" className="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter Address" />
                </div>
                <div className="d-grid gap-2">
                    <button type="text" className="btn btn-primary">Save</button>
                </div>
                <Link to="/">
                    <span>or get back to contacts</span>
                </Link>
            </form>
        </>

    )
}

export default Form;
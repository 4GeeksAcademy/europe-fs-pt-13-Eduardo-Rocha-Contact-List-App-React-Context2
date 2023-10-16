import React, { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';

const Form = () => {
    const { id } = useParams()
    const { store, actions } = useContext(Context);
    const contact = store.contacts.find((contact, idx) => idx === parseInt(id, 10)) || {};
    const navigate = useNavigate();

    console.log(store.contacts, id);

    //get store to get if the id exists to then grab which record it is and map it to the fields



    return (
        <>
            <h1 className="text-center mt-5">{id ? "Edit Contact" : "Add Contact"}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full-name" aria-describedby="fullnameHelp" placeholder="Enter Name" defaultValue={id ? contact.full_name : null} onKeyDown={actions.handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" defaultValue={id ? contact.email : null} onKeyDown={actions.handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Phone" defaultValue={id ? contact.phone : null} onKeyDown={actions.handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter Address" defaultValue={id ? contact.address : null} onKeyDown={actions.handleInputChange} />
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary" onClick={() => actions.handleSave(id, navigate)} >Save</button>
                </div>
                <Link to="/">
                    <span>or get back to contacts</span>
                </Link>
            </form>
        </>

    )
}

export default Form;
import React from "react";
import { Link } from "react-router-dom";

const Form = () => {

    return (
        <>
            <h1 className="text-center mt-5">Add a new contact</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="name" className="form-control" id="full-name" aria-describedby="fullnameHelp" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter Phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="address" className="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter Address" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
                <Link to="/">
                    <span>or get back to contacts</span>
                </Link>
            </form>
        </>

    )
}

export default Form;
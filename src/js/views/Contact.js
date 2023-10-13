import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from '../store/appContext';
import ContactCard from "../component/ContactCard";
import { Link } from "react-router-dom";


const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Link className="btn-link" to="/addContact">
				<div className="d-grid gap-2 d-md-flex justify-content-md-end">
					<button className="btn btn-success my-3">Add new contact</button>
				</div>
			</Link>
			<ContactCard />
		</>
	)
}

export default Contact;

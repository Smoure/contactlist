import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const editContact = props => {
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit an existing contact</h1>
				<form>
					<div className="form-group">
						<label>{store.contacts[props.match.params.theid].full_name}</label>
						<input type="text" className="form-control" placeholder="Full Name" />
					</div>

					<div className="form-group">
						<label>{store.contacts[props.match.params.theid].email}</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>

					<div className="form-group">
						<label>{store.contacts[props.match.params.theid].phone}</label>
						<input type="phone" className="form-control" placeholder="Enter phone" />
					</div>

					<div className="form-group">
						<label>{store.contacts[props.match.params.theid].address}</label>
						<input type="text" className="form-control" placeholder="Enter address" />
					</div>

					{/* <div className="form-group">
						<label>{store.contacts[props.match.params.theid].image}</label>
						<input type="text" className="form-control" placeholder="Enter image URL" />
					</div> */}

					<button type="button" className="btn btn-primary form-control">
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

editContact.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	link: PropTypes.string,
	match: PropTypes.object
};

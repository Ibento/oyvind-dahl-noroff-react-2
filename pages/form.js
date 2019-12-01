import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	email: yup.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
		.required("Password is required"),
    
});

export default function App() {
	const { register, handleSubmit, watch, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.table(data);
	}


	return (
		<div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Email: </Form.Label>
					<Form.Control name="email" placeholder="Enter your email" ref={register} />
					{errors.email && <p>{errors.email.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Password: </Form.Label>
					<Form.Control name="password" type="password" placeholder="Enter your password" ref={register} />
					{errors.password && <p>{errors.password.message}</p>}
				</Form.Group>

				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}
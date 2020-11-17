import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const FormComponent = ({
	nama,
	deskripsi,
	harga,
	handleChange,
	handleSubmit,
	id,
}) => {
	return (
		<div className="mt-5">
			<Row>
				<Col>
					<h4>{id ? "Edit" : "Tambah"} Data</h4>
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="nama">
							<Form.Label>Nama Makanan</Form.Label>
							<Form.Control
								type="text"
								name="nama"
								value={nama}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Form.Group controlId="deskripsi">
							<Form.Label>Deskripsi</Form.Label>
							<Form.Control
								as="textarea"
								name="deskripsi"
								value={deskripsi}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Form.Group controlId="harga">
							<Form.Label>Harga</Form.Label>
							<Form.Control
								type="number"
								name="harga"
								value={harga}
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default FormComponent;

import React from "react";
import { Table, Button } from "react-bootstrap";

const TableComponent = ({ makanans, editData, hapusData }) => {
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Nama Makanan</th>
						<th>Deskripsi</th>
						<th>Harga</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{makanans.map((makanan, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{makanan.nama}</td>
								<td>{makanan.deskripsi}</td>
								<td>{makanan.harga}</td>
								<td>
									<Button
										className="btn btn-warning mr-1"
										onClick={() => editData(makanan.id)}
									>
										Edit
									</Button>
									<Button
										className="btn btn-danger"
										onClick={() => hapusData(makanan.id)}
									>
										Hapus
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default TableComponent;

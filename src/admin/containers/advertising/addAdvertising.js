import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/axios";
import styled from "styled-components";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send, data } from "../../../utils/firebaseImageSend";
import { createAdvertising } from "../../../utils/api";

function AddAdvertising() {
	const navigate = useNavigate()
	const [firma, setFirma] = useState("");
	const [type, setType] = useState("")
	const [image, setImage] = useState("");

	const notify = (text, status) => {
		if (status === 200 || status === 201) toast.success(`${text}`)
		if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
	}

	function Submit() {
		send(image)
		setTimeout(() => {
			let img = data.pop()
			if (firma.trim() != "" && type.trim() != "") {
				API.post(`${createAdvertising}`, {
					"firma": firma,
					"type": type,
					"image": img,
				})
					.then((res) => notify(`Success`, res.status))
					.catch(err => notify(err.response?.data?.message, err.response?.status))
			} else {
				notify("Xato", 400)
			}
		}, 3000)
	};
	return (
		<Wrapper>
			<ToastContainer />
			<div>
				<div className="col-lg-12">
					<div className="well">
						<p>
							<strong>Create Advertising</strong>
						</p>
						<div className="form-group">
							<label className="control-label ">Enter your Firma</label>

							<input
								type="text"
								className="form-control"
								onChange={({ target }) => setFirma(target.value)}
							/>
						</div>
						<div className="form-group">
							<label className="control-label">Image</label>

							<input type="file" className="form-control" onChange={({ target }) => {
								setImage(target.files[0])
								setType(target.files[0].type)
							}} />
						</div>
					</div>
					<div className="bottom-form" style={bottomForm}>
						<button
							className="btn btn-default pull-right col-lg-4"
							onClick={() => navigate(-1)}
						>
							Back
						</button>
						<button
							className="btn btn-default pull-right col-lg-4"
							onClick={() => {
								notify();
								Submit();
							}}
						>
							Create Advertising
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default AddAdvertising;

const Wrapper = styled.div``;

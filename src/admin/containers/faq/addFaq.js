import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/axios";
import styled from "styled-components";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createFaq } from "../../../utils/api";

function Faq() {
	const navigate = useNavigate()
	const [heading, setHeading] = useState("");
	const [inner, setInner] = useState("")

	const notify = (text, status) => {
		if (status === 200 || status === 201) toast.success(`${text}`)
		if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
	}

	function Submit() {
        setTimeout(() => {
			if (heading.trim() != "" && inner.trim() != ""  ) {
				API.post(`${createFaq}`, {
					"heading": heading,
					"inner": inner,
				})
					.then((res) => notify(`Success`, res.status))
					.catch(err => notify(err.response?.data?.message, err.response?.status))
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
							<strong>Create Faq</strong>
						</p>
						<div className="form-group">
							<label className="control-label ">Enter your Faq Name</label>

							<input
								type="text"
								className="form-control"
                                onChange={({target}) => setHeading(target.value)}
							/>
						</div>
                        <div className="form-group">
							<label className="control-label ">Enter your Faq text</label>

							<input 
								type="text" 
								className="form-control"
								onChange={({ target }) => setInner(target.value)}
							  />

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
							Create Faq
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Faq;

const Wrapper = styled.div``;

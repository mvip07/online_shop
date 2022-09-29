import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/axios";
import styled from "styled-components";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createSearchCategory } from "../../../utils/api";
import { data, send } from "../../../utils/firebaseImageSend";


function AddSearchCategory() {
	const navigate = useNavigate()
	const [searchCategoryName, setSearchCategoryName] = useState("");
	const [searchCategoryIcon, setSearchCategoryIcon] = useState("")

	const notify = (text, status) => {
		if (status === 200 || status === 201) toast.success(`${text}`)
		if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
	}

	function Submit() {
		send(searchCategoryIcon)        
        setTimeout(() => {
			let icon = data.pop() 
			if (searchCategoryName.trim() != "") {
				API.post(`${createSearchCategory}`, {
					"categoryName": searchCategoryName,
					"icon": icon,
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
							<strong>Create Search Category</strong>
						</p>
						<div className="form-group">
							<label className="control-label ">Enter your Search Category Name</label>

							<input
								type="text"
								className="form-control"
                                onChange={({target}) => setSearchCategoryName(target.value)}
							/>
						</div>
                        <div className="form-group">
							<label className="control-label ">Enter your Search Category Icon (Font-awesome fa-solid-bag)</label>

							<input 
								type="file" 
								className="form-control"
								onChange={({ target }) => setSearchCategoryIcon(target.files[0])}
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
							Create Search Category
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default AddSearchCategory;

const Wrapper = styled.div``;

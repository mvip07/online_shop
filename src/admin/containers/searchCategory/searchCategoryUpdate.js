import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../../utils/axios";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectedSearchCategory, updateSearchCategory } from "../../../utils/api";
import { data, send } from "../../../utils/firebaseImageSend";

function SearchCategoryUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
	const [searchCategory, setSearchCategory] = useState({});
    const [icon, setIcon] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [updateIcon, setUpdateIcon] = useState("")


    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedSearchCategory}/${id}`).then(res => setSearchCategory(res.data))
    }, [id])

    function Submit() {
        send(icon)
        setTimeout(() => {
            let img = data.pop()
            setUpdateIcon(img)
            API.post(`${updateSearchCategory}`, {
                "categoryName": categoryName == "" ? searchCategory.categoryName : categoryName,
                "icon": img,
                "id": id,
            })
                .then((res) => notify(`Success`, res.status))
                .catch(err => notify(err.response?.data?.message, err.response?.status))
        }, 3000)

    }
    return (
        <Wrapper>
            <ToastContainer />
            <div>
                <div className="col-lg-12">
                    <div className="well">
                        <p>
                            <strong>Update Search Category</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Search Category Name</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={searchCategory.categoryName}
                                onChange={({ target }) => setCategoryName(target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div className="form-group">
                                <p className="control-label ">Icon</p>
                                <img src={searchCategory.icon} alt="" width="20px" />
                            </div>

                            <div className="form-group">
                                <p className="control-label ">Update Icon</p>
                                <img src={updateIcon} alt="" width="20px" />
                            </div>

                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Search Category Icon (Font-awsome fa-solid-bag)</label>

                            <input 
                                type="file" 
                                className="form-control" 
                                onChange={({ target }) => setIcon(target.files[0])} 
                            />

                        </div>
                    </div>
                    <div className="bottom-form" style={bottomForm}>
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-default pull-right col-lg-4">Back
                        </button>
                        <button onClick={() => {
                            Submit();
                            notify();
                        }} className="btn btn-default pull-right col-lg-4" >
                            Update Search Category
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default SearchCategoryUpdate;

const Wrapper = styled.div``;

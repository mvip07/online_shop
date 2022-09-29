import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../../utils/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allAboutCompanys, deleteAboutCompany } from "../../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import AboutCompanyPiece from "../../componets/aboutCompany";

function AboutCompany() {
    const [aboutCompanes, setAboutCompanes] = useState([])

    useEffect(() => {
        API.get(allAboutCompanys)
            .then(res => setAboutCompanes(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Wrapper>
            <ToastContainer />
            <div className="module tab-slider titleLine">
                <h3 className="modtitle">About Company</h3>
                <div
                    id="so_listing_tabs_2"
                    className="so-listing-tabs first-load module"
                >
                    <div className="ltabs-items-container">
                        <div
                            className="ltabs-items ltabs-items-selected items-category-20 grid"
                            data-total="10"
                        >
                            <div className="ltabs-items-inner ltabs-slider">

                                {
                                    aboutCompanes.map((data) => (
                                        <AboutCompanyPiece data={data} key={Math.random()} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>

    );
}

export default AboutCompany;
const Wrapper = styled.div``

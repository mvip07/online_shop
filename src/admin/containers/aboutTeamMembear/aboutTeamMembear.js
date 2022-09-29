import styled from "styled-components";
import API from "../../../utils/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { allAboutTeamMembears } from "../../../utils/api";
import { useState } from "react";
import AboutTeamMembearPiece from "../../componets/aboutTeamMembear";

function AboutTeamMembear() {
    const [aboutTeamMembear, setAboutTeamMembear] = useState([])
    useEffect(() => {
        API.get(allAboutTeamMembears)
            .then(res => setAboutTeamMembear(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Wrapper>
            <ToastContainer />

            <div className="module tab-slider titleLine">
                <h3 className="modtitle">About Team Membear</h3>
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
                                        aboutTeamMembear.map((data) => {
                                            return (
                                                <AboutTeamMembearPiece data={data} key={Math.random()} />
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}

export default AboutTeamMembear
const Wrapper = styled.div`
    padding: 20px; 
`
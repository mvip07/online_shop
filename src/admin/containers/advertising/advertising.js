import styled from "styled-components";
import API from "../../../utils/axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdvertisingPiece from "../../componets/advertising";
import { allAdvertisings } from "../../../utils/api";
import { useState, useEffect } from "react";

function Advertising() {
	const [advertising, setAdvertising] = useState([])
    useEffect(() => {
        API.get(allAdvertisings)
            .then(res => setAdvertising(res.data))
            .catch(err => console.log(err))
    }, [allAdvertisings])
	return (
		<Wrapper>
			<ToastContainer />
			<div className="module tab-slider titleLine">
                <h3 className="modtitle">Advertisings</h3>
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
                                        advertising.map((data) => {
                                            return (
                                                <AdvertisingPiece data={data} key={Math.random()} />
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</Wrapper>
	);
}

export default Advertising;
const Wrapper = styled.div`
	padding: 20px;
`

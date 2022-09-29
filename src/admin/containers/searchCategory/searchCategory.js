import styled from "styled-components";
import API from "../../../utils/axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allSearchCategorys } from "../../../utils/api";
import { useState, useEffect } from "react";
import SearchCategoryPiece from "../../componets/searchCategory";

function SearchCategory() {
    const [searchCategory, setSearchCategory] = useState([])
    useEffect(() => {
        API.get(allSearchCategorys)
            .then(res => setSearchCategory(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Wrapper>
            <ToastContainer />
            <div className="module tab-slider titleLine">
                <h3 className="modtitle">Search Category</h3>
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
                                    searchCategory.map((data) => {
                                        return (
                                            <SearchCategoryPiece data={data} key={Math.random()} />
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

export default SearchCategory;
const Wrapper = styled.div`
    padding: 20px;
`

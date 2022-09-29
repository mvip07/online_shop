import styled from "styled-components";
import API from "../../../utils/axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allProducts } from "../../../utils/api";
import ProductPiece from "../../componets/product";
import { useState, useEffect } from "react";

function AdminProduct() {
	const [product, setProduct] = useState([])
    useEffect(() => {
        API.get(allProducts)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
	return (
		<Wrapper>
			<ToastContainer />
			<div className="module tab-slider titleLine">
                <h3 className="modtitle">Products</h3>
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
                                        product.map((data) => {
                                            return (
                                                <ProductPiece data={data} key={Math.random()} />
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

export default AdminProduct;
const Wrapper = styled.div`
	padding: 20px;
`;

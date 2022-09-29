import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../../utils/axios";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data, send } from "../../../utils/firebaseImageSend";
import { selectedProduct, updateProduct } from "../../../utils/api";

const numberDiscount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

function ProductUpdate() {
    const navigate = useNavigate();
    const { id } = useParams();
    const color = []
    const [product, setProduct] = useState([])
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");
    const [color5, setColor5] = useState("");
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [stars, setStars] = useState("");
    const [category, setCategory] = useState("");
    const [discount, setDiscount] = useState("No");
    const [model, setModel] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescripion] = useState("");
    const [width, setWidth] = useState("");
    const [heigth, setHeigth] = useState("")
    const [depth, setDepth] = useState("")
    const [updateImg, setUpdateImg] = useState("")

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedProduct}/${id}`).then(res => setProduct(res.data))
    }, [id])

    const Submit = () => {
        send(image)
        color1 == "" ? color.push(product.color[0]) : color.push(color1)
        color2 == "" ? color.push(product.color[1]) : color.push(color2)
        color3 == "" ? color.push(product.color[2]) : color.push(color3)
        color4 == "" ? color.push(product.color[3]) : color.push(color4)
        color5 == "" ? color.push(product.color[4]) : color.push(color5)
        let img = data.pop()
        setUpdateImg(img)
        setTimeout(() => {
            API.post(`${updateProduct}`, {
                "title": title == "" ? product.title : title,
                "brand": brand == "" ? product.brand : brand,
                "color": color,
                "price": price == "" ? product.price : price,
                "stars": stars == "" ? product.stars : stars,
                "category": category == "" ? product.category : category,
                "discount": discount == "" ? product.discount : discount,
                "model": model == "" ? product.model : model,
                "quantity": quantity == "" ? product.quantity : quantity,
                "description": description == "" ? product.description : description,
                "width": width == "" ? product.width : width,
                "hegth": heigth == "" ? product.hegth : heigth,
                "depth": depth == "" ? product.depth : depth,
                "image": image == "" ? product.image : img,
                "id": id,
            })
                .then(res => notify(`Success`, res.status))
                .catch(err => notify(err.message, err.response?.status))
        }, 5000)
    };
    return (
        <Wrapper >
            <ToastContainer />
            <div>
                <div className="col-lg-12 customer-login">
                    <div className="well">
                        <p>
                            <strong>Update Product</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Title</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={product.title}
                                onChange={({ target }) => setTitle(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Brand</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={product.brand}
                                onChange={({ target }) => setBrand(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Price</label>

                            <input
                                type="number"
                                className="form-control"
                                defaultValue={product.price}
                                onChange={({ target }) => setPrice(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Stars</label>
                            <select
                                className="form-control"
                                defaultValue={product.stars}
                                onChange={({ target }) => setStars(target.value)}>
                                <option className="form-control">1</option>
                                <option className="form-control">1.5</option>
                                <option className="form-control">2</option>
                                <option className="form-control">2.5</option>
                                <option className="form-control">3</option>
                                <option className="form-control">3.5</option>
                                <option className="form-control">4</option>
                                <option className="form-control">4.5</option>
                                <option className="form-control">5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Category</label>

                            <select
                                className="form-control"
                                defaultValue={product.category}
                                onChange={({ target }) => setCategory(target.value)} >
                                <option className="form-control" >Apparel</option>
                                <option className="form-control" >Cables </option>
                                <option className="form-control" >Cameras</option>
                                <option className="form-control" >Flashlights &amp; Lamps</option>
                                <option className="form-control" >Jewelry</option>
                                <option className="form-control" >Watches</option>
                                <option className="form-control" >Earings</option>
                                <option className="form-control" >Notebook Computer</option>
                                <option className="form-control" >Tablet</option>
                                <option className="form-control" >Bags</option>
                                <option className="form-control" >Headphones</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Discount</label>

                            <select
                                className="form-control form-discount"
                                defaultValue={product.discount}
                                onChange={({ target }) => setDiscount(target.value)}>
                                <option className="form-control">No</option>
                                {
                                    numberDiscount.map((item) => (
                                        <option className="form-control" key={item}>{item}</option>

                                    ))
                                }

                            </select>
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Model</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={product.model}
                                onChange={({ target }) => setModel(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Quantity</label>

                            <input
                                type="number"
                                className="form-control"
                                defaultValue={product.quantity}
                                onChange={({ target }) => setQuantity(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Descripion</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={product.description}
                                onChange={({ target }) => setDescripion(target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Color</label>
                            <div className="color-flex">
                                {
                                    product?.color?.map((item, index) => (

                                        <div style={{ background: `${item}`, width: "25%", height: "30px" }} key={index}></div>

                                    ))
                                }
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Enter your Color</label>

                            <div className="color-flex">
                                <input
                                    type="color"
                                    className="form-control"
                                    onChange={({ target }) => setColor1(target.value)}
                                />
                                <input
                                    type="color"
                                    className="form-control"
                                    onChange={({ target }) => setColor2(target.value)}
                                />
                                <input
                                    type="color"
                                    className="form-control"
                                    onChange={({ target }) => setColor3(target.value)}
                                />

                                <input
                                    type="color"
                                    className="form-control"
                                    onChange={({ target }) => setColor4(target.value)}
                                />

                                <input
                                    type="color"
                                    className="form-control"
                                    defaultValue={"gold"}
                                    onChange={({ target }) => setColor5(target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Width (mm)</label>
                            <input
                                type="number"
                                className="form-control"
                                defaultValue={product.width}
                                onChange={({ target }) => setWidth(target.value)} />
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Heigth (mm)</label>
                            <input
                                type="number"
                                className="form-control"
                                defaultValue={product.hegth}
                                onChange={({ target }) => setHeigth(target.value)} />
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Depth (mm)</label>
                            <input
                                type="number"
                                className="form-control"
                                defaultValue={product.depth}
                                onChange={({ target }) => setDepth(target.value)} />
                        </div>

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div className="form-group">
                                <p className="control-label ">Image</p>
                                <img src={product.image} alt="" width="200px" />
                            </div>

                            <div className="form-group">
                                <p className="control-label ">Update Image</p>
                                <img src={updateImg} alt="" width="200px" />
                            </div>

                        </div>

                        <div className="form-group">
                            <label className="control-label">Enter your Image</label>
                            <div className="color-flex">
                                <input type="file" className="form-control file" onChange={({ target }) => setImage(target.files[0])} />
                            </div>
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
                                Submit();
                                notify();
                            }}
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ProductUpdate;
const Wrapper = styled.div`
 .color-flex {
  display: flex;
    gap: 10px;
 }

`;

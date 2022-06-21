import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
function AdminLogOut() {
    const navigate = useNavigate()
    function LogoutRemov() {

    }
    return (
        <Wrapper >
            <h2><span>Log Out</span></h2>
            <p>You will not be able to track new products or read messages when you log out of your account.</p>
            <div className="btn group">
                <button><span>NO</span></button>
                <button onClick={() => {
                    localStorage.removeItem("onlineShopAdminToken");
                    navigate("/adminLogin")
                }}><span>Yes</span>
                </button>
            </div>

        </Wrapper>
    )
}

export default AdminLogOut

const Wrapper = styled.div`
    width: 400px;
    height: 300px;
    margin: 100px auto;
    background-color: #cecece;
    h2 {
        padding: 10px;
        text-align: center;
    }
    p {
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        color: #999;
    }

    .btn.group {
        position: relative;
        top: 30%;
        transform: translate(0, -50%);
        display: flex;
        justify-content: space-evenly;

        button {
            padding: 8px 32px;
        }
    }
`
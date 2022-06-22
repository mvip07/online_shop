import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPrivateRouter = ({ children }) => {
    let Usertoken = localStorage.getItem("onlineShopAdminToken");
    //let Admintoken = localStorage.getItem("onlineShopAdminToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!Usertoken) navigate("/adminLogin");
    }, [Usertoken, navigate]);

    return children;
};

export default AdminPrivateRouter;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPrivateRouter = ({ children }) => {
    let Admintoken = localStorage.getItem("onlineShopAdminToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!Admintoken) navigate("/adminLogin");
    }, [Admintoken, navigate]);

    return children;
};

export default AdminPrivateRouter;

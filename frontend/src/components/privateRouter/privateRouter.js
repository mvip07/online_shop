import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let Usertoken = localStorage.getItem("onlineShopUserToken");
  //let Admintoken = localStorage.getItem("onlineShopAdminToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!Usertoken) navigate("/");
  }, [Usertoken, navigate]);

  return children;
};

export default PrivateRouter;

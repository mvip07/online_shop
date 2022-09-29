import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let Usertoken = JSON.parse(localStorage.getItem("onlineShopUser"))?.token
  const navigate = useNavigate();

  useEffect(() => {
    if (!Usertoken) navigate("/login");
  }, [Usertoken, navigate]);

  return children;
};

export default PrivateRouter;

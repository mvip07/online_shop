import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let Usertoken = localStorage.getItem("onlineShopUserToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!Usertoken) navigate("/login");
  }, [Usertoken, navigate]);

  return children;
};

export default PrivateRouter;

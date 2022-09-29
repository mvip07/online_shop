import { useEffect, useState } from "react";
import styled from "styled-components";

function Admin() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("onlineShopAdminToken")))
	useEffect (() => {
		setUser(JSON.parse(localStorage.getItem("onlineShopAdminToken")))
	}, [])
	return (
		<Wrapper>
			<div className="jumbotron">
				<h1 className="display-4">Hello, {user?.admin?.user}</h1>
				<h2 className="display-4">Hello, welcome to the admin section of our website, we are happy to meet you</h2>
			</div>
		</Wrapper >
	);
}

export default Admin;
const Wrapper = styled.div`
  .jumbotron {
    height: 100%;
    margin: 0;
    padding: 100px 0;
    text-align: center;
  }
`




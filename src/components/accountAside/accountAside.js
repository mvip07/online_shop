import { Link } from "react-router-dom"

function AccountAside () {
    return (
        <aside className="col-sm-3 hidden-xs" id="column-right">
        <h2 className="subtitle">Account</h2>
        <div className="list-group">
          <ul className="list-item">
            <li>
              <Link to="#">Forgotten Password</Link>
            </li>
            <li>
              <Link to="#">My Account</Link>
            </li>
            <li>
              <Link to="#">Wish List</Link>
            </li>
            <li>
              <Link to="#">Order History</Link>
            </li>
            <li>
              <Link to="#">Returns</Link>
            </li>
          </ul>
        </div>
      </aside>
    )
}

export default AccountAside

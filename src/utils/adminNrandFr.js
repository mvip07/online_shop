import AdminFooter from "../admin/componets/footer/adminFooter";
import AdminNavbar from "../admin/componets/navbar/adminNavbar";

const AdminNrandFr = ({ children }) => {
    return (
        <div>
            <AdminNavbar/>
                {children}
            <AdminFooter />
        </div>
    );
};

export default AdminNrandFr;

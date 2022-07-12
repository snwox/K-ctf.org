import { Navigation } from "../components";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    return (
        <div className="main">
            mainlayout
            <Outlet />
            <Navigation />
        </div>
    );
}
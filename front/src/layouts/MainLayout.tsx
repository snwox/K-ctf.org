import { Navigation } from "../components";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    {console.log('main layout')}
    return (
        <div className="main">
            mainlayout haha;
            <Outlet />
            <Navigation />
        </div>
    );
}
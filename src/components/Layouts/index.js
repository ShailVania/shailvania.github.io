import './index.scss';
import Sidebar from "../Sidebar";
import {Outlet} from "react-router-dom";

const Layout = ()=> {
    return (
        <div className="app">
            <Sidebar />
            <div className="page">
                <span
                 style={{
                    left: '10px',
                    marginLeft: '6px'
                 }}
                className='tags top-tag-html'>&lt;html&gt;</span>
                    <br />
                <span
                 style={{
                    left: '30px',
                    marginLeft: '6px'
                 }}
                className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span 
                style={{
                    left: '30px',
                    marginLeft: '6px'
                 }}
                className='tags bottom-tags'>&lt;/body&gt;
                    <br />
                    <span
                     style={{
                        left: '10px',
                     }} className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>

        </div>
    )
}


export default Layout;
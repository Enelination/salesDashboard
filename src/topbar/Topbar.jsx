import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">eneladmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />

                    </div>
                    <img src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?cs=srgb&dl=pexels-dellon-thomas-2474307.jpg&fm=jpg" alt="" className="topAvatar" />
                </div>

            </div>

        </div>
    )
}

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?cs=srgb&dl=pexels-dellon-thomas-2474307.jpg&fm=jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Emmanuel Akuffo</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Enel0007</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.10.19</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+233 1233445567</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Enel0@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Accra Ghana</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpadteItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  placeholder="enel007"
                  className="userUpadteInput"
                />
              </div>
              <div className="userUpadteItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Emmanuel Akuffo"
                  className="userUpadteInput"
                />
              </div>
              <div className="userUpadteItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enel0@gmail.com"
                  className="userUpadteInput"
                />
              </div>
              <div className="userUpadteItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="+233 1233445567
"
                  className="userUpadteInput"
                />
              </div>
              <div className="userUpadteItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Accra Ghana"
                  className="userUpadteInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?cs=srgb&dl=pexels-dellon-thomas-2474307.jpg&fm=jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

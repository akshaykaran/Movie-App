import React, { useState } from "react";
import "./Css files/moviesearch.css";
export default function MovieSearch(props) {
  const { Title, Poster, Type, Year } = props.DataTrans;
  const handleLike = props.handleLike;

  const [like, islike] = useState(false);
  const handleFavourite = () => {
    handleLike(props.DataTrans);
    islike(!like);
  };
  return (
    <>
      <div className="Movie-Body">
        <div className="Movie-info">
          <img
            src={
              Poster !== "N/A"
                ? Poster
                : "https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg"
            }
            className="image"
            alt={Title}
          />{" "}
        </div>
        <div className="Description">
          <p>
            <span
              style={{ fontWeight: "800", color: "#49108B", fontSize: "26px" }}
            >
              "{Title}"
            </span>{" "}
            is a captivating{" "}
            <span
              style={{ fontWeight: "800", color: "#49108B", fontSize: "24px" }}
            >
              {Type}
            </span>{" "}
            film released in{" "}
            <span
              style={{ fontWeight: "800", color: "#49108B", fontSize: "24px" }}
            >
              {Year}
            </span>{" "}
            that takes audiences on an unforgettable journey. With its engaging
            storyline and compelling performances, this movie offers a perfect
            blend of entertainment and emotion, making it a must-watch for fans
            of the genre.
          </p>

          {!like ? (
            <button onClick={handleFavourite} className="Btn-like">
              Favourite
            </button>
          ) : (
            <button
              onClick={(e) => handleLike(props.DataTrans, islike)}
              className="Btn-like"
            >
              Unlike
            </button>
          )}
        </div>
      </div>
    </>
  );
}

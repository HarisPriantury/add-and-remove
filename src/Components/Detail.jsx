import React from "react";
import png from "../Images/png.png";
import close from "../Images/close.png";

export default function Detail(props) {
  //     document.querySelectorAll("row").forEach((ite) => {
  //       ite.addEventListener("click", () => {
  //         ite.classList.add("hidden");
  //       });
  //   }

  const container = document.querySelector(".container");

  container.addEventListener("click", (e) => {
    if (e.target.className === "close-btn") {
      e.target.parentElement.parentElement.remove();

      console.log(`close file success`);
    }
  });

  return (
    <>
      <div className="row">
        <div className="left">
          <img src={png} alt="file type" className="file-type"></img>
          <p className="png">{props.format}</p>
          <div className="detail-row">
            <h1>{props.nama}</h1>
            <p>
              {props.day} {props.month} {props.fullYear}, {props.hour}:{props.minute}:{props.second}
            </p>
          </div>
        </div>
        <div className="right">
          <img className="close-btn" src={close} alt="" />
        </div>
      </div>
    </>
  );
}

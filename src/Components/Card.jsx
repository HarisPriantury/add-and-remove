import React, { useState } from "react";
import logo from "../Images/logo.png";
import Detail from "./Detail";

export default function Card() {
  const [inputList, setInputList] = useState([]);

  const showFileName = () => {
    // tanggal
    const d = new Date();
    let tanggal = d.getDate();
    // bulan
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let bulan = month[d.getMonth()];
    //tahun
    let tahun = d.getFullYear();

    //jam
    let jam = d.getHours();

    //menit
    let menit = d.getMinutes();
    // detik
    let detik = d.getSeconds();

    const files = document.getElementById("image");
    const fileName = files.files[0].name;

    const formatFile = fileName.split(".");
    const formatFileName = formatFile[formatFile.length - 1];

    console.log(`Add file ${fileName} format "${formatFileName}" success`);

    setInputList(inputList.concat(<Detail format={formatFileName} nama={fileName} day={tanggal} month={bulan} fullYear={tahun} hour={jam} minute={menit} second={detik} key={inputList.length} />));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h2>Proof of Payment</h2>
        <p>
          Upload or drag and drop <br /> your file.
        </p>
        <label htmlFor="image" className="input-file">
          Upload
        </label>
        <input type="file" id="image" name="image" onInput={showFileName} className="input-image" />
        {inputList}
      </div>
    </div>
  );
}

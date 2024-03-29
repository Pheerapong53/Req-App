import React, { useState, useRef } from "react";
import logo from "../img/logo.png";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useReactToPrint } from "react-to-print";

// import {Page, Text, View, Document, StyleSheet} from 'react-pdf';
import TextareaAutosize from "react-textarea-autosize";

//Import Worker
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.css";



// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });


function FormPdf() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const location = useLocation();
  const Value = location.state.initialValue;
  //console.log(Value);

  const corg = Value.corg;
  const cname = Value.cname;
  const ctel = Value.ctel;
  const cdep = Value.cdep;
  const softname = Value.softname;
  const type = Value.type;
  const obj = Value.obj;
  const des = Value.des;
  const os = Value.os;
  const hardware = Value.hardware;
  const software = Value.software;
  const db = Value.db;
  const user = Value.user;
  const other = Value.other;
  const orguser = Value.orguser;
  const place = Value.place;
  const producer = Value.producer;
  const admin = Value.admin;
  const orgown = Value.orgown;
  const orgadmin = Value.orgadmin;
  const useFilename = Value.useFilename;
  const useFile = Value.useFile;
  const userFilename = Value.userFilename;
  const userFile = Value.userFile;
  const designFilename = Value.designFilename;
  const designFile = Value.designFile;

  const dmy = useState(() => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear() + 543;
    return `${day}/${month}/${year}`;
  });
console.log(dmy[0]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `แบบฟอร์มขอรับการประเมิน`,
  });

  const addData = () => {
    Axios.post("http://localhost:3001/AddData", {
      corg: corg,
      cname: cname,
      ctel: ctel,
      cdep: cdep,
      softname: softname,
      type: type,
      obj: obj,
      des: des,
      os: os,
      hardware: hardware,
      software: software,
      db: db,
      user: user,
      other: other,
      orguser: orguser,
      place: place,
      producer: producer,
      admin: admin,
      orgown: orgown,
      orgadmin: orgadmin,
      useFilename: useFilename,
      useFile: useFile,
      userFilename: userFilename,
      userFile: userFile,
      designFilename: designFilename,
      designFile: designFile,
      dmy: dmy[0],
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    localStorage.clear();
  };


  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const defaultLayoutPluginInstance1 = defaultLayoutPlugin();
  const defaultLayoutPluginInstance2 = defaultLayoutPlugin();
  //console.log(location);
  return (
    <div className="container-sm">
      
      <div className="print" ref={componentRef}>
        {/* <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}> */}
 
        <div className="text-center my-3">
          <p className="float-end">{dmy}</p>
          <img src={logo} alt="software logo" width="100" height="100" />
          <h3>แบบฟอร์มขอรับการประเมินและรับรองซอฟต์แวร์กองทัพอากาศ</h3>
        </div>

        <p className="my-3">
          <b>หน่วยงานที่ขอรับการประเมินและรับรองซอฟต์แวร์</b>{" "}
          <u>{corg !== null ? corg : []}</u>
        </p>

        <b>ผู้ติดต่อประสานงานของหน่วย</b>
        <div className="row mx-3">
          <div className="col">
            <b>ยศ-ชื่อ-สกุล</b> <u>{cname !== null ? cname : []}</u>
          </div>
          <div className="col">
            <b>โทรศัพท์</b> <u>{ctel !== null ? ctel : []}</u>
          </div>
        </div>
        <div className="row mx-3">
          <span>
            <b>ตำแหน่ง</b> <u>{cdep !== null ? cdep : []}</u>
          </span>
        </div>

        <p className="my-3">
          <b>ชื่อซอฟต์แวร์</b> <u>{softname !== null ? softname : []}</u>
        </p>

        <div className="row m-3">
          <b>ประเภทของซอฟต์แวร์ (กรุณาทำเครื่องหมาย / ลงในข้อใดข้อหนึ่ง)</b>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              checked={type === "ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"}
              id="type"
              name="type"
              value="ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"
            />
            <label>ซอฟต์แวร์ประเภทยุทธการ (Combat Software)</label>
            <br />
            <input
              type="radio"
              className="form-check-input"
              checked={
                type === "ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)"
              }
              id="type"
              name="type"
              value="ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)"
            />
            <label>ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)</label>
            <br />
            <input
              type="radio"
              className="form-check-input"
              checked={
                type === "ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)"
              }
              id="type"
              name="type"
              value="ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)"
            />
            <label>ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)</label>
            <br />
          </div>
        </div>

        <div className="my-3">
          <b>วัตถุประสงค์ของซอฟต์แวร์</b>
          <TextareaAutosize
            className="form-control"
            value={obj !== null ? obj : []}
          />
        </div>

        <div className="my-3">
          <b>คำอธิบายเกี่ยวกับคุณลักษณะของซอฟต์แวร์โดยสังเขป</b>
          <TextareaAutosize
            className="form-control"
            value={des !== null ? des : []}
          />
        </div>

        <b>ระบบการทำงานของซอฟต์แวร์โดยสังเขป</b>
        <div className="mx-3">
          <span>
            ระบบปฏิบัติการ (ระบุ) <u>{os !== null ? os : []}</u>
          </span>
          <br />
          <span>
            ฮาร์ดแวร์ที่ต้องใช้ (ระบุ){" "}
            <u>{hardware !== null ? hardware : []}</u>
          </span>
          <br />
          <span>
            ซอฟต์แวร์ที่ต้องใช้ (ระบุ){" "}
            <u>{software !== null ? software : []}</u>
          </span>
          <br />
          <span>
            รูปแบบฐานข้อมูล (ระบุ) <u>{db !== null ? db : []}</u>
          </span>
          <br />
          <span>
            จำนวนผู้ใช้งานโดยประมาณ <u>{user !== null ? user : []}</u> User(s)
          </span>
          <br />
          <span>อื่น ๆ (ระบุ)</span>
          <TextareaAutosize
            className="form-control"
            value={other !== null ? other : " "}
          />
        </div>

        <div className="my-3">

          <div className="row">
            <div className="col-6">
              <p>
                <b>หน่วยผู้ใช้งานซอฟต์แวร์</b>{" "}
                <u>{orguser !== null ? orguser : []}</u>
              </p>
            </div>
            <div className="col-6">
              <p>
                <b>สถานที่ติดตั้งซอฟต์แวร์</b>{" "}
                <u>{place !== null ? place : []}</u>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p>
                <b>ผู้ผลิตซอฟต์แวร์</b>{" "}
                <u>{producer !== null ? producer : []}</u>
              </p>
            </div>
            <div className="col-6">
              <p>
                <b>ผู้รับผิดชอบดูแลซอฟต์แวร์</b>{" "}
                <u>{admin !== null ? admin : []}</u>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p>
                <b>หน่วยงานเจ้าของซอฟต์แวร์</b>{" "}
                <u>{orgown !== null ? orgown : []}</u>
              </p>
            </div>
            <div className="col-6">
              <p>
                <b>หน่วยงานบริหารและกำกับดูแลซอฟต์แวร์</b>{" "}
                <u>{orgadmin !== null ? orgadmin : []}</u>
              </p>
            </div>
          </div>

        </div>
        {/* </View>
          </Page>
        </Document> */}
        
      </div>
      

      <p>
        <b>ช่องทางการใช้งานซอฟต์แวร์</b>{" "}
        <u>{useFilename !== undefined ? useFilename : []}</u>
      </p>

      <h4>View PDF</h4>
                  <div className="viewer">
                    {/* render this if we have a pdf file */}
                    {useFile && (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                        <Viewer
                          fileUrl={useFile}
                          plugins={[defaultLayoutPluginInstance]}
                        />
                      </Worker>
                    )}

                    {/* render this if we have pdfFile state null   */}
                    {!useFile && <>No file is selected yet</>}
                  </div>

      <p className="my-3">
        <b>คู่มือการใช้งานซอฟต์แวร์</b>{" "}
        <u>{userFilename !== undefined ? userFilename : []}</u>
      </p>
      <h4>View PDF</h4>
                  <div className="viewer">
                    {/* render this if we have a pdf file */}
                    {useFile && (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                        <Viewer
                          fileUrl={userFile}
                          plugins={[defaultLayoutPluginInstance1]}
                        />
                      </Worker>
                    )}

                    {/* render this if we have pdfFile state null   */}
                    {!userFile && <>No file is selected yet</>}
                  </div>

      <p className="my-3">
        <b>เอกสารออกแบบซอฟต์แวร์</b>{" "}
        <u>{designFilename !== undefined ? designFilename : []}</u>
      </p>
      <h4>View PDF</h4>
                  <div className="viewer">
                    {/* render this if we have a pdf file */}
                    {designFile && (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                        <Viewer
                          fileUrl={designFile}
                          plugins={[defaultLayoutPluginInstance2]}
                        />
                      </Worker>
                    )}

                    {/* render this if we have pdfFile state null   */}
                    {!useFile && <>No file is selected yet</>}
                  </div>

<div id="footer">



<div className="text-center my-3">
        <input
          className="form-check-input mx-2"
          type="checkbox"
          name="validate"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label className="form-check-label">
          <b>ยืนยันความถูกต้อง</b>
        </label>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <a href="/">
            <button className="btn-lg btn-primary">BACK</button>
          </a>
        </div>
        <div className="col-auto">
          <button
            className="btn-lg btn-info"
            data-toggle="tooltip"
            data-placement="bottom"
            title="ยืนยันความถูกต้องก่อนทำการพิมพ์"
            disabled={!isChecked}
            onClick={handlePrint}
          >
            PRINT
          </button>
        </div>
        <div className="col-auto">
          <a href="/">
            <button
              className="btn-lg btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="ยืนยันความถูกต้องก่อนทำการบันทึก"
              disabled={!isChecked}
              // onChange={(e) => {
              //         addData();
              //         localStorage.clear();
              //       }}
              onClick={addData}
            >
              SAVE
            </button>
          </a>
        </div>
      </div>

      <div className="text-center">
        <h5>
          <b className="text-danger">
            *กรุณาพิมพ์แบบฟอร์มด้านบนส่งตามสายงานมาที่ ศซว.ทอ.
          </b>
        </h5>
        <h5>
          <b className="text-danger">
            *กรุณาพิมพ์แบบฟอร์มก่อนการบันทึกแบบฟอร์ม
          </b>
        </h5>
      </div>

</div>
          
    </div>
  );
}

export default FormPdf;

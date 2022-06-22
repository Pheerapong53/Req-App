import React, {useState} from "react";
import logo from "../img/logo.png";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.css";

function FormPdf() {
  const location = useLocation();
  const corg = location.state.corg;
  const cname = location.state.cname;
  const ctel = location.state.ctel;
  const cdep = location.state.cdep;
  const softname = location.state.softname;
  const type = location.state.type;
  const obj = location.state.obj;
  const des = location.state.des;
  const os = location.state.os;
  const hardware = location.state.hardware;
  const software = location.state.software;
  const db = location.state.db;
  const user = location.state.user;
  const other = location.state.other;
  const orguser = location.state.orguser;
  const place = location.state.place;
  const producer = location.state.producer;
  const admin = location.state.admin;
  const orgown = location.state.orgown;
  const orgadmin = location.state.orgadmin;
  const useFile = location.state.useFile;
  const userFile = location.state.userFile;
  const designFile = location.state.designFile;

// console.log(useFile);
  return (
    <div className="container-sm">
      <div className="text-center my-3">
        <img src={logo} alt="software logo" width="100" height="100" />
        <h1>แบบฟอร์มขอรับการประเมินและรับรองซอฟต์แวร์กองทัพอากาศ</h1>
      </div>

      <p className="my-3">
        <b>หน่วยงานที่ขอรับการประเมินและรับรองซอฟต์แวร์</b> <u>{corg}</u>
      </p>

      <b>ผู้ติดต่อประสานงานของหน่วย</b>
      <div className="row mx-3">
        <div className="col">
          <b>ยศ-ชื่อ-สกุล</b> <u>{cname}</u>
        </div>
        <div className="col">
          <b>โทรศัพท์</b> <u>{ctel}</u>
        </div>
      </div>
      <div className="row mx-3">
        <span>
          <b>ตำแหน่ง</b> <u>{cdep}</u>
        </span>
      </div>

      <p className="my-3">
        <b>ชื่อซอฟต์แวร์</b> <u>{softname}</u>
      </p>

      <div className="row m-3">
        <b>ประเภทของซอฟต์แวร์ (กรุณาทำเครื่องหมาย / ลงในข้อใดข้อหนึ่ง)</b>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            checked = {type === 'ซอฟต์แวร์ประเภทยุทธการ (Combat Software)'}
            id="type"
            name="type"
            value="ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"
          />
          <label>ซอฟต์แวร์ประเภทยุทธการ (Combat Software)</label>
          <br />
          <input
            type="radio"
            className="form-check-input"
            checked = {type === 'ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)'}
            id="type"
            name="type"
            value="ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)"
          />
          <label>ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)</label>
          <br />
          <input
            type="radio"
            className="form-check-input"
            checked = {type === 'ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)'}
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
        <textarea
          className="form-control"
          rows="5"
          value={obj}
          />
      </div>

      <div className="my-3">
        <b>คำอธิบายเกี่ยวกับคุณลักษณะของซอฟต์แวร์โดยสังเขป</b>
        <textarea
          className="form-control"
          rows="5"
          value={des}
          />
      </div>

      <b>ระบบการทำงานของซอฟต์แวร์โดยสังเขป</b>
      <div className="mx-3">
        <span>
          ระบบปฏิบัติการ (ระบุ) <u>{os}</u>
        </span>
        <br />
        <span>
          ฮาร์ดแวร์ที่ต้องใช้ (ระบุ) <u>{hardware}</u>
        </span>
        <br />
        <span>
          ซอฟต์แวร์ที่ต้องใช้ (ระบุ) <u>{software}</u>
        </span>
        <br />
        <span>
          รูปแบบฐานข้อมูล (ระบุ) <u>{db}</u>
        </span>
        <br />
        <span>
          จำนวนผู้ใช้งานโดยประมาณ <u>{user}</u> User(s)
        </span>
        <br />
      </div>

      <p className="my-3">
        <b>หน่วยผู้ใช้งานซอฟต์แวร์</b> <u>{orguser}</u>
      </p>
      <p className="my-3">
        <b>สถานที่ติดตั้งซอฟต์แวร์</b> <u>{place}</u>
      </p>
      <p className="my-3">
        <b>ผู้ผลิตซอฟต์แวร์</b> <u>{producer}</u>
      </p>
      <p className="my-3">
        <b>ผู้รับผิดชอบดูแลซอฟต์แวร์</b> <u>{admin}</u>
      </p>
      <p className="my-3">
        <b>หน่วยงานเจ้าของซอฟต์แวร์</b> <u>{orgown}</u>
      </p>
      <p className="my-3">
        <b>หน่วยงานบริหารและกำกับดูแลซอฟต์แวร์</b> <u>{orgadmin}</u>
      </p>

      <p className="my-3">
        <b>ช่องทางการใช้งานซอฟต์แวร์</b> <u>{useFile !== undefined ? useFile.name : []}</u>
      </p>

      <p className="my-3">
        <b>คู่มือการใช้งานซอฟต์แวร์</b> <u>{userFile !== undefined ? userFile.name : []}</u>
      </p>

      <p className="my-3">
        <b>เอกสารออกแบบซอฟต์แวร์</b> <u>{designFile !== undefined ? designFile.name : []}</u>
      </p>

      <div className="text-center my-3">
          <input className="form-check-input mx-2" type='checkbox' />
          <label className="form-check-label">
              <b>ยืนยันความถูกต้อง</b>
          </label>
      </div>

      <div className="row justify-content-center mb-4">
          <div className="col-auto">
              <a href="/"><button className="btn-lg btn-primary">BACK</button></a>
          </div>
          <div className="col-auto">
              <button className="btn-lg btn-info">PRINT</button>
          </div>
          <div className="col-auto">
              <button className="btn-lg btn-success">SAVE</button>
          </div>
      </div>

      <div className="text-center">
          <h5><b className="text-danger">*กรุณาพิมพ์แบบฟอร์มด้านบนส่งตามสายงานมาที่ ศซว.ทอ.</b></h5>
          <h5><b className="text-danger">*กรุณาพิมพ์แบบฟอร์มก่อนการบันทึกแบบฟอร์ม </b></h5>
      </div>
    </div>
  );
}

export default FormPdf;

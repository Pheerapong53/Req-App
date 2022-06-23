import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import "../assets/styles/style.css";

const Form = () => {

//add data to localStorage
const [form, setForm] = useState([]);

useEffect(() => {

  localStorage.setItem('form', JSON.stringify(form))
}, [])

  const [corg, setCorg] = useState(" ");
  const [cname, setCname] = useState(" ");
  const [ctel, setCtel] = useState(" ");
  const [cdep, setCdep] = useState(" ");
  const [softname, setSoftname] = useState(" ");
  const [type, setType] = useState(" ");
  const [obj, setObj] = useState(" ");
  const [des, setDes] = useState(" ");
  const [os, setOs] = useState(" ");
  const [hardware, setHardware] = useState(" ");
  const [software, setSoftware] = useState(" ");
  const [db, setDb] = useState(" ");
  const [user, setUser] = useState(" ");
  const [other, setOther] = useState(" ");
  const [orguser, setOrguser] = useState(" ");
  const [place, setPlace] = useState(" ");
  const [producer, setProducer] = useState(" ");
  const [admin, setAdmin] = useState(" ");
  const [orgown, setOrgown] = useState(" ");
  const [orgadmin, setOrgadmin] = useState(" ");
  const [useFile, setUseFile] = useState();
  const [userFile, setUserFile] = useState();
  const [designFile, setDesignFile] = useState();

  const navigate = useNavigate();

const handleFormSubmit = () => {
  setForm([
    {
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
      useFile: useFile,
      userFile: userFile,
      designFile: designFile
    },
  ])
}

  const handleSubmit = () => {
    navigate('/pdf',
    {state: {
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
      useFile: useFile,
      userFile: userFile,
      designFile: designFile
    },
    }
    );
  };


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <img
              className="mb-3 mt-3"
              src={logo}
              alt="software logo"
              width="100"
              height="100"
            />
          </div>
          <div className="col-auto">
            <h1 className="mb-3 mt-4">
              แบบฟอร์มขอรับการประเมินและรับรองซอฟต์แวร์กองทัพอากาศ
            </h1>
          </div>
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            //value={corg}
            placeholder="หน่วยงานที่ร้องขอ"
            onChange={(e) => setCorg(e.target.value)}
            required
          />
          <br />

          <div className="form-group">
            <h5>ผู้ติดต่อประสานงานของหน่วย</h5>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ยศ-ชื่อ-สกุล"
                  onChange={(e) => setCname(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="โทรศัพท์"
                  onChange={(e) => setCtel(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />

            <input
              type="text"
              className="form-control"
              placeholder="ตำแหน่ง"
              onChange={(e) => setCdep(e.target.value)}
              required
            />
            <br />
          </div>

          <div className="form-group">
            <h5>ข้อมูลซอฟต์แวร์</h5>
            <input
              type="text"
              className="form-control"
              placeholder="ชื่อซอฟต์แวร์"
              onChange={(e) => setSoftname(e.target.value)}
              required
            />
            <br />

            <label id="label" for="type">
              <b>ประเภทของซอฟต์แวร์ (กรุณาทำเครื่องหมาย / ลงในข้อใดข้อหนึ่ง)</b>
            </label>

            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                value="ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"
                name="type"
                onChange={(e) => setType(e.target.value)}
                required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="คำอธิบาย : ซอฟต์แวร์ที่ใช้งานในด้านกำลังรบ โดยมีชั้นความลับ ทั้งในส่วนการปฏิบัติการและข้อมูล "
              >
                ซอฟต์แวร์ประเภทยุทธการ (Combat Software)
              </label>
              <br />
              <input
                type="radio"
                className="form-check-input"
                value="ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)"
                name="type"
                onChange={(e) => setType(e.target.value)}
                required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="คำอธิบาย : ซอฟต์แวร์ที่มีการใช้งานกับข้อมูลเชิงละเอียดอ่อนหรือมีเนื้อหาเกี่ยวข้องกับงานด้านยุทธการ 
                        หรือข้อมูลที่มีความสำคัญหรือมีชั้นความลับ หรือซอฟต์แวร์ที่มีการนำข้อมูลไปใช้กับระบบสารสนเทศด้านการรบ"
              >
                ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)
              </label>
              <br />
              <input
                type="radio"
                className="form-check-input"
                value="ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)"
                name="type"
                onChange={(e) => setType(e.target.value)}
                required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="คำอธิบาย : ซอฟต์แวร์ประเภทสนับสนุนที่มีหน้าที่สนับสนุนการใช้งานทั่วไปของหน่วยงาน"
              >
                ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)
              </label>
              <br />
            </div>

            <textarea
              className="form-control"
              rows="5"
              placeholder="วัตถุประสงค์ของซอฟต์แวร์ (1. ความต้องการหลัก(Function Requirement)ของระบบ , 2. Non-Function Requirement )"
              onChange={(e) => setObj(e.target.value)}
              required
            />
            <br />
            <textarea
              className="form-control"
              rows="5"
              placeholder="คำอธิบายเกี่ยวกับคุณลักษณะของซอฟต์แวร์โดยสังเขป (ซอฟต์แวร์มีความสามารถทำอะไร ที่ไหน อย่างไร กับใคร ได้บ้าง)"
              onChange={(e) => setDes(e.target.value)}
              required
            />
            <br />
          </div>

          <div className="form-group mb-3">
            <h5>ระบบการทำงานของซอฟต์แวร์โดยสังเขป</h5>
            <input
              type="text"
              className="form-control"
              placeholder="ระบบปฏิบัติการ"
              onChange={(e) => setOs(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="ฮาร์ดแวร์ที่ต้องใช้"
              onChange={(e) => setHardware(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              id="software"
              name="software"
              placeholder="ซอฟต์แวร์ที่ต้องใช้"
              onChange={(e) => setSoftware(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="รูปแบบฐานข้อมูล"
              onChange={(e) => setDb(e.target.value)}
              required
            />
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="จำนวนผู้ใช้งานโดยประมาณ"
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <br />
            <textarea
              className="form-control"
              rows="5"
              placeholder="อื่น ๆ"
              onChange={(e) => setOther(e.target.value)}
            />
          </div>

          <div className="form-group">
            <h5>หน่วยงานกำกับดูแลซอฟต์แวร์</h5>

            <input
              type="text"
              className="form-control"
              placeholder="หน่วยผู้ใช้งานซอฟต์แวร์"
              onChange={(e) => setOrguser(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="สถานที่ติดตั้งซอฟต์แวร์"
              onChange={(e) => setPlace(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="ผู้ผลิตซอฟต์แวร์"
              onChange={(e) => setProducer(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="ผู้รับผิดชอบดูแลซอฟต์แวร์"
              onChange={(e) => setAdmin(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="หน่วยเจ้าของซอฟต์แวร์"
              onChange={(e) => setOrgown(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="หน่วยงานบริหารและกำกับดูแลซอฟต์แวร์"
              onChange={(e) => setOrgadmin(e.target.value)}
              required
            />
            <br />
            <div className="form-group">
              <h5>กรุณาอัปโหลดเอกสารดังต่อไปนี้</h5>
              <div className="row">
                <label className="col-2 col-form-label">
                  <b>ช่องทางการใช้งานซอฟต์แวร์</b>
                </label>
                <div className="col-10">
                  <input
                    className="form-control-sm"
                    type="file"
                    onChange={(e) => setUseFile(e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <label className="col-2 col-form-label">
                  <b>คู่มือการใช้งานซอฟต์แวร์</b>
                </label>
                <div className="col-10">
                  <input
                    className="form-control-sm"
                    type="file"
                    onChange={(e) => setUserFile(e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <label className="col-2 col-form-label">
                  <b>เอกสารออกแบบซอฟต์แวร์</b>
                </label>
                <div className="col-10">
                  <input
                    className="form-control-sm"
                    type="file"
                    onChange={(e) => setDesignFile(e.target.files[0])}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center p-3">
            
            <input
            className="btn-lg btn-success"
            type="submit"
            value="ส่งแบบฟอร์ม"
            />
          
            
            
            <br />
            <br />
          </div>
        </form>
      </div>
      <footer>
        <div className="container-fluid bg-secondary p-3 text-center">
          <h5>
            <b>
              หากมีปัญหาในการกรอกแบบฟอร์มกรุณาติดต่อ เบอร์ 2-8446
              กองควบคุมมาตรฐานซอฟต์แวร์ ศซว.ทอ.
            </b>
          </h5>
        </div>
      </footer>
    </div>
  );
}

export default Form;

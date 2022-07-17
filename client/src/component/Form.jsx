import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import "../assets/styles/style.css";

const Form = () => {
  //add data to localStorage

  const [corg, setCorg] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.corg : [];
  });
  const [cname, setCname] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.cname : [];
  });
  const [ctel, setCtel] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.ctel : [];
  });
  const [cdep, setCdep] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.cdep : [];
  });
  const [softname, setSoftname] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.softname : [];
  });
  const [type, setType] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.type : [];
  });
  const [obj, setObj] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.obj : [];
  });
  const [des, setDes] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.des : [];
  });
  const [os, setOs] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.os : [];
  });
  const [hardware, setHardware] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.hardware : [];
  });
  const [software, setSoftware] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.software : [];
  });
  const [db, setDb] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.db : [];
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.user : [];
  });
  const [other, setOther] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.other : [];
  });
  const [orguser, setOrguser] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.orguser : [];
  });
  const [place, setPlace] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.place : [];
  });
  const [producer, setProducer] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.producer : [];
  });
  const [admin, setAdmin] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.admin : [];
  });
  const [orgown, setOrgown] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.orgown : [];
  });
  const [orgadmin, setOrgadmin] = useState(() => {
    const saved = localStorage.getItem("form");
    const Value = JSON.parse(saved);
    return saved !== null ? Value.orgadmin : [];
  });

  const [useFile, setUseFile] = useState();
  const [userFile, setUserFile] = useState();
  const [designFile, setDesignFile] = useState();
  

  const initialValue = {
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
    designFile: designFile,
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(initialValue));
  }, [initialValue]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pdf", {
      state: {
        initialValue,
      },
    });
  };

  //console.log(corg);
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

        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              id="corg"
              type="text"
              className="form-control"
              value={corg !== " " ? corg : []}
              placeholder="หน่วยงานที่ร้องขอ"
              onChange={(e) => setCorg(e.target.value)}
              //required
            />
            <label htmlFor="corg">หน่วยงานที่ร้องขอ</label>
          </div>

          <br />

          <div className="form-group">
            <h5>ผู้ติดต่อประสานงานของหน่วย</h5>
            <div className="row">
              <div className="form-floating col">
                <input
                  id="cname"
                  type="text"
                  className="form-control"
                  value={cname !== " " ? cname : []}
                  placeholder="ยศ-ชื่อ-สกุล"
                  onChange={(e) => setCname(e.target.value)}
                  //required
                />
                <label htmlFor="cname">ยศ-ชื่อ-สกุล</label>
              </div>
              <div className="form-floating col">
                <input
                  id="ctel"
                  type="tel"
                  className="form-control"
                  value={ctel !== " " ? ctel : []}
                  placeholder="โทรศัพท์"
                  onChange={(e) => setCtel(e.target.value)}
                  //required
                />
                <label htmlFor="ctel">โทรศัพท์</label>
              </div>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="cdep"
                type="text"
                className="form-control"
                value={cdep !== " " ? cdep : []}
                placeholder="ตำแหน่ง"
                onChange={(e) => setCdep(e.target.value)}
                //required
              />
              <label htmlFor="cdep">ตำแหน่ง</label>
            </div>

            <br />
          </div>

          <div className="form-group">
            <h5>ข้อมูลซอฟต์แวร์</h5>
            <div className="form-floating">
              <input
                id="softname"
                type="text"
                className="form-control"
                value={softname !== " " ? softname : []}
                placeholder="ชื่อซอฟต์แวร์"
                onChange={(e) => setSoftname(e.target.value)}
                //required
              />
              <label htmlFor="softname">ชื่อซอฟต์แวร์</label>
            </div>

            <br />

            <label id="label" htmlFor="type">
              <b>ประเภทของซอฟต์แวร์ (กรุณาทำเครื่องหมาย / ลงในข้อใดข้อหนึ่ง)</b>
            </label>

            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                value="ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"
                checked={type === "ซอฟต์แวร์ประเภทยุทธการ (Combat Software)"}
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
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
                checked={
                  type === "ซอฟต์แวร์ประเภทกึ่งยุทธการ (Semi-Combat Software)"
                }
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
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
                checked={
                  type === "ซอฟต์แวร์ประเภทสนับสนุนทั่วไป (Support Software)"
                }
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
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

            <label htmlFor="obj">
              <b>วัตถุประสงค์ของซอฟต์แวร์</b>
            </label>
            <textarea
              id="obj"
              className="form-control"
              rows="5"
              value={obj !== " " ? obj : []}
              placeholder="วัตถุประสงค์ของซอฟต์แวร์ (1. ความต้องการหลัก(Function Requirement)ของระบบ , 2. Non-Function Requirement )"
              onChange={(e) => setObj(e.target.value)}
              //required
            />

            <br />
            <label htmlFor="des">
              <b>คำอธิบายเกี่ยวกับคุณลักษณะของซอฟต์แวร์โดยสังเขป</b>
            </label>
            <textarea
              id="des"
              className="form-control"
              rows="5"
              value={des !== " " ? des : []}
              placeholder="คำอธิบายเกี่ยวกับคุณลักษณะของซอฟต์แวร์โดยสังเขป (ซอฟต์แวร์มีความสามารถทำอะไร ที่ไหน อย่างไร กับใคร ได้บ้าง)"
              onChange={(e) => setDes(e.target.value)}
              //required
            />

            <br />
          </div>

          <div className="form-group mb-3">
            <h5>ระบบการทำงานของซอฟต์แวร์โดยสังเขป</h5>
            <div className="form-floating">
              <input
                id="os"
                type="text"
                className="form-control"
                value={os !== " " ? os : []}
                placeholder="ระบบปฏิบัติการ"
                onChange={(e) => setOs(e.target.value)}
                //required
              />
              <label htmlFor="os">ระบบปฏิบัติการ</label>
            </div>

            <br />
            <div className="form-floating">
              <input
                id="hardware"
                type="text"
                className="form-control"
                value={hardware !== " " ? hardware : []}
                placeholder="ฮาร์ดแวร์ที่ต้องใช้"
                onChange={(e) => setHardware(e.target.value)}
                //required
              />
              <label htmlFor="hardware">ฮาร์ดแวร์ที่ต้องใช้</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="software"
                name="software"
                value={software !== " " ? software : []}
                placeholder="ซอฟต์แวร์ที่ต้องใช้"
                onChange={(e) => setSoftware(e.target.value)}
                //required
              />
              <label htmlFor="software">ซอฟต์แวร์ที่ต้องใช้</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="db"
                type="text"
                className="form-control"
                value={db !== " " ? db : []}
                placeholder="รูปแบบฐานข้อมูล"
                onChange={(e) => setDb(e.target.value)}
                //required
              />
              <label htmlFor="db">รูปแบบฐานข้อมูล</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="user"
                type="number"
                className="form-control"
                value={user !== " " ? user : []}
                placeholder="จำนวนผู้ใช้งานโดยประมาณ"
                onChange={(e) => setUser(e.target.value)}
                //required
              />
              <label htmlFor="user">จำนวนผู้ใช้งานโดยประมาณ</label>
            </div>
            <br />
            <label htmlFor="other">
              <b>อื่น ๆ :</b>
            </label>
            <textarea
              id="other"
              className="form-control"
              rows="5"
              value={other !== " " ? other : []}
              placeholder="อื่น ๆ"
              onChange={(e) => setOther(e.target.value)}
            />
          </div>

          <div className="form-group">
            <h5>หน่วยงานกำกับดูแลซอฟต์แวร์</h5>

            <div className="form-floating">
              <input
                id="orguser"
                type="text"
                className="form-control"
                value={orguser !== " " ? orguser : []}
                placeholder="หน่วยผู้ใช้งานซอฟต์แวร์"
                onChange={(e) => setOrguser(e.target.value)}
                //required
              />
              <label htmlFor="orguser">หน่วยผู้ใช้งานซอฟต์แวร์</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="place"
                type="text"
                className="form-control"
                value={place !== " " ? place : []}
                placeholder="สถานที่ติดตั้งซอฟต์แวร์"
                onChange={(e) => setPlace(e.target.value)}
                //required
              />
              <label htmlFor="place">สถานที่ติดตั้งซอฟต์แวร์</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="producer"
                type="text"
                className="form-control"
                value={producer !== " " ? producer : []}
                placeholder="ผู้ผลิตซอฟต์แวร์"
                onChange={(e) => setProducer(e.target.value)}
                //required
              />
              <label htmlFor="producer">ผู้ผลิตซอฟต์แวร์</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="admin"
                type="text"
                className="form-control"
                value={admin !== " " ? admin : []}
                placeholder="ผู้รับผิดชอบดูแลซอฟต์แวร์"
                onChange={(e) => setAdmin(e.target.value)}
                //required
              />
              <label htmlFor="admin">ผู้รับผิดชอบดูแลซอฟต์แวร์</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="orgown"
                type="text"
                className="form-control"
                value={orgown !== " " ? orgown : []}
                placeholder="หน่วยเจ้าของซอฟต์แวร์"
                onChange={(e) => setOrgown(e.target.value)}
                //required
              />
              <label htmlFor="orgown">หน่วยงานเจ้าของซอฟต์แวร์</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="orgadmin"
                type="text"
                className="form-control"
                value={orgadmin !== " " ? orgadmin : []}
                placeholder="หน่วยงานบริหารและกำกับดูแลซอฟต์แวร์"
                onChange={(e) => setOrgadmin(e.target.value)}
                //required
              />
              <label htmlFor="orgadmin">
                หน่วยงานบริหารและกำกับดูแลซอฟต์แวร์
              </label>
            </div>
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
                    //required
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
                    //required
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
                    //required
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
};

export default Form;

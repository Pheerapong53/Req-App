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
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
              placeholder="???????????????????????????????????????????????????"
              onChange={(e) => setCorg(e.target.value)}
              //required
            />
            <label htmlFor="corg">???????????????????????????????????????????????????</label>
          </div>

          <br />

          <div className="form-group">
            <h5>??????????????????????????????????????????????????????????????????????????????</h5>
            <div className="row">
              <div className="form-floating col">
                <input
                  id="cname"
                  type="text"
                  className="form-control"
                  value={cname !== " " ? cname : []}
                  placeholder="??????-????????????-????????????"
                  onChange={(e) => setCname(e.target.value)}
                  //required
                />
                <label htmlFor="cname">??????-????????????-????????????</label>
              </div>
              <div className="form-floating col">
                <input
                  id="ctel"
                  type="tel"
                  className="form-control"
                  value={ctel !== " " ? ctel : []}
                  placeholder="????????????????????????"
                  onChange={(e) => setCtel(e.target.value)}
                  //required
                />
                <label htmlFor="ctel">????????????????????????</label>
              </div>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="cdep"
                type="text"
                className="form-control"
                value={cdep !== " " ? cdep : []}
                placeholder="?????????????????????"
                onChange={(e) => setCdep(e.target.value)}
                //required
              />
              <label htmlFor="cdep">?????????????????????</label>
            </div>

            <br />
          </div>

          <div className="form-group">
            <h5>?????????????????????????????????????????????</h5>
            <div className="form-floating">
              <input
                id="softname"
                type="text"
                className="form-control"
                value={softname !== " " ? softname : []}
                placeholder="???????????????????????????????????????"
                onChange={(e) => setSoftname(e.target.value)}
                //required
              />
              <label htmlFor="softname">???????????????????????????????????????</label>
            </div>

            <br />

            <label id="label" htmlFor="type">
              <b>?????????????????????????????????????????????????????? (?????????????????????????????????????????????????????? / ???????????????????????????????????????????????????)</b>
            </label>

            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                value="?????????????????????????????????????????????????????????????????? (Combat Software)"
                checked={type === "?????????????????????????????????????????????????????????????????? (Combat Software)"}
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="???????????????????????? : ????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????? "
              >
                ?????????????????????????????????????????????????????????????????? (Combat Software)
              </label>
              <br />
              <input
                type="radio"
                className="form-check-input"
                value="?????????????????????????????????????????????????????????????????????????????? (Semi-Combat Software)"
                checked={
                  type === "?????????????????????????????????????????????????????????????????????????????? (Semi-Combat Software)"
                }
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="???????????????????????? : ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
                        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
              >
                ?????????????????????????????????????????????????????????????????????????????? (Semi-Combat Software)
              </label>
              <br />
              <input
                type="radio"
                className="form-check-input"
                value="??????????????????????????????????????????????????????????????????????????????????????? (Support Software)"
                checked={
                  type === "??????????????????????????????????????????????????????????????????????????????????????? (Support Software)"
                }
                name="type"
                onChange={(e) => setType(e.target.value)}
                //required
              />
              <label
                className="form-check-label"
                data-toggle="tooltip"
                data-placement="bottom"
                title="???????????????????????? : ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
              >
                ??????????????????????????????????????????????????????????????????????????????????????? (Support Software)
              </label>
              <br />
            </div>

            <label htmlFor="obj">
              <b>????????????????????????????????????????????????????????????????????????</b>
            </label>
            <textarea
              id="obj"
              className="form-control"
              rows="5"
              value={obj !== " " ? obj : []}
              placeholder="???????????????????????????????????????????????????????????????????????? (1. ?????????????????????????????????????????????(Function Requirement)????????????????????? , 2. Non-Function Requirement )"
              onChange={(e) => setObj(e.target.value)}
              //required
            />

            <br />
            <label htmlFor="des">
              <b>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</b>
            </label>
            <textarea
              id="des"
              className="form-control"
              rows="5"
              value={des !== " " ? des : []}
              placeholder="????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (????????????????????????????????????????????????????????????????????????????????? ?????????????????? ????????????????????? ?????????????????? ?????????????????????)"
              onChange={(e) => setDes(e.target.value)}
              //required
            />

            <br />
          </div>

          <div className="form-group mb-3">
            <h5>???????????????????????????????????????????????????????????????????????????????????????????????????</h5>
            <div className="form-floating">
              <input
                id="os"
                type="text"
                className="form-control"
                value={os !== " " ? os : []}
                placeholder="??????????????????????????????????????????"
                onChange={(e) => setOs(e.target.value)}
                //required
              />
              <label htmlFor="os">??????????????????????????????????????????</label>
            </div>

            <br />
            <div className="form-floating">
              <input
                id="hardware"
                type="text"
                className="form-control"
                value={hardware !== " " ? hardware : []}
                placeholder="?????????????????????????????????????????????????????????"
                onChange={(e) => setHardware(e.target.value)}
                //required
              />
              <label htmlFor="hardware">?????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="software"
                name="software"
                value={software !== " " ? software : []}
                placeholder="?????????????????????????????????????????????????????????"
                onChange={(e) => setSoftware(e.target.value)}
                //required
              />
              <label htmlFor="software">?????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="db"
                type="text"
                className="form-control"
                value={db !== " " ? db : []}
                placeholder="?????????????????????????????????????????????"
                onChange={(e) => setDb(e.target.value)}
                //required
              />
              <label htmlFor="db">?????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="user"
                type="number"
                className="form-control"
                value={user !== " " ? user : []}
                placeholder="?????????????????????????????????????????????????????????????????????"
                onChange={(e) => setUser(e.target.value)}
                //required
              />
              <label htmlFor="user">?????????????????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <label htmlFor="other">
              <b>???????????? ??? :</b>
            </label>
            <textarea
              id="other"
              className="form-control"
              rows="5"
              value={other !== " " ? other : []}
              placeholder="???????????? ???"
              onChange={(e) => setOther(e.target.value)}
            />
          </div>

          <div className="form-group">
            <h5>??????????????????????????????????????????????????????????????????????????????</h5>

            <div className="form-floating">
              <input
                id="orguser"
                type="text"
                className="form-control"
                value={orguser !== " " ? orguser : []}
                placeholder="?????????????????????????????????????????????????????????????????????"
                onChange={(e) => setOrguser(e.target.value)}
                //required
              />
              <label htmlFor="orguser">?????????????????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="place"
                type="text"
                className="form-control"
                value={place !== " " ? place : []}
                placeholder="?????????????????????????????????????????????????????????????????????"
                onChange={(e) => setPlace(e.target.value)}
                //required
              />
              <label htmlFor="place">?????????????????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="producer"
                type="text"
                className="form-control"
                value={producer !== " " ? producer : []}
                placeholder="????????????????????????????????????????????????"
                onChange={(e) => setProducer(e.target.value)}
                //required
              />
              <label htmlFor="producer">????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="admin"
                type="text"
                className="form-control"
                value={admin !== " " ? admin : []}
                placeholder="???????????????????????????????????????????????????????????????????????????"
                onChange={(e) => setAdmin(e.target.value)}
                //required
              />
              <label htmlFor="admin">???????????????????????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="orgown"
                type="text"
                className="form-control"
                value={orgown !== " " ? orgown : []}
                placeholder="???????????????????????????????????????????????????????????????"
                onChange={(e) => setOrgown(e.target.value)}
                //required
              />
              <label htmlFor="orgown">????????????????????????????????????????????????????????????????????????</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="orgadmin"
                type="text"
                className="form-control"
                value={orgadmin !== " " ? orgadmin : []}
                placeholder="?????????????????????????????????????????????????????????????????????????????????????????????????????????"
                onChange={(e) => setOrgadmin(e.target.value)}
                //required
              />
              <label htmlFor="orgadmin">
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????
              </label>
            </div>
            <br />
            <div className="form-group">
              <h5>???????????????????????????????????????????????????????????????????????????????????????</h5>
              <div className="row">
                <label className="col-2 col-form-label">
                  <b>???????????????????????????????????????????????????????????????????????????</b>
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
                  <b>????????????????????????????????????????????????????????????????????????</b>
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
                  <b>???????????????????????????????????????????????????????????????</b>
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
              value="?????????????????????????????????"
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
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????? 2-8446
              ??????????????????????????????????????????????????????????????????????????? ?????????.??????.
            </b>
          </h5>
        </div>
      </footer>
    </div>
  );
};

export default Form;

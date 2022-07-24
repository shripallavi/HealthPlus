// import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import './diseases.css'
// import './diseaseprediction.css'
import DiseaseLinks from './diseaseLinks.json';
import Links from './Links';


const Diseases = () => {
  const [target, setTarget] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [toshow,setToShow] = useState([]);
  const [details, setDetails] = useState([]);
  const [diseaseName, setDiseaseName] = useState([]); 

  function myFunction(value) {
    setDisplay1(true);
    setDisplay2(false);
    var dis =[]; 
    setDiseases(DiseaseLinks); 
    // {Object.keys(diseases).map(key => {
    //   if(key[1] === value)
    //   {
    //     console.log(key);
    //     dis.push(key);
    //   }
    // })}
    {Object.keys(diseases).map(key =>{
      // console.log(diseases[key]),
      if(key[1] === value)
      {
        dis.push([key, diseases[key]]);
      }
    })}
    setToShow(dis);
    // console.log(dis);
    dis = []; 
  }
  const [str, setStr] = useState("");
  const information = (Name,diction) => {
    console.log(typeof(Name));
    setDiseaseName(Name);
    console.log(diseaseName);
    setDisplay1(false);
    setDisplay2(true);
    fetch(`http://127.0.0.1:5000/info`,{
            'method':'POST',
            'headers' : {
            'content-type':'application/json'
      },
      body:JSON.stringify(diction)
    })
    .then(response => response.json())
    .then(link => (setDetails(link)))
    .catch(error => console.log(error))
    details.overview = details.overview.replaceAll("\n","<br/>");
    details.overview = details.overview.replaceAll("\t","&npsp;&npsp;&npsp;&npsp;");
    setStr(details.overview);
  }
 
  // const getinformation = () => {
  //   fetch(`http://127.0.0.1:5000/info`,{
  //           'method':'GET',
  //           'headers' : {
  //           'content-type':'application/json',
  //           'accept': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(link => (setDetails(link)))
  //   .catch(error => console.log(error))
  //   console.log(details)
  // }

  const [one,setOne] = useState(true);
  const [two,setTwo] = useState(false);
  const [three,setThree] = useState(false);
  const [four,setFour] = useState(false);
  const [five,setFive] = useState(false);
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(false);

  const t1 = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
  }
  const t2 = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
    setFive(false);
  }
  const t3 = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
    setFive(false);
  }
  const t4 = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
    setFive(false);
  }
  const t5 = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(true);
  }

  return (
    <>
      <div className='d-left'>
        <div className='distitle'>
          <p>Diseases</p>
          <div className='alpha'>
            <button onClick={() => myFunction('A')}> A </button>
            <button onClick={() => myFunction('B')}> B </button>
            <button onClick={() => myFunction('C')}> C </button>
            <button onClick={() => myFunction('D')}> D </button>
            <button onClick={() => myFunction('E')}> E </button>
            <button onClick={() => myFunction('F')}> F </button>
            <button onClick={() => myFunction('G')}> G </button>
            <button onClick={() => myFunction('H')}> H </button>
            <button onClick={() => myFunction('I')}> I </button>
            <button onClick={() => myFunction('J')}> J </button>
            <button onClick={() => myFunction('K')}> K </button>
            <button onClick={() => myFunction('L')}> L </button>
            <button onClick={() => myFunction('M')}> M </button>
            <button onClick={() => myFunction('N')}> N </button>
            <button onClick={() => myFunction('O')}> O </button>
            <button onClick={() => myFunction('P')}> P </button>
            <button onClick={() => myFunction('Q')}> Q </button>
            <button onClick={() => myFunction('R')}> R </button>
            <button onClick={() => myFunction('S')}> S </button>
            <button onClick={() => myFunction('T')}> T </button>
            <button onClick={() => myFunction('U')}> U </button>
            <button onClick={() => myFunction('V')}> V </button>
            <button onClick={() => myFunction('W')}> W </button>
            <button onClick={() => myFunction('X')}> X </button>
            <button onClick={() => myFunction('Y')}> Y </button>
            <button onClick={() => myFunction('Z')}> Z </button>  
          </div>
        </div>

      </div>
      <div className='d-right'>
        <div className={display1 ? "list-items show" : "list-items"}>
          {toshow.map(key => (
            // console.log(key[0])
            // <Links 
            //   titled={key[0]} 
            //   onClick={
            //     information(key[1])
            //   }
            // />
            <div className='diseasesList' onClick={() => {information(key[0],key[1])}}>{key[0]}</div>
          ))}
        </div>
        <div className={display2 ? "d-center show" : "d-center"}>
          <div className='d-name'>{diseaseName}</div>
            <div className='d-tabs'>
            <div id='intro' className={one ? "active" : ""} onClick={t1}><a href="#">Overview</a></div>
            <div id='symp'className={two ? "active" : ""} onClick={t2}><a href="#">Symptoms</a></div>
            <div id='cause'className={three ? "active" : ""} onClick={t3}><a href="#">Causes</a></div>
            <div id='manage'className={four ? "active" : ""} onClick={t4}><a href="#">Management</a></div>
            <div id='diag'className={five ? "active" : ""} onClick={t5}><a href="#">Diagnosis</a></div>
          </div>
          <div id='d-box'>
          
             <div id="i" className={one ? "tab1 acti" : "tab1"}  >
              {details.overview}
            </div>
            <div id="s" className={two ? "tab2 acti" : "tab2"}>
              {details.symptoms}
            </div>
            <div id="c" className={three ? "tab3 acti" : "tab3"}>
              {details.causes}
            </div>
            <div id="m" className={four ? "tab4 acti" : "tab4"}>
              {details.management}
            </div>
            <div id="d" className={five ? "tab5 acti" : "tab5"}>
              {details.diagnosis}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Diseases
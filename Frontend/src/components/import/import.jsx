import { React, useState } from 'react';
import axios from 'axios';

import styles from './import.module.css'

import importIcon from './import.svg'
import tickMark from './tickmark.svg'
import { isAuthenticated } from '../../helper/helper'

function ImportUI(props) {
  const [apiCallMade, setApiCallMade] = useState(false);
  const [file, setFile] = useState(false);
  const [fileDraged, setDrag] = useState(false);
  const url = process.env.REACT_APP_API;
  const { importVisible, setImportvisible } = props;
  const { renderOnce, setRenderOnce } = props;
  const token = isAuthenticated();


  const fileUpload = async (csv) => {
    const formData = new FormData();
    formData.append('file', csv);

    try {
      if (!apiCallMade) {
        const response = await axios.post(`${url}/contacts`, formData, {
          headers: {
            "Content-Type": 'multipart/form-data',
            "authorization": `${token}`
          },
        });

        setApiCallMade(!apiCallMade);
        console.log(response);
      }
      //console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    console.log(file);

    if (file.type === "text/csv") {



      setDrag(false);

      fileUpload(file);
      setFile(true);
      /////////////////////
      setTimeout(() => {
        setRenderOnce(!renderOnce)
        setImportvisible(!importVisible);
      }, 1500);
      /////////////////////
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDrag(true);

  };
  const handleOverlayDrop = (event) => {
    event.preventDefault();
    setDrag(true);

  };

  const cancelClick = () => {
    setImportvisible(!importVisible);
  }

  return (
    <div className={styles.overlay} onDragOver={handleDragOver} onDrop={handleDrop} >

      {!file ? <div className={fileDraged ? styles.popuoOndrag : styles.popup}  >
        <label htmlFor="choose">
          <img src={importIcon} alt="import icon" className={styles.importIcon} />
        </label>
        <input type="file" id='choose' onChange={handleDrop} onDragOver={handleDragOver} onDrop={handleDrop} />
        <button className={styles.cancelBtn} onClick={cancelClick}>Cancel</button>
      </div>
        :
        <div className={styles.popup} >

          <img src={tickMark} alt="import icon" className={styles.tickMark} />

        </div>}




    </div>
  )
}

export default ImportUI
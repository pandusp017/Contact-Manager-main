import { React, useState } from 'react';
import './delete.css';
import deleteIcon from './delete.svg';
import completed from './tickMark.svg'
import axios from 'axios';
import { isAuthenticated } from '../../helper/helper'


function DeleteUI(props) {
  const [apiCallMade, setApiCallMade] = useState(false);
  const [dlt, setDelete] = useState(false);
  const url = process.env.REACT_APP_API;
  const token = isAuthenticated();


  const { deleteVisible, setDltvisible } = props;
  const { renderOnce, setRenderOnce } = props;
  const { data, setData } = props;
  // console.log(apiCallMade,dlt,url,array);



  const deleteCall = async () => {

    //
    const array = data
      .filter(obj => obj.isChecked === true)
      .map(obj => obj._id);

    console.log(array);

    const config = {
      headers: {
        "Content-Type": "application/json",
        "authorization": `${token}`,
        "ids": array
      }
    };
    try {
      if (!apiCallMade) {
        await axios.delete(`${url}/contacts/delete`, config).then(response => {
          console.log(response.data);
        })
          .catch(error => {
            console.log(error);
          });
        setDelete(!dlt);
        setApiCallMade(true);

        /////////////////////
        setTimeout(() => {
          setRenderOnce(!renderOnce);

          setDltvisible(!deleteVisible);

        }, 1500);
        /////////////////////


      }
      //console.log(response);
    } catch (error) {
      setDelete(!dlt);
      console.error(error);

      /////////////////////
      setTimeout(() => {
        setRenderOnce(!renderOnce);
        setDltvisible(!deleteVisible);

      }, 1500);
      /////////////////////

    }
  };

  const cancel = () => {
    setDltvisible(!deleteVisible);
  }


  return (

    <div className='overlay' >
      {!dlt ?
        <div className='popup'>

          <img src={deleteIcon} alt="delete icon" className='icon' />
          <div className='btns'>
            <button className='delete' onClick={cancel} >Cancel</button>
            <button className='delete' onClick={deleteCall}>Ok</button>
          </div>
        </div>
        :
        <div className='popup'>

          <img src={completed} alt="completed icon" className='icon' />


        </div>
      }
    </div>
  )
}

export default DeleteUI

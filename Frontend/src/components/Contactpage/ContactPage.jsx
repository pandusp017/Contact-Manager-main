import React from 'react'
import { useState, useEffect } from 'react'
import user from './user.svg'
import './ContactPage.css'
import Delete from '../delete/deleteUi'
import ImportUI from '../import/import'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs'
import { MdImportExport } from 'react-icons/md'
import { CiExport } from 'react-icons/ci'
import { TiPencil } from 'react-icons/ti'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RxCrossCircled } from 'react-icons/rx'
import { MdOutlineDashboard, MdOutlineContacts } from 'react-icons/md'
import { isAuthenticated } from '../../helper/helper'
import { Link } from 'react-router-dom'
import { HandleLogout } from '../../helper/helper'

function ContactPage() {

  const [enteredText, setEnteredText] = useState('')
  const [deleteVisible, setDltvisible] = useState(false);
  const [importVisible, setImportvisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headings = ['Name', 'Designation', 'Company', 'Industry', 'Email', ' Phone number', 'Country', 'Action'];
  const [rendertable, setRenderTable] = useState(false);
  const [date, setDate] = useState('Select Date')
  const [renderOnce, setRenderOnce] = useState(false);
  const [isAllchecked, setAllchecked] = useState(false);
  const url = process.env.REACT_APP_API;

  const token = isAuthenticated();
  if(!token){
     <div>Not An Authenticated user</div>
  }
  useEffect(() => {
    setLoading(true);
    fetch(`${url}/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        authorization: `${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        let contacts = res.data.map((item) => ({ ...item, isChecked: false }));

        setData(contacts);
        setAllchecked(false);

        if (res.data.length !== 0) {
          setRenderTable(true);
        }
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [renderOnce]);

  const deleteClick = () => {
    setDltvisible(!deleteVisible)
  }
  const importClick = () => {
    setImportvisible(!importVisible)
  }


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setEnteredText(searchWord);
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setRenderOnce(!renderOnce)
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const cancelDropDown = () => {
    setFilteredData([]);
    setWordEntered("");
  }
  //console.log(data.length);

  const handleAllcheck = async (e) => {
    setAllchecked(!isAllchecked);

    let newContacts = await data.map((obj) =>
      ({ ...obj, isChecked: e.target.checked })
    );
    setData(newContacts);
  }




  const changeChecked = async (contact) => {
    //console.log(data,"hi");
    let newContacts = await data.map((obj) => {
      if (obj._id === contact._id) {
        return { ...obj, isChecked: !contact.isChecked };
      }
      return obj;
    });
    setData(newContacts);
  }


  const individualDlt = async (contact) => {

    let newContacts = await data.map((obj) => {
      if (obj._id === contact._id) {
        return { ...obj, isChecked: true };
      }
      return obj;
    });
    setData(newContacts);

    setDltvisible(true)

  }

  const clearBtn = () => {
    if (enteredText === '') {
      setEnteredText('')
    } else {
      setRenderOnce(!renderOnce)
      setEnteredText('')
    }
  }

  const searchEvent = (val) => {

    let search = val.target.innerText;
    console.log(search);
    setEnteredText(search);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(search.toLowerCase());
    });
    if (newFilter.length === 0) {
      setRenderOnce(!renderOnce)
    }
    setData(newFilter)

  }

  return (
    <>
      {
        deleteVisible &&
        <div><Delete data={data} setData={setData} setRenderOnce={setRenderOnce} renderOnce={renderOnce} setDltvisible={setDltvisible} deleteVisible={deleteVisible}></Delete></div>
      }
      {
        importVisible &&
        <div>
          <ImportUI setRenderOnce={setRenderOnce} renderOnce={renderOnce} setImportvisible={setImportvisible} importVisible={importVisible}></ImportUI>
        </div>
      }
      <div className='parent'>




        <div className='container1'>
          <div>
            <div className='logo'>LOGO</div>
            <ul>
              <li>
                <a href="#" className='dashboardTotalContacts'><i class="ion-bag"></i> <span><MdOutlineDashboard className='md'></MdOutlineDashboard> DashBoard</span></a>
              </li>
              <li>
                <a href="#" className='dashboardTotalContacts'><i class="ion-ios-settings"></i> <span class=""><MdOutlineContacts className='md'></MdOutlineContacts>Total Contacts</span></a>
              </li>
            </ul>
          </div>

          <Link to='/' onClick={()=>{token=HandleLogout()}}>
            <div className='logout' href=''>
              <FiLogOut></FiLogOut> Logout
            </div>
          </Link>

        </div>
        <div className='leftcontainer'>
          <div className='userBar'>
            <div className='mainIcon'>
              <h1>Total Contacts</h1>
            </div>
            <div className='searchBar'>
              <div className='searchDrop'>
                <AiOutlineSearch></AiOutlineSearch>
                <input type={"text"} value={enteredText} className='input-area' placeholder='Search by Email id...' onChange={handleFilter} onBlur={cancelDropDown}></input>
                <RxCrossCircled onClick={clearBtn}></RxCrossCircled>
              </div>

              {filteredData.length !== 0 && (
                <div className="dataResult">
                  {filteredData.slice(0, 15).map((value, key) => {
                    return (
                      <div key={key} className="dataItem" onMouseEnter={searchEvent}>
                        {value.email}
                      </div>
                    );
                  })}

                </div>
              )}
            </div>
            <div className='userDetails'>
              <div className='userImage'>
                <img src={user} alt='user icon'></img>
              </div>
              <div className='userName'>
                <h5>{localStorage.getItem('user').split('@')[0]}</h5>
                <p>user</p></div>
            </div>
          </div>
          <div className="buttons">
            <div className="bttons-left">

              <button className="date"><label htmlFor="date">{date}</label><input type="date" onChange={(e) => {
                if (e.target.value) {
                  setDate(e.target.value)
                } else {
                  setDate("Select Date")
                }
              }} /></button>

              <button className="filter">
                <BsFilter /> Filter |
              </button>
            </div>
            <div className="bttons-right">
              <button className="deletebth" onClick={deleteClick}>
                <AiOutlineDelete />Delete
              </button>
              <button className="import" onClick={importClick}>
                <MdImportExport />Import
              </button>
              <button className="export">
                <CiExport />Export
              </button>
            </div>
          </div>

          {/* Write in this div the table view code */}
          <div className="Overflow">
            {
              loading ? (
                <div className="loadingContainer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img>
                </div>
              ) : (

                <table>
                  <thead>
                    <tr className='headings'>
                      {
                        headings.map((heading, index) => {
                          return (

                            heading === "Name" ? (
                              <td className='tableTd'>
                                <div className="allCheck">
                                  <input type="checkbox" checked={isAllchecked} onChange={(e) => handleAllcheck(e)} />
                                  <p className="nname">{heading}</p>
                                </div>
                              </td>
                            ) : (
                              <td>
                                {heading}
                              </td>
                            )

                          )
                        })
                      }
                    </tr>
                  </thead>
                  {rendertable &&
                    <tbody >

                      {
                        data.map((contact, index) => {
                          return (
                            <tr className={`${index % 2 === 0 ? "odd" : "even"}`}>
                              <td >
                                <div className='nameContainer'>
                                  <input type="checkbox" checked={contact.isChecked} onChange={(e) => { changeChecked(contact) }} />
                                  <p title={contact.name} className="name1">{contact.name}</p>
                                </div>
                              </td>
                              <td title={contact.designation}>{contact.designation}</td>
                              <td title={contact.company}>{contact.company}</td>
                              <td title={contact.industry}>{contact.industry}</td>
                              <td><div class="tooltip">
                                <a href={`mailto:${contact.email}`} target='_blank'>{contact.email}
                                  <span class="tooltip-text">{contact.email}</span>
                                </a>
                              </div>

                              </td>
                              <td title={contact.phone}>{contact.phone}</td>
                              <td title={contact.country}>{contact.country}</td>
                              <td>
                                <div className='buttonContainer1'>
                                  {/* <button className='editbutton'>Edit</button> */}
                                  <TiPencil></TiPencil>
                                  {/* <button className='deletebutton'>Delete</button> */}

                                  <RiDeleteBin6Line onClick={(e) => individualDlt(contact)} ></RiDeleteBin6Line>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  }
                </table>
              )
            }

          </div>

        </div>


      </div>
    </>
  )
}

export default ContactPage

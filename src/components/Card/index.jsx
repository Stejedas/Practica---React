import react from 'react'
import './style.css'
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';

function Card(props) {

  const [dataState, uploadDataState] = useContext(DataContext);

  const handlerdelete = e => {

    console.log(props.info.num)
    let index = dataState.findIndex(element => element.num === props.info.num)
    console.log(index);
    dataState.splice(index, 1);
    uploadDataState([...dataState])
  }

  const changeStatus = e => {
    console.log(props.info)

    console.log(props.info.num)
    if (props.info.status === 'to_do') {
      dataState.every(element => element.num === props.info.num ? element.status = 'in_progress' : element.status = element.status)

      uploadDataState([...dataState])
      console.log(dataState)
      console.log('hola')
    } else if (props.info.status === 'in_progress') {
      dataState.every(element => element.num === props.info.num ? element.status = 'done' : element.status = element.status)
      uploadDataState([...dataState])
      console.log('hola')
    }
    console.log(dataState)



  }


  return (
    <react.Fragment>

      <div className='container-note'>
      <div className='firstPart_orientation'>
        <button className={props?.info.status} onClick={changeStatus}><div className='circleStatus_white'></div></button>

        <h4 className='title-note'> {props?.info.title}</h4>
        </div>
        <div className='secondPart_orientation'>
        <p className='subtitle-note'>#{props?.info.fecha}</p>
        <button className='delete-note' onClick={handlerdelete} >&#128465; </button>
        </div>
      </div>

    </react.Fragment>



  )
}

export default Card
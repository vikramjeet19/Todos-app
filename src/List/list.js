import React from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = props => {
  return (
    <div>
    <ul className='list'>
    <h2 style={{textAlign:"center"}}>TASKS</h2> <hr/>
      {
        props.items.map((item, index) => <h3 key={index}> {item} <FontAwesomeIcon onClick={() => 
          props.deleteHandler(index)} style={{ marginLeft: 50 }} icon="times-circle" />
          <FontAwesomeIcon onClick={() =>
           props.editHandler(index)} style={{ marginLeft: 10 }} icon="edit" /></h3>)
      }
    </ul>
    </ div>
  )
};

export default List;
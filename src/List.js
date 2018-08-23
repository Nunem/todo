import React from 'react';


const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index} onClick={props.click.bind(props,index)} >{item}</li>)

        }
  </ul>



);



export default List;

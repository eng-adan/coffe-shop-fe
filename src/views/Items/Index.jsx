import React, { useEffect, useState } from 'react'
import GetItems from './helpers/getItems';
import Item from './components/Item';

export default function Index() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    GetItems().then(response => {
      setItems(response.data)
    });
  }, []);
  return (
    <div className='row'>{items?.map(item => <Item key={item.id} item={item} />)}</div>
  )
}

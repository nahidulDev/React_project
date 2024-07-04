import React from 'react'

const ListItems = ({classLinkName,linkName,listName}) => {
  return  <li className={`${classLinkName}`}><a href='#' className={`${linkName}`}>{listName}</a></li>
  
}

export default ListItems
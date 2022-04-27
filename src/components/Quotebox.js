import React from 'react'

export default function Quotebox(props) {
  return(
    <div id = 'quote'>
      <div className = 'decor top-decor' />
      <div id = 'text-box'>
        <div id = 'text'>{props.quotetxt}</div>
        <div id = 'author'>- {props.authortxt}</div>
      </div>
      <div className = 'decor bottom-decor' />
    </div>
  )  
}
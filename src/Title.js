import React from 'react'

export default function Title(props) {
  return (
    <div>
      <h1 style={{backgroundColor: 'orange',borderBottom:'5px solid red',textAlign:'center '}}>
        {props.mainTitle}
        {props.subTitle}
      </h1> 
    </div>
  )
}
/*
export default function Title(mainTitle,subTitle) {
  return (
    <div>
      <h1 style={{backgroundColor: 'orange',borderBottom:'5px solid red '}}>
        {mainTitle}
        {subTitle}
      </h1> 
    </div>
  )
}
*/

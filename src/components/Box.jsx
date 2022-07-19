import React from 'react'

import "./Box.css"

export const Box = ({value, boardClick}) => {
    const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={boardClick}>{value}</button>
  )
}

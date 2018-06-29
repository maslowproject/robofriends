import React from "react"

const Card = (props) => {
  const { name, email, username} = props
  return (
    <div className="tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5">
      <img alt="a robot" src={`https://robohash.org/${username}?set=set2&size=200x200`} />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
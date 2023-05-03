import React from 'react';

const CatList = ({ catPics }) => {
  console.log(catPics, "catlist")
  return (
    <>CatList
      { catPics.map((cat) => {
      return <a href={cat.source_url} key={cat.id}> <img src={cat.url} alt='cat' /></a>
      })}
    </>
  )
}

export default CatList;
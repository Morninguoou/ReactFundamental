import React from 'react'


const PictureCard = (props)=>{
    const {id,imgSrc,createBy,likeCount,commentCount} = props
    return(
        <div style={{color:"blue"}}>
                {createBy}
                {likeCount}
        </div>
    )
}

export default PictureCard

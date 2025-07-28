import React from 'react'
import AA from'./AA.jpg';
import BB from'./BB.jpg';
import CC from'./CC.jpg';
import DD from'./DD.jpg';
import'./Work.css';

const Work = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details, 
          ensuring every design element is crafted with precision and 
          care to deliver an exceptional user experience.</span>
        <div className='worksImgs'>
            <img src={AA} alt="worksImg" className="worksImg" />
            <img src={BB} alt="worksImg" className="worksImg" />
        </div>
        <div className='worksImgs worksImgsRow2'>
            <img src={CC} alt="worksImg" className="worksImg" />
            <img src={DD} alt="worksImg" className="worksImg" />
        </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work

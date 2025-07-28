import React from 'react'
import a from'./a.jpeg';
import b from'./b.jpeg';
import e from'./e.jpg';
import f from'./f.jpg';
import'./Work.css';

const Work = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and</span>
        <div className='worksImgs'>
            <img src={a} alt="worksImg" className="worksImg" />
            <img src={b} alt="worksImg" className="worksImg" />
        </div>
        <div className='worksImgs worksImgsRow2'>
            <img src={e} alt="worksImg" className="worksImg" />
            <img src={f} alt="worksImg" className="worksImg" />
        </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work

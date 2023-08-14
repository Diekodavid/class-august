import React from 'react';
import './App.css';

const Fourth = () => {
    return(
        <>
          <div className='gobe flex'>
            <div className='w-3/5'>
              <img className='joym' src={require("./image/sqi-graduate1.jpg")} alt="" />
            </div>
            <div className='w-2/5'>
                <h2 className='single'>Making Africa a Tech Continent</h2>
                <p className='doler'>We focus on quality teaching, learning and training to the globally acceptable productivity standard in accordance with the requirements of the industry, for which necessary research and preparation of courses are ensured to make industry-ready professionals.</p>
                <p className='doler'>SQI College of ICT is closely watching the interaction of industry and academia, getting feedback from our industry partners to provide the needed training while concentrating to contribute industry needed professionals in a very flexible study structure.</p>
            </div>
          </div>
        </>
    )
}
export default Fourth
import React from 'react';
import defaultImg from "../noImage.jpg"

const Newsitem = (props) => {
    
    let { mode, title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className='card' style={{ width: '18rem', backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
          <img src={!imageUrl?defaultImg:imageUrl} className='card-img-top' style={{ height: '150px', objectFit: 'cover' }} alt='...'/>
          <div className='card-body' style={{border: `1px solid ${mode==="light"? 'black' : 'white'}`}}>
            <h5 className='card-title'>{title}...
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%'}}>
                Source: {source}
              </span>
            </h5>
            <p className='card-text'>{description}...</p>
            <p className='card-text'><small style={{color: mode === 'light' ? 'grey' : '#bfbbbb'}}>By {!author? 'Unknown': author} on {new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }).format(new Date(date))}</small></p>
            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;

import React from 'react';
import './demo.scss';

const mainColor = () => {
  return (
    <div
      className="qnet-row"
      style={{ marginLeft: '-8px', marginRight: '-8px' }}
    >
      <div
        className="qnet-col qnet-col-span-8"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#2d8cf0' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Primary</div>
            <div className="demo-color-card-desc">#2d8cf0</div>
          </div>
        </div>
      </div>
      <div
        className="qnet-col qnet-col-span-8"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#5cadff' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Light Primary</div>
            <div className="demo-color-card-desc">#5cadff</div>
          </div>
        </div>
      </div>
      <div
        className="qnet-col qnet-col-span-8"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#2b85e4' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Dark Primary</div>
            <div className="demo-color-card-desc">#2b85e4</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default mainColor;

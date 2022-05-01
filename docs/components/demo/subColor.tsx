import React from 'react';
import './demo.scss';

const subColor = () => {
  return (
    <div
      className="qnet-row"
      style={{ marginLeft: '-8px', marginRight: '-8px' }}
    >
      <div
        className="qnet-col qnet-col-span-6"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#2db7f5' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Info</div>
            <div className="demo-color-card-desc">#2db7f5</div>
          </div>
        </div>
      </div>
      <div
        className="qnet-col qnet-col-span-6"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#19be6b' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Success</div>
            <div className="demo-color-card-desc">#19be6b</div>
          </div>
        </div>
      </div>
      <div
        className="qnet-col qnet-col-span-6"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#ff9900' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Warning</div>
            <div className="demo-color-card-desc">#ff9900</div>
          </div>
        </div>
      </div>
      <div
        className="qnet-col qnet-col-span-6"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <div className="demo-color-card" style={{ backgroundColor: '#ed4014' }}>
          <div className="demo-color-card-body">
            <div className="demo-color-card-name">Danger</div>
            <div className="demo-color-card-desc">#ed4014</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default subColor;

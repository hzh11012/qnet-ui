import React from 'react';
import '../../../src/styles/index.scss';

const colors = [
  {
    title: '标题 Title',
    color: '#17233d'
  },
  {
    title: '正文 Content',
    color: '#515a6e'
  },
  {
    title: '辅助/图标 Sub Color',
    color: '#808695'
  },
  {
    title: '失效 Disabled',
    color: '#c5c8ce'
  }
];
const colors1 = [
  {
    title: '边框 Border',
    color: '#dcdee2'
  },
  {
    title: '分割线 Divider',
    color: '#e8eaec'
  },
  {
    title: '背景 Background',
    color: '#f8f8f9'
  }
];
const subColor = () => {
  return (
    <>
      <div
        className="qnet-row"
        style={{
          marginLeft: '-8px',
          marginRight: '-8px',
          marginBottom: '16px'
        }}
      >
        {colors.map(item => (
          <div
            key={item.title}
            className="qnet-col qnet-col-span-6"
            style={{ paddingLeft: '8px', paddingRight: '8px' }}
          >
            <div
              className="demo-color-card"
              style={{ backgroundColor: item.color }}
            >
              <div className="demo-color-card-body">
                <div className="demo-color-card-name">{item.title}</div>
                <div className="demo-color-card-desc">{item.color}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="qnet-row"
        style={{ marginLeft: '-8px', marginRight: '-8px' }}
      >
        {colors1.map(item => (
          <div
            key={item.title}
            className="qnet-col qnet-col-span-6"
            style={{ paddingLeft: '8px', paddingRight: '8px' }}
          >
            <div
              className="demo-color-card"
              style={{ backgroundColor: item.color }}
            >
              <div className="demo-color-card-body">
                <div className="demo-color-card-name dark">{item.title}</div>
                <div className="demo-color-card-desc dark">{item.color}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default subColor;

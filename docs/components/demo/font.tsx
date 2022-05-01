import React from 'react';
import './demo.scss';

const tables = [
  {
    cnFont: '主标题',
    exp: '我是标题',
    weightFont: '加粗',
    weight: 'bold',
    color: '#464c5b',
    size: '16px'
  },
  {
    cnFont: '次级标题',
    exp: '我是标题',
    weightFont: '加粗',
    weight: 'bold',
    color: '#464c5b',
    size: '14px'
  },
  {
    cnFont: '小标题',
    exp: '我是标题',
    weightFont: '加粗',
    weight: 'bold',
    color: '#464c5b',
    size: '12px'
  },
  {
    cnFont: '正文',
    exp: '我是正文',
    weightFont: '默认',
    color: '#657180',
    size: '12px'
  },
  {
    cnFont: '辅助文字',
    exp: '我是辅助文字',
    weightFont: '默认',
    color: '#9ea7b4',
    size: '12px'
  },
  {
    cnFont: '失效文字',
    exp: '我是失效文字',
    weightFont: '默认',
    color: '#c3cbd6',
    size: '12px'
  },
  {
    cnFont: '链接文字',
    exp: '我是链接文字',
    weightFont: '默认',
    color: '#3399ff',
    size: '12px',
    isLink: true
  }
];

const tables1 = [
  {
    enFont: 'Main Head',
    exp: 'This is an example',
    weight: 'bold',
    color: '#464c5b',
    size: '16px'
  },
  {
    enFont: 'Sub Head',
    exp: 'This is an example',
    weight: 'bold',
    color: '#464c5b',
    size: '14px'
  },
  {
    enFont: 'Small Head',
    exp: 'This is an example',
    weight: 'bold',
    color: '#464c5b',
    size: '12px'
  },
  {
    enFont: 'Text',
    exp: 'This is an example',
    weight: 'normal',
    color: '#657180',
    size: '12px'
  },
  {
    enFont: 'Help',
    exp: 'This is an example',
    weight: 'normal',
    color: '#9ea7b4',
    size: '12px'
  },
  {
    enFont: 'Disabled',
    exp: 'This is an example',
    weight: 'normal',
    color: '#c3cbd6',
    size: '12px'
  },
  {
    enFont: 'Link',
    exp: 'This is an example',
    weight: 'normal',
    color: '#3399ff',
    size: '12px',
    isLink: true
  }
];

const fontTable = () => {
  return (
    <div
      className="qnet-row"
      style={{ marginLeft: '-8px', marginRight: '-8px' }}
    >
      <div
        className="qnet-col qnet-col-span-12"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <table className="demo-color-table">
          <thead className="demo-color-table-thead">
            <tr className="demo-color-table-tr">
              <th className="demo-color-table-th">中文字体</th>
              <th className="demo-color-table-th">示例</th>
              <th className="demo-color-table-th">粗细</th>
              <th className="demo-color-table-th">颜色</th>
              <th className="demo-color-table-th">字号</th>
            </tr>
          </thead>
          <tbody className="demo-color-tbody">
            {tables.map(item => (
              <tr key={item.cnFont} className="demo-color-table-tr">
                <td className="demo-color-table-td">{item.cnFont}</td>
                <td className="demo-color-table-td">
                  {item.isLink ? (
                    <a href="#/components/font">{item.exp}</a>
                  ) : (
                    <span
                      style={{
                        fontSize: item.size,
                        fontWeight: item.weight,
                        color: item.color
                      }}
                    >
                      {item.exp}
                    </span>
                  )}
                </td>
                <td className="demo-color-table-td">{item.weightFont}</td>
                <td className="demo-color-table-td">{item.color}</td>
                <td className="demo-color-table-td">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="qnet-col qnet-col-span-12"
        style={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <table className="demo-color-table">
          <thead className="demo-color-table-thead">
            <tr className="demo-color-table-tr">
              <th className="demo-color-table-th">英文字体</th>
              <th className="demo-color-table-th">示例</th>
              <th className="demo-color-table-th">粗细</th>
              <th className="demo-color-table-th">颜色</th>
              <th className="demo-color-table-th">字号</th>
            </tr>
          </thead>
          <tbody className="demo-color-tbody">
            {tables1.map(item => (
              <tr key={item.enFont} className="demo-color-table-tr">
                <td className="demo-color-table-td">{item.enFont}</td>
                <td className="demo-color-table-td">
                  {item.isLink ? (
                    <a href="#/components/font">{item.exp}</a>
                  ) : (
                    <span
                      style={{
                        fontSize: item.size,
                        fontWeight: item.weight,
                        color: item.color
                      }}
                    >
                      {item.exp}
                    </span>
                  )}
                </td>
                <td className="demo-color-table-td">{item.weight}</td>
                <td className="demo-color-table-td">{item.color}</td>
                <td className="demo-color-table-td">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default fontTable;

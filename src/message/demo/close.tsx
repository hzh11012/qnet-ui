import React from 'react';
import { Message } from 'qnet-ui';
const style = {
  display: 'inline-block',
  padding: '8px 14px',
  border: '1px solid #d9d9d9',
  boxShadow: '0 2px #00000004',
  borderRadius: '2px',
  cursor: 'pointer'
};
const message = () => {
  const click = () => {
    Message.info({
      key: 'info',
      content: '可手动关闭的提示',
      duration: 10000,
      closable: true
    });
  };
  return (
    <div style={style} onClick={click}>
      显示一个可关闭的提示
    </div>
  );
};
export default message;

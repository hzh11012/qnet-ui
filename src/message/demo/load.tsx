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
    const msg = Message.loading({
      key: 'loading',
      content: '正在加载中...',
      duration: 0
    });
    setTimeout(msg, 500);
  };
  return (
    <div style={style} onClick={click}>
      显示加载中...
    </div>
  );
};
export default message;

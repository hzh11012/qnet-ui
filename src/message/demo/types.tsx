import React from 'react';
import { Message } from 'qnet-ui';
const style = {
  display: 'inline-block',
  padding: '8px 14px',
  border: '1px solid #d9d9d9',
  boxShadow: '0 2px #00000004',
  borderRadius: '2px',
  cursor: 'pointer',
  marginRight: '8px'
};
const message = () => {
  const clickSuccess = () => {
    Message.success({
      key: 'success',
      content: '这是一条成功的提示'
    });
  };
  const clickWarning = () => {
    Message.warning({
      key: 'warning',
      content: '这是一条警告的提示'
    });
  };
  const clickError = () => {
    Message.error({
      key: 'error',
      content: '对方不想说话，并且向你抛出了一个异常'
    });
  };
  return (
    <>
      <div style={style} onClick={clickSuccess}>
        显示成功提示
      </div>
      <div style={style} onClick={clickWarning}>
        显示警告提示
      </div>
      <div style={style} onClick={clickError}>
        显示错误提示
      </div>
    </>
  );
};
export default message;

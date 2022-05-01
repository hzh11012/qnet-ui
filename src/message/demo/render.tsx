import React from 'react';
import { Message, Icon } from 'qnet-ui';
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
      render: (
        <div>
          <Icon type="ios-code" />
          这是自定义的内容
        </div>
      )
    });
  };
  return (
    <div style={style} onClick={click}>
      显示自定义内容
    </div>
  );
};
export default message;

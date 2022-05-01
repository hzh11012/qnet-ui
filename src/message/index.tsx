import React, { useEffect, useState } from 'react';
import t from 'prop-types';
import { Icon } from '../index';
import ReactDOM from 'react-dom/client';
import classnames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export type MessageType = 'success' | 'info' | 'warning' | 'error' | 'loading';

export interface MessageProps {
  config: MessageConfig;
}

export interface MessageConfig {
  /**
   * @description   Message 类型
   */
  type?: MessageType;
  /**
   * @description   提示内容
   */
  content?: string;
  /**
   * @description   自定义图标
   */
  icon?: string;
  /**
   * @description   自动关闭的延时
   * @default       '3'
   */
  duration?: number;
  /**
   * @description   点击 message 时触发的回调函数
   */
  onClick?: () => void;
  /**
   * @description   关闭时的回调
   */
  onClose?: () => void;
  /**
   * @description   是否显示关闭按钮
   * @default       'false'
   */
  closable?: boolean;
  /**
   * @description   自定义描述内容
   */
  render?: React.ReactNode;
  /**
   * @description   当前提示的唯一标志
   */
  key: string;
}

export interface MessageApi {
  info: (config: MessageConfig) => void;
  success: (config: MessageConfig) => void;
  warning: (config: MessageConfig) => void;
  error: (config: MessageConfig) => void;
  loading: (config: MessageConfig) => void;
}

const Message: React.FC<MessageProps> = ({ config }) => {
  const renderIcon = (type: MessageType, icon: string) => {
    let messageIcon: string;
    let color: string;
    switch (type) {
      case 'success':
        messageIcon = 'md-checkmark-circle';
        color = '#19be6b';
        break;
      case 'warning':
        messageIcon = 'md-information-circle';
        color = '#ff9900';
        break;
      case 'error':
        messageIcon = 'md-close-circle';
        color = '#ed4014';
        break;
      case 'loading':
        messageIcon = 'md-refresh-circle';
        color = '#e6ebf1';
        break;
      case 'info':
        messageIcon = 'md-information-circle';
        color = '#2db7f5';
        break;
    }
    if (icon) {
      messageIcon = icon;
    }
    return <Icon type={messageIcon} size="18" color={color}></Icon>;
  };
  const {
    type = 'info',
    content = '',
    closable = false,
    icon = '',
    render
  } = config;
  return (
    <div className={classnames('qnet-message')}>
      <div className={classnames('qnet-message-content')}>
        <div className={classnames('qnet-message-content-text')}>
          {render ? (
            render
          ) : (
            <>
              <div className={classnames('qnet-message-icon')}>
                {renderIcon(type, icon)}
              </div>
              <div className={classnames('qnet-message-text')}>{content}</div>
            </>
          )}
          {closable && (
            <div className={classnames('qnet-message-close')}>
              <Icon
                type="md-close"
                size="18"
                onClick={() => removeMessage(config)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  config: t.any.isRequired
};

let addMessage: (message: MessageConfig) => void;
let removeMessage: (message: MessageConfig) => void;
const MessageContainer = () => {
  const [messages, setMessages] = useState<MessageConfig[]>([]);
  const maxCount = 10;
  const getMessageKey = (message: MessageConfig) => {
    return `MESSAGE_${new Date().getTime()}_${message.key}_${message.content}`;
  };

  removeMessage = ({ key, onClose }) => {
    onClose && onClose();
    setMessages(prevMessages =>
      prevMessages.filter(({ key: itemKey }) => key !== itemKey)
    );
  };

  addMessage = message => {
    const { onClick, duration = 3000 } = message;
    onClick && onClick();
    const key = getMessageKey(message);
    setMessages(prevMessages => [...prevMessages, { ...message, key }]);
    if (duration !== 0) {
      return setTimeout(() => {
        removeMessage({ ...message, key });
      }, duration);
    }
    return (() => {
      return () => {
        removeMessage({ ...message, key });
      };
    })();
  };

  useEffect(() => {
    if (messages.length > maxCount) {
      const [firstNotice] = messages;
      removeMessage(firstNotice);
    }
  }, [messages]);

  return (
    <TransitionGroup style={{ display: 'flex', flexDirection: 'column' }}>
      {messages.map(config => (
        <CSSTransition
          timeout={200}
          in
          key={config.key}
          classNames="slide-in-top"
        >
          <Message key={config.key} config={config} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const api: MessageApi = {
  success: (config: MessageConfig) => {
    const { content, icon, duration, closable, render, key, onClick, onClose } =
      config;
    addMessage({
      content,
      icon,
      duration,
      closable,
      render,
      onClick,
      onClose,
      key,
      type: 'success'
    });
  },
  info: (config: MessageConfig) => {
    const { content, icon, duration, closable, render, key, onClick, onClose } =
      config;
    addMessage({
      content,
      icon,
      duration,
      closable,
      render,
      onClick,
      onClose,
      key,
      type: 'info'
    });
  },
  warning: (config: MessageConfig) => {
    const { content, icon, duration, closable, render, key, onClick, onClose } =
      config;
    addMessage({
      content,
      icon,
      duration,
      closable,
      render,
      onClick,
      onClose,
      key,
      type: 'warning'
    });
  },
  error: (config: MessageConfig) => {
    const { content, icon, duration, closable, render, key, onClick, onClose } =
      config;
    addMessage({
      content,
      icon,
      duration,
      closable,
      render,
      onClick,
      onClose,
      key,
      type: 'error'
    });
  },
  loading: (config: MessageConfig) => {
    const { content, icon, duration, closable, render, key, onClick, onClose } =
      config;
    return addMessage({
      content,
      icon,
      duration,
      closable,
      render,
      onClick,
      onClose,
      key,
      type: 'loading'
    });
  }
};

let el = document.querySelector('#qnet-message-wrapper');
if (!el) {
  el = document.createElement('div');
  el.className = classnames('qnet-message-wrapper');
  el.id = 'qnet-message-wrapper';
  document.body.append(el);
}
ReactDOM.createRoot(el).render(<MessageContainer />);

export default api;

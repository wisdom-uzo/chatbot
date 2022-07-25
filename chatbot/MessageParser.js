import React from 'react';


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes('hello') || 
        lowerCaseMessage.includes('comrade')) {
        actions.handleHello();
    }  

    if (lowerCaseMessage.includes('dog')) {
        actions.handleDog();
    }

    if (lowerCaseMessage.includes('learn') || 
        lowerCaseMessage.includes('course')) {
      actions.handlelearning();
    }

    if (lowerCaseMessage.includes('Javascript') || 
        lowerCaseMessage.includes('Javascript')) {
      actions.handleJavascriptList();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
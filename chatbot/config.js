import { createChatBotMessage } from 'react-chatbot-kit';
import {DogPicture, LearningOptions, LinkList} from '../components'


const botName = 'comrade';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm your fellow ${botName}`)],
  // initialMessages: [
  //   createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
  //     widget: "learningOptions",
  //   }),
  // ],
  botName: botName,
  widgets: [
    {
      widgetName: 'LearningOptions',
      widgetFunc: (props) => <LearningOptions {...props} />
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2, 
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
    },
    },
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
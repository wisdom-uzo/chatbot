import Head from 'next/head'
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
//import 'react-chatbot-kit/build/main.css';
import { config, ActionProvider, MessageParser } from '../chatbot'


export default function Home() {

  const [showBot, toggleBot] = useState(false);

  // const saveMessages = (messages, HTMLString) => {
  //   localStorage.setItem('chat_messages', JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem('chat_messages'));
  //   return messages;
  // };



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="dev_wiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-1 justify-center grid-flow-row mx-5'>
        
          <Chatbot
            styles={{width:'10%', backgroundColor:"red"}}
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
       
       
    
      
      </main>

      <footer >
       
      </footer>
    </div>
  )
}

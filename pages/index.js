import Head from 'next/head'
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
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

      <main className='flex justify-center'>
        <div className="shadow-lg border border-green-500 ">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
       
    
      
      </main>

      <footer >
       
      </footer>
    </div>
  )
}

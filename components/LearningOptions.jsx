import React from 'react'

const LearningOptions = ({actionProvider}) => {

 

    const options = [
        { text: "Javascript", 
           handler: () => actionProvider.handleJavascriptList(), 
           id: 1 },
        { text: "Data visualization", handler: () => {}, id: 2 },
        { text: "APIs", handler: () => {}, id: 3 },
        { text: "Security", handler: () => {}, id: 4 },
        { text: "Interview prep", handler: () => {}, id: 5 },
      ];

      const optionsMarkup = options.map((option) => (
        <button
          className=" p-[0.5rem] rounded-md bg-transparent border-blue-700 border m-1"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));



  return (
    <div className="flex justify-start flex-wrap">{optionsMarkup}</div>
  )
}

export default LearningOptions
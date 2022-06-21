import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [note, setNote] = React.useState([]);

  const gettingData = (data) => {
    setNote((previous) => {
      return [...previous, data];
    });
  };

  const clickHandeler=(id)=>{
 setNote(previous=>{
   return previous.filter(element => {
     return previous.indexOf(element) !== id
   })
 })
  }

  return (
    <div>
      <Header  />
      <CreateArea gettingData={gettingData} />
      {note.map((element,index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            onClick={clickHandeler}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

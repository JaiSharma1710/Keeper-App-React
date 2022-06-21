import React, { useRef } from "react";

function CreateArea(props) {
  let titleRef = useRef();
  let contentRef = useRef();

  const submitHandeler = (event) => {
    event.preventDefault();
    let mainTitle = titleRef.current.value;
    let mainContent = contentRef.current.value;

    props.gettingData({ title: mainTitle, content: mainContent });

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandeler}>
        <input ref={titleRef} name="title" placeholder="Title" />
        <textarea
          ref={contentRef}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

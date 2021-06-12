import React from "react";
import { useState , useEffect} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const handleClick = (name) => {
    console.log("hello there " + name);
  };

  const handleClickAgain = (eii) => {
    console.log("Hello " + parseInt(eii) * 2);
  };
  const yo = (e) => {
    console.log(parseInt(e.target.value) * 2);
  };

  const [name, setname] = useState();
  const [age, setage] = useState();
  const [num, setnum] = useState();
  const [nam, setnam]= useState("shawn");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, num);
  };

  const [blogs, setblogs] = useState([
    {
      title: "My new Website",
      body: "lorem ipsum ...",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "lorem ipsum ...",
      author: "Yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum ...",
      author: "Mario",
      id: 3,
    },
  ]);


  //Deletion of component of the array with help of id
  const handleDelete = (id) => {
     const newblogs = blogs.filter((bl) => (bl.id !== id))
     setblogs(newblogs);
  }

  useEffect(()=>{
      console.log('Use effect ran');
  }, [nam]);

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      {/* // So here we wrap the handleClick function inside a empty function  with no return value. So () = > handleClick('mario') */}
      {/* Onclick cant call handleClick('mario'). This is run the function instantly without any click event.
           So the handleClick function with return value of mario as string is wrapped inside the () */}
      <button
        onClick={() => {
          handleClick("mario");
        }}
      >
        Click me
      </button>

      {/* So onClick also generate event. We can access them by passing the return object e inside the null function which wraps the
           handleClickAgain function which it wraps */}

      <button value="24" onClick={(e) => handleClickAgain(e.target.value)}>
        Click me again
      </button>

      <button value="5" onClick={yo}>
        Try
      </button>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setname(e.target.value)}
        ></input>
        <input
          type="Number"
          min="1"
          max="18"
          value={age}
          placeholder="Age"
          required
          onChange={(e) => setage(e.target.value)}
        ></input>
        <input type="date" onChange={(e) => setnum(e.target.value)}></input>
        <button type="submit">Enter</button>
      </form>
    

      
      <Bloglist blogss={blogs} title='All blogs' handleDeletee={handleDelete}/>
      {/* <Bloglist blogss={blogs.filter((bl)=>bl.author === 'Mario')} title="Mario's Blog"/> */}
      <button onClick={() => setnam("max") }>Click</button>
      <p>{nam}</p>
    </div>
  );
};

export default Home;

import { Link, useLoaderData, Form} from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData()

  //styles
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
  return (
    <div style={div}>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <div>
        <h2> Update </h2>
        <Form action={`/update/${post.id}`} method="post">
          <input 
          type="text" 
          name="title" 
          placeholder="title" 
          defaultValue={post.title}/>
          <input 
          type="text" 
          name="date" 
          placeholder="date"
          defaultValue={post.date}/>
          <input 
          type="text" 
          name="time" 
          placeholder="time"
          defaultValue={post.time}/>
          <input 
          type="text" 
          name="location" 
          placeholder="location"
          defaultValue={post.location}/>
          <input 
          type="text" 
          name="notes" 
          placeholder="notes"
          defaultValue={post.notes}/>
          <button>Update</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete</button>
        </Form>
      </div>
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
  };
  
  export default Show;
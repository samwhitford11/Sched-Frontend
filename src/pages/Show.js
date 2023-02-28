import { Link, useLoaderData, Form} from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData()

  //styles
  const div = {
    textAlign: "center",
    width: "80%",
    margin: "px auto",
  };
  return (
    <div style={div}>
      <h1>{post.title}</h1>
      <div>
        <h2> Update </h2>
        <Form className="showContainer" action={`/update/${post.id}`} method="post">
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
          class="textBox"
          type="text" 
          name="notes" 
          placeholder="notes"
          defaultValue={post.notes}/>
          <button class="button-27">Update</button>
        </Form>
        <Form class="delete"action={`/delete/${post.id}`} method="post">
            <button class="button-27">Delete</button>
        </Form>
      </div>
      <Link to="/">
        <button class="button-27">Return</button>
      </Link>
    </div>
  );
  };
  
  export default Show;
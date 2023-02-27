import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
const Create = (props) => {
    const schedules = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
      <h2>Add to Schedule</h2>
      <Form action="/create" method="post">
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="date" placeholder="MM/DD/YY"/>
          <input type="text" name="time" placeholder="Time (AM/PM)"/>
          <button>Schedule</button>
      </Form>
    </div>
    {schedules.map(post => <Post key={post.id} post={post}/>)}</>
  };
  
  export default Create;
import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
const Index = (props) => {
    const schedules = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
      <h2>Add to Schedule</h2>
      <Form action="/create" method="post">
          <input type="text" name="title" placeholder="tite"/>
          <input type="text" name="date" placeholder="MM/DD/YY"/>
          <input type="text" name="time" placeholder="time (AM/PM)"/>
          <button>Schedule New Item</button>
      </Form>
    </div>
    {schedules.map(post => <Post key={post.id} post={post}/>)};</>
  };
  
  export default Index;
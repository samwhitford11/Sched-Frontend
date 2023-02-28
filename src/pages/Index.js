import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
const Index = (props) => {
    const schedules = useLoaderData()
    

    return <>
    <div style={{textAlign: "center", margin: "20px"}}>
      <h1>Add to Schedule</h1>
      <Form className="indexForm" action="/create" method="post">
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="date" placeholder="MM/DD/YY"/>
          <input type="text" name="time" placeholder="Time (AM/PM)"/>
          <input type="text" name="location" placeholder="Location"/>
          <input class="textBox" type="text" name="notes" placeholder="Notes"/>
          <button class="button-27">Schedule</button>
        </Form>
        
    </div>
    <h1>My SChed</h1>
    {schedules.map(post => <Post key={post.id} post={post}/>)}</>
  };
  
  export default Index;
import { Link } from "react-router-dom";

const Post = (props) => {
    const post = props.post;
  
    // style
    const div = {
      textAlign: "center",
      border: "3px solid",
      margin: "10px auto",
      width: "80%",
    };
  
    return (
      <div className="schedContainer">
        <div style={div}>
          <Link to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <h4>{post.date}</h4>
        </div>
      </div>
    );
  };
  
  export default Post;

//   title: formData.get("title"),
//   date: formData.get("date"),
//   time: formData.get("time"),
//   location: formData.get("location"),
//   notes: formData.get("notes"),
// }
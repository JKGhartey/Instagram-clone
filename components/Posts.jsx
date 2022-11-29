import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const POSTS = [
  {
    id: "123",
    username: "Jerome Ghartey",
    userImg:
      "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
    img: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    caption: "Subscribe and join me",
  },
  {
    id: "1283",
    username: "Richard Burgeson",
    userImg:
      "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
    img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/apps-to-change-background-smartphone-table.jpeg",
    caption: "Subscribe and join me",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  // console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;

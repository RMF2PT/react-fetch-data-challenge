import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState([] as Post[]);
  const [users, setUsers] = useState([] as User[]);
  const [comments, setComments] = useState([] as Comment[]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally");
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <nav>
        <button>users</button>
        <button>posts</button>
        <button>comments</button>
      </nav>
      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.id}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

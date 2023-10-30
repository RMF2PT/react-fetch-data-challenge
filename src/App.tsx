import { useEffect, useState } from "react";
import apiRequest from "./ApiRequest";
import Nav from "./Nav";
import Content from "./Content";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [view, setView] = useState("users" as "users" | "posts" | "comments");
  const [users, setUsers] = useState([] as User[]);
  const [posts, setPosts] = useState([] as Post[]);
  const [comments, setComments] = useState([] as Comment[]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null as null | string);

  useEffect(() => {
    // Get users
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}users`);
        if (!response.ok) throw Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
        setErrMsg(null);
      } catch (error) {
        if (error instanceof Error) setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchUsers();
    }, 2000);
    // Get posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}posts`);
        if (!response.ok) throw Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setErrMsg(null);
      } catch (error) {
        if (error instanceof Error) setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchPosts();
    }, 2000);
    // Get comments
    const fetchComments = async () => {
      try {
        const response = await fetch(`${API_URL}comments`);
        if (!response.ok) throw Error("Failed to fetch comments");
        const data = await response.json();
        setComments(data);
        setErrMsg(null);
      } catch (error) {
        if (error instanceof Error) setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchComments();
    }, 2000);
  }, []);

  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerHTML;
    setView(value as "users" | "posts" | "comments");
  };

  return (
    <>
      <Nav handleView={handleView} />
      <main>
        {isLoading && <p className="loading">Loading...</p>}
        {errMsg && <p className="error">{errMsg}</p>}
        {!isLoading && !errMsg && view === "users" && <Content data={users} />}
        {!isLoading && !errMsg && view === "posts" && <Content data={posts} />}
        {!isLoading && !errMsg && view === "comments" && (
          <Content data={comments} />
        )}
      </main>
    </>
  );
}

export default App;

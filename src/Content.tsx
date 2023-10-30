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

type ContentProps = {
  data: User[] | Post[] | Comment[];
};

const Content = ({ data }: ContentProps) => {
  return (
    <ul>
      {data.map((dataItem) => (
        <li key={dataItem.id}>{JSON.stringify(dataItem)}</li>
      ))}
    </ul>
  );
};
export default Content;

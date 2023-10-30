type NavProps = {
  handleView: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Nav = ({ handleView }: NavProps) => {
  return (
    <nav>
      <button onClick={handleView}>users</button>
      <button onClick={handleView}>posts</button>
      <button onClick={handleView}>comments</button>
    </nav>
  );
};
export default Nav;

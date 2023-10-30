type NavProps = {
  view: "users" | "posts" | "comments";
  handleView: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Nav = ({ view, handleView }: NavProps) => {
  return (
    <nav>
      <button
        onClick={handleView}
        className={view === "users" ? "selected" : ""}
      >
        users
      </button>
      <button
        onClick={handleView}
        className={view === "posts" ? "selected" : ""}
      >
        posts
      </button>
      <button
        onClick={handleView}
        className={view === "comments" ? "selected" : ""}
      >
        comments
      </button>
    </nav>
  );
};
export default Nav;

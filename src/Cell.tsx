type CellProps = {
  cellData: string;
};

const Cell = ({ cellData }: CellProps) => {
  return <td>{cellData}</td>;
};
export default Cell;

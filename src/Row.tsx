import Cell from "./Cell";

type RowProps = {
  dataItem: object;
};

const Row = ({ dataItem }: RowProps) => {
  return (
    <tr>
      {Object.entries(dataItem).map(([key, value]) => (
        <Cell key={key} cellData={JSON.stringify(value)} />
      ))}
    </tr>
  );
};
export default Row;

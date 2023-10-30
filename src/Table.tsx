import Row from "./Row";

type DataItem = {
  id: number;
};

type TableProps = {
  data: DataItem[];
};

const Table = ({ data }: TableProps) => {
  return (
    <table>
      <tbody>
        {data.map((dataItem) => (
          <Row key={dataItem.id} dataItem={dataItem} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;

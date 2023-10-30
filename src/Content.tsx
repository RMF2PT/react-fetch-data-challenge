import Table from "./Table";

type DataItem = {
  id: number;
};

type ContentProps = {
  data: DataItem[];
};

const Content = ({ data }: ContentProps) => {
  return (
    <>
      {/* <ul>
        {data.map((dataItem) => (
          <li key={dataItem.id}>{JSON.stringify(dataItem)}</li>
        ))}
      </ul> */}
      <Table data={data} />
    </>
  );
};
export default Content;

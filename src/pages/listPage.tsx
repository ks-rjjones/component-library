import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import List, { ListItemProps } from "src/components/list";
import "src/components/css/scrollbar.css";

interface ListItemData {
  id: number;
  title: string;
  body: string;
}

export default function ListPage() {
  const [listData, setListData] = useState<ListItemData[]>([]);

  useEffect(() => {
    setListData(
      new Array(1000).fill(null).map((_, id) => ({
        id: id,
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(3),
      }))
    );
  }, []);

  const ListItemComponent = ({ data }: ListItemProps<ListItemData>) => {
    return (
      <div className="h-[112px] cursor-default hover:bg-primary-100">
        <h6>{data.title}</h6>
        <p>{data.body}</p>
      </div>
    );
  };

  const Spacer = () => <div className="my-2" />;

  return (
    <>
      <h1 className="text-start">Lists</h1>
      <div className="w-full">
        <List<ListItemData>
          height={600}
          width={600}
          itemCount={listData.length}
          itemSize={112}
          data={listData}
          ListItemComponent={ListItemComponent}
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "6px" }}
        />
        <Spacer />
      </div>
    </>
  );
}

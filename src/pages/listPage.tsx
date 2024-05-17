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
        body: faker.lorem.words(12),
      }))
    );
  }, []);

  const ListItemComponent = ({ data }: ListItemProps<ListItemData>) => {
    return (
      <div className="relative h-[100px] w-full cursor-default overflow-hidden hover:bg-tertiary-100">
        <h3 className="cursor-default select-none overflow-hidden text-ellipsis text-nowrap p-4 text-left text-lg font-medium">
          {data.title}
        </h3>
        <p className="line-clamp-2 cursor-default select-none px-4 text-left text-base leading-none text-tertiary-700">
          {data.body}
        </p>
        <hr className="absolute inset-x-2 bottom-0" />
      </div>
    );
  };

  const Spacer = () => <div className="my-2" />;

  return (
    <>
      <h1 className="mb-4 text-start text-4xl">Lists</h1>
      <div className="flex max-w-fit bg-white">
        <List<ListItemData>
          height={600}
          width={400}
          itemCount={listData.length}
          itemSize={100}
          data={listData}
          ListItemComponent={ListItemComponent}
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "6px",
          }}
        />
        <Spacer />
      </div>
    </>
  );
}

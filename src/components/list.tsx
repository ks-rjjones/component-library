import React from "react";
import { FixedSizeList, ListChildComponentProps, FixedSizeListProps } from "react-window";

export interface ListItemProps<T> {
  index: number;
  data: T;
}

export interface ListProps<T> extends Omit<FixedSizeListProps, "children"> {
  data: T[];
  ListItemComponent: React.ComponentType<ListItemProps<T>>;
}

const List = <T,>({ data, ListItemComponent, ...rest }: ListProps<T>) => {
  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>
      <ListItemComponent index={index} data={data[index]} />
    </div>
  );

  return (
    <FixedSizeList {...rest} className="list-scrollbar">
      {Row}
    </FixedSizeList>
  );
};

export default List;

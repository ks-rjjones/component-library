import React from "react";
import { List, ListRowRenderer } from "react-virtualized";

interface CustomListItemProps<T> {
  index: number;
  style: React.CSSProperties;
  data: T;
}

interface VirtualizedListProps<T> {
  height: number;
  width: number;
  rowCount: number;
  rowHeight: number;
  data: T[];
  ListItemComponent: React.ComponentType<CustomListItemProps<T>>;
}

const VirtualizedList = <T,>({
  height,
  width,
  rowCount,
  rowHeight,
  data,
  ListItemComponent,
}: VirtualizedListProps<T>) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ListItemComponent index={index} style={style} data={data[index]} />
    </div>
  );

  return (
    <List
      height={height}
      width={width}
      rowCount={rowCount}
      rowHeight={rowHeight}
      rowRenderer={rowRenderer}
    />
  );
};

export default VirtualizedList;

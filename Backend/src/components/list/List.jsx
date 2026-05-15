import React from "react";
import { listData } from "../../lib/dummydata";
import Card from "../card/card";

const List = () => {
  return (
    <div
      className="
        flex
        flex-col
        gap-[50px]
      "
    >
      {listData.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default List;
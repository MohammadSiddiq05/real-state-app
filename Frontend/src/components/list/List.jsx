import React from "react";
import Card from "../card/Card";

const List = ({post}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-[50px]
      "
    >
      {post.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default List;
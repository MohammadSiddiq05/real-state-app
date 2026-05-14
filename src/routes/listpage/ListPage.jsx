import React from "react";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";

const ListPage = () => {
  const data = listData;

  return (
    <div
      className="
        flex
        h-full
      "
    >
      
      <div
        className="
          flex-[3]
          h-full
          overflow-y-auto
        "
      >
        <div
          className="
            flex
            flex-col
            gap-12
            pr-2
            pb-10
          "
        >
          
          <Filter />

          {data.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>

      <div
        className="
          hidden
          lg:flex
          flex-[2]
          bg-[#fcf5f3]
          items-center
          justify-center
          text-2xl
          font-semibold
        "
      >
        Map
      </div>
    </div>
  );
};

export default ListPage;
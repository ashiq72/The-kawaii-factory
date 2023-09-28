import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

export default function Products() {
  return (
    <>
      <Wrapper>
        <div className="flex gap-2 ">
          <div className="flex-none bg-blue-gray-400 flex-col">
            <div>
              <h1>Collection</h1>
            </div>
          </div>
          <div className="flex-auto bg-deep-orange-400">Flex one</div>
        </div>
      </Wrapper>
    </>
  );
}

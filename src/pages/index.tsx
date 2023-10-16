import React, { useEffect, useState } from "react";

interface FooProps {
  x: number;
}
//mounted ,updated,unmounting

const Foo = ({ x }: FooProps) => {
  useEffect(() => {
    console.log(x);
    return () => console.log("bye"); // unmounting
  }, [x]); //prop,state
};

const IndexPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [x, setX] = useState(1);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      <button onClick={() => setX(+new Date())}>Chang X</button>

      {isShow && <Foo x={x}></Foo>}
    </>
  );
};

export default IndexPage;

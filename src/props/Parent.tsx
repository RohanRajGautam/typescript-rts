import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="yellow" onClick={() => console.log("Clicked")} />;
};

export default Parent;

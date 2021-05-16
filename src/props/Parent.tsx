import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="yellow" onClick={() => console.log("Clicked")}>
      children value
    </ChildAsFC>
  );
};

export default Parent;

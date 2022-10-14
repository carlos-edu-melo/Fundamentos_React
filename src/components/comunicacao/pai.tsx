import Filho from "./filho";

export default (props: any): JSX.Element => {
  return (
    <div>
      <Filho {...props} ></Filho>
      <Filho sobrenome={props.sobrenome} ></Filho>
    </div>
  );
};

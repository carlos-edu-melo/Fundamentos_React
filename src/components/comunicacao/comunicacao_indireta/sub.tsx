import Sub from "./super";

export default (props: any): JSX.Element => {
  return (
    <div>
      <button
        onClick={() => {
          props.quandoClicar(Math.random(), 'Fim!');
        }}
      >
        Alterar
      </button>
    </div>
  );
};

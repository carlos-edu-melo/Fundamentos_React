export default (props: any): JSX.Element => {
  return (
    <div className="card" style={{ borderColor: props.cor || "#fff" }}>
      <div className="content">{props.filho}</div>

      <div className="FOOTER" style={{ backgroundColor: props.cor || "#fff" }}>
        {props.titulo}
      </div>
    </div>
  );
};

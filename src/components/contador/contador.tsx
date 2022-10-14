import React from "react";

export default class Contador extends React.Component {
  state = {
    passo: 1,
    valor: 0,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      passo: props.passo || 1,
      valor: props.valor || 0,
    };
  }

  incrementar = () => {
    this.setState({ valor: this.state.valor + this.state.passo });
  };

  decrementar = () => {
    this.setState({ valor: this.state.valor - this.state.passo });
  };
  render(): React.ReactNode {
    return (
      <div>
        <h2>Contador</h2>
        <h4>Passo: {this.state.passo}</h4>
        <input
          type=" number"
          value={this.state.passo}
          onChange={(evento) => this.setState({ passo: +evento.target.value })}
        />
        <h4>Valor: {this.state.valor}</h4>
        <br />
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

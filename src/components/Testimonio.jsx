import "../css/Testimonio.css";
import PropTypes from "prop-types";
import { Component } from "react";

class Testimonio extends Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={this.props.img}
          alt={`Foto de ${this.props.nombre}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className="cargo-testimonio">
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className="texto-testimonio">{this.props.testimonio}</p>
        </div>
      </div>
    );
  }
}

// function Testimonio(props) {
//   return (
//     <div className="contenedor-testimonio">
//       <img
//         className="imagen-testimonio"
//         src={props.img}
//         alt={`Foto de ${props.nombre}`}
//       />
//       <div className="contenedor-texto-testimonio">
//         <p className="nombre-testimonio">
//           <strong>{props.nombre}</strong> en {props.pais}
//         </p>
//         <p className="cargo-testimonio">
//           {props.cargo} en <strong>{props.empresa}</strong>
//         </p>
//         <p className="texto-testimonio">{props.testimonio}</p>
//       </div>
//     </div>
//   );
// }

Testimonio.propTypes = {
  img: PropTypes.string,
  nombre: PropTypes.string,
  pais: PropTypes.string,
  cargo: PropTypes.string,
  empresa: PropTypes.string,
  testimonio: PropTypes.object,
};

export default Testimonio;

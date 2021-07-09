export default function Acciones(props) {
    return (
      <a href={props.href}>
        <button className="flex" style={props.estilos}>
          <img className="my-auto" src={props.icono} />
          <div className="my-auto">
              <p className="font-medium text-lg antialiased text-left pl-4">
              {props.contacto}
              </p>
              <p className="italic font-normal text-base antialiased text-left pl-4">
              {props.metodo}
              </p>
          </div>
        </button>
      </a>
    );
  }
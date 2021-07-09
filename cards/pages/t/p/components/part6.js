export default function RedesSociales(props) {
    return (
      <a href={props.referencia}>
          <button>
              <img src={props.icono} />
          </button>
      </a>
    );
  }
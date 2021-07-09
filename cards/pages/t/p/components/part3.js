export default function FotoPerfil(props) {
    return (
      <div className="flex sm:ml-5 relative -top-32 ">
          <img className="absolute" src="/svg/pi1.svg" />
          <img className="absolute ml-8 mt-7" src={props.perfil} />
      </div>
    );
  }
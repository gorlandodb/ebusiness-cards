export default function Caracteristicas(props) {
    return (
        <div className="flex ml-8 mr-8 mt-10">
            <img src={props.icono}/>
            <div className="my-auto ml-5">
                <p className="font-medium text-xl leading-8">{props.caracteristica}</p>
                <p className="font-normal text-base leading-6">{props.descripcion}</p>
            </div>
        </div>
    )
}
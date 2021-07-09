export default function Informacion(props) {
    return (
        <div>
            <div className="flex">
                <p className="non-italic font-normal text-2xl sm:text-3xl leading-8" style={{fontFamily:"SF Pro Display"}}>{props.nombre}</p>
                <img src="/png/Check.png" className="my-auto mx-0"/>
            </div>
            <p className="non-italic font-normal text-lg sm:text-xl leading-5">{props.intereses}</p>
            <p className="non-italic font-medium text-base sm:text-lg leading-4" style={{fontFamily:"SF Pro Display"}}>{props.profesion}</p>
        </div>
    )
}
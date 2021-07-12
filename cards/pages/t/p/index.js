import Acciones from './components/part1'
import Caracteristicas from './components/part2'
import FotoPerfil from './components/part3'
import FotoPortada from './components/part4'
import Informacion from './components/part5'
import RedesSociales from './components/part6'
import Datos from './p00000000.json'

export default function p00000000() {
  return (
    <div className=" bg-red-400 flex justify-center lg:p-10 lg:bg-white r">
      <div className="rounded-3xl flex bg-red-400  w-full justify-center px-2 py-10 sm:py-10 md:w-4/5	lg:w-4/5 lg:px-24 ">
        <div
          className="bg-white  border-gray-800	border-8 rounded-3xl"
        >
          <div className="relative">
            <FotoPortada className="absolute" portada={Datos.fotos.portada}/>
            <FotoPerfil className="absolute" perfil={Datos.fotos.perfil} />
          </div>
          <div className="mt-20 ml-10">
            <>
              <Informacion nombre={Datos.informacion.nombre} intereses={Datos.informacion.intereses} profesion={Datos.informacion.profesion}/>
            </>
          </div>
          <div>
            <>
              <Caracteristicas
                icono={Datos.caracteristicas.caracteristica1.icono}
                caracteristica={Datos.caracteristicas.caracteristica1.nombre}
                descripcion={Datos.caracteristicas.caracteristica1.descripcion}
              />
              <Caracteristicas
                icono={Datos.caracteristicas.caracteristica2.icono}
                caracteristica={Datos.caracteristicas.caracteristica2.nombre}
                descripcion={Datos.caracteristicas.caracteristica2.descripcion}
              />
              <Caracteristicas
                icono={Datos.caracteristicas.caracteristica3.icono}
                caracteristica={Datos.caracteristicas.caracteristica3.nombre}
                descripcion={Datos.caracteristicas.caracteristica3.descripcion}
              />
            </>
          </div>
          <div className="flex ml-8 mr-8 mt-20 mb-10 justify-between">
            <>
              <RedesSociales referencia={Datos.redesSociales.youtube.ref} icono={Datos.redesSociales.youtube.icono}/>
              <RedesSociales referencia={Datos.redesSociales.twitter.ref} icono={Datos.redesSociales.twitter.icono}/>
              <RedesSociales referencia={Datos.redesSociales.linkedin.ref} icono={Datos.redesSociales.linkedin.icono}/>
              <RedesSociales referencia={Datos.redesSociales.linkedin.ref} icono={Datos.redesSociales.linkedin.icono}/>
              <RedesSociales referencia={Datos.redesSociales.pinterest.ref} icono={Datos.redesSociales.pinterest.icono}/>
            </>
          </div>
          <div className="mb-10">
            <div className="px-10 py-5">
              <Acciones
                href={Datos.acciones.accion1.href}
                estilos={Datos.acciones.accion1.estilos}
                icono={Datos.acciones.accion1.icono}
                contacto={Datos.acciones.accion1.contacto}
                metodo={Datos.acciones.accion1.metodo}
              />
            </div>
            <div className="px-10 py-5">
              <Acciones
                href={Datos.acciones.accion2.href}
                estilos={Datos.acciones.accion2.estilos}
                icono={Datos.acciones.accion2.icono}
                contacto={Datos.acciones.accion2.contacto}
                metodo={Datos.acciones.accion2.metodo}
              />
            </div>
            <div className="px-10 pb-10 pt-5">
              <Acciones
                href={Datos.acciones.accion3.href}
                estilos={Datos.acciones.accion3.estilos}
                icono={Datos.acciones.accion3.icono}
                contacto={Datos.acciones.accion3.contacto}
                metodo={Datos.acciones.accion3.metodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
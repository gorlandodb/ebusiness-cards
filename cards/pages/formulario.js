import Head from "next/head";

export default function Formulario() {
    return (
        <>
        <Head>
            <title>Esquinero Mexicano</title>
            <meta charSet="utf-8" />
        
            <link rel="manifest" href="manifest.json" />
        
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="Esquinero Mexicano" />
            <meta name="apple-mobile-web-app-title" content="Esquinero" />
            <meta name="theme-color" content="#F2F2F3" />
            <meta name="msapplication-navbutton-color" content="#F2F2F3" />
            <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
            />
            <meta name="msapplication-starturl" content="/" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
            <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
            />
            <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="180x180"
            href="/apple-icon.png"
            />
            <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/apple-icon.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/ms-icon-144x144.png"
            />
            <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="144x144"
            href="/ms-icon-144x144.png"
            />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            </style>
        </Head>
        <div>
           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 grid-rows-1">
               <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-3 row-start-1 row-end-2 px-5 my-8">
                   <div className="mb-4">
                       <div><h1 className="text-center text-3xl font-bold text-gray-800 mb-2">Registrate</h1></div>
                       <div><h3 className="text-center leading-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, cum dolor nostrum porro volup</h3></div>
                   </div>
                   <div>
                       <form>
                           <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Nombre</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Apellidos</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="w-full text-xs font-semibold text-gray-600">Correo electrónico</label><br/>
                                <input type="email" className="w-full h-10 rounded-md border-1"/>
                            </div>
                            <div className="mb-4">
                                <label className="w-full text-xs font-semibold text-gray-600">Número telefónico</label><br/>
                                <input type="tel" className="w-full h-10 rounded-md border-1"/>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">País</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Estado</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Ciudad</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Colonia</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Calle 1</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Calle 2</label><br/>
                                    <input type="text" className="w-full h-10 rounded-md border-1"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full text-xs font-semibold text-gray-600">Código postal</label><br/>
                                    <input type="tel" className="w-full h-10 rounded-md border-1"/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="w-full text-xs font-semibold text-gray-600">Contraseña</label><br/>
                                <input type="password" className="w-full h-10 rounded-md border-1"/>
                            </div>
                            <div className="mb-4">
                                <label className="w-full text-xs font-semibold text-gray-600">Confirmar contraseña</label><br/>
                                <input type="password" className="w-full h-10 rounded-md border-1"/>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" className="mr-2 inline"/>
                                <p className="text-sm text-gray-600 inline">Si das click en continuar estas aceptando nuestros <a href="https://www.w3schools.com" className="font-medium text-gray-800 underline">Términos de servicio</a> y <a  href="https://www.w3schools.com" className="underline font-medium text-gray-800">Politica de privacidad</a></p>
                            </div>
                            <div className="mb-4">
                                <input type="submit" className="w-full bg-purple-500 text-white rounded-md py-2" value="Enviar"/>
                            </div>
                       </form>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
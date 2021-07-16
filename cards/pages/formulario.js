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
           <div className="grid grid-cols-3 grid-rows-1">
               <div className="col-start-2 col-end-3 row-start-1 row-end-2 px-5">
                   <div>
                       <div><h1 className="text-center">Contact Sales</h1></div>
                       <div><h3 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, cum dolor nostrum porro voluptates assumenda pariatur iusto quia</h3></div>
                   </div>
                   <div>
                       <form className="bg-yellow-200 p-8">
                           <div className="grid grid-cols-2 grid-rows-1 gap-8 mb-4">
                                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                                    <label className="w-full">Nombre</label><br/>
                                    <input className="w-full rounded-md"/>
                                </div>
                                <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                                    <label className="w-full">Apellidos</label><br/>
                                    <input className="w-full rounded-md"/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="w-full">Correo electrónico</label><br/>
                                <input className="w-full rounded-md"/>
                            </div>
                            <div className="mb-4">
                                <label className="w-full">Número telefónico</label><br/>
                                <input className="w-full rounded-md"/>
                            </div>
                            <div className="mb-4">
                                <label className="w-full">Mensaje</label><br/>
                                <textarea className="w-full rounded-md"/>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" className="mr-4"/>
                                <span>Selecciona si estas de acuerdo con las politicas de prividad y cookies de privacidad</span>
                            </div>
                            <div>
                                <button className="w-full bg-purple-500 text-white rounded-md">Enviar</button>
                            </div>
                       </form>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
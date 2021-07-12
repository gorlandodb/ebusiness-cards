import Head from "next/head";

export default function Part1() {
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
            <div className="h-screen">
                <div className="grid grid-cols-2 gap-0 h-full">
                    <div className="row-start-1 row-end-1 col-start-1 col-end-2 bg-gray-100">
                        <div className="grid grid-cols-4 grid-rows-12 gap-0 h-full">
                            <div className="row-start-2 row-end-12 col-start-2 col-end-5 bg-fondo bg-no-repeat bg-center bg-cover rounded-l-lg">
                            </div>
                        </div>
                    </div>
                    <div className="row-start-1 row-end-1 col-start-2 col-end-3 bg-gray-500">
                        <div className="grid grid-cols-4 grid-rows-12 gap-0 h-full">
                            <div className="row-start-2 row-end-12 col-start-1 col-end-4 bg-gray-100 rounded-r-lg p-14 pr-24">
                                <div><p className="text-xxs">TYSON G.</p></div><br/>
                                <div><p className="text-4xl font-bold tracking-tighter">Designer.<br/>Creator.<br/>Nomad.</p></div><br/>
                                <div><p className="text-xs tracking-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum fugit, dolores, ullam vel error voluptatem et animi deserunt at explicabo quibusdam perferendis atque repudiandae maiores laudantium, nesciunt quos iste.</p></div><br/>
                                <div>
                                    <table class="table-auto w-full">
                                        <thead className="text-xxs">
                                            <tr className="text-left">
                                                <th>CONNECT</th>
                                                <th>SOCIAL</th>
                                                <th>PROJECT</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs">
                                            <tr>
                                                <td>Blog</td>
                                                <td>Twitter</td>
                                                <td>Link One</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>Instagram</td>
                                                <td>Link Two</td>
                                            </tr>
                                            <tr>
                                                <td>Newsletter</td>
                                                <td>Dribble</td>
                                                <td>Link Three</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div><br/><br/><br/>
                                <div><p className="text-xxs">2021 - SPLIT TEMPLATE BY SUPER ONE PAGE LOVE</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
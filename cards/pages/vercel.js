import Head from "next/head";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'

export default function Vercel() {

    let open = true;
    
    function toogle() {
        open = !open;
        console.log(open);

        return open;
    }

    return (
        <>
        <Head>
            <title>Vercel</title>
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
           <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 lg:h-screen">
               <div className="col-start-1 col-end-2 row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 lg:bg-gray-100">
                   <div className="grid grid-cols-1 sm:grid-cols-5 xl:grid-cols-7 grid-rows-1 h-full">
                       <div className="col-start-1 col-end-2 sm:col-start-2 sm:col-end-5 lg:col-start-2 lg:col-end-6 xl:col-start-3 xl:col-end-8 row-start-1 row-end-2 p-10 my-auto">
                           <div className="lg:pr-14">
                               <div className="mb-8 hidden lg:block">
                                   <img src="packVercel/vercel.svg"/>
                               </div>
                               <div className="mb-5 md:mb-3">
                                    <div className="flex">
                                       <img src="/packVercel/check.svg" className="mr-2"/>
                                       <p className="text-lg font-semibold">Letras en negrito</p>
                                    </div>
                                    <div className="pl-6">
                                       <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque, recusandae vel nisi  Nihil, eaque, recusandae vel nisi</p>
                                    </div>
                               </div>
                               <div className="mb-5 md:mb-3">
                                    <div className="flex">
                                       <img src="/packVercel/check.svg" className="mr-2"/>
                                       <p className="text-lg font-semibold">Letras en negrito</p>
                                    </div>
                                    <div className="pl-6">
                                       <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque, recusandae vel nisi  Nihil, eaque, recusandae vel nisi</p>
                                    </div>
                               </div>
                               <div className="mb-5 md:mb-3">
                                    <div className="flex">
                                       <img src="/packVercel/check.svg" className="mr-2"/>
                                       <p className="text-lg font-semibold">Letras en negrito</p>
                                    </div>
                                    <div className="pl-6">
                                       <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque, recusandae vel nisi  Nihil, eaque, recusandae vel nisi</p>
                                    </div>
                               </div>
                               <div className="mb-5 md:mb-3">
                                    <div className="flex">
                                       <img src="/packVercel/check.svg" className="mr-2"/>
                                       <p className="text-lg font-semibold">Letras en negrito</p>
                                    </div>
                                    <div className="pl-6">
                                       <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque, recusandae vel nisi  Nihil, eaque, recusandae vel nisi</p>
                                    </div>
                               </div>
                           </div>
                           <div>
                               <div><p className="text-gray-600 font-bold text-sm mt-8 mb-4 text-center lg:text-left">COMPAÑIAS QUE USAN ESTO</p></div>
                               <div className="space-x-4">
                                   <img className="inline" src="/packVercel/iconoMediano.svg"/>
                                   <img className="inline" src="/packVercel/iconoChico.svg"/>
                                   <img className="inline" src="/packVercel/iconoGrande.svg"/>
                                   <img className="inline" src="/packVercel/iconoMediano.svg"/>
                                   <img className="inline" src="/packVercel/iconoChico.svg"/>
                                   <img className="inline" src="/packVercel/iconoGrande.svg"/>
                                   <img className="inline" src="/packVercel/iconoMediano.svg"/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-start-1 col-end-2 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                   <div className="grid grid-cols-1 sm:grid-cols-5 xl:grid-cols-7 grid-rows-1 h-full">
                       <div className="col-start-1 col-end-2 sm:col-start-2 sm:col-end-5 lg:col-start-1 lg:col-end-5 xl:col-start-1 xl:col-end-6 row-start-1 row-end-2 p-10 my-auto">
                           <div>
                               <div className="mb-8 block lg:hidden">
                                   <img src="packVercel/vercel.svg"/>
                               </div>
                               <div className="mb-8">
                                   <h1 className="text-4xl font-semibold">Join the best fronted teams</h1>
                                </div>
                               <div>
                                   <button className="block w-full text-white bg-black rounded py-2 my-2 border-1 border-black text-sm">Continue with GitHub</button>
                                   <button className="block w-full text-white bg-purple-600 rounded py-2 my-2 border border-purple-600 text-sm">Continue with GitLAb</button>
                                   <button className="block w-full text-white bg-blue-600 rounded py-2 my-2 border-1 border-blue-600 text-sm">Continue with Bitbucket</button>
                               </div>
                               <div className="border-1 border-gray-300 border-opacity-50 my-4"/>
                               <div>
                                   <button className="block w-full text-gray-600 rounded py-2 my-2 border-1 border-gray-300 text-sm">Continue with SAML SSO</button>
                                   <button className="block w-full text-blue-600 py-1 my-2 text-sm">Continue with Email</button>
                               </div>
                               <div className="mt-6">
                                   <p className="text-sm text-gray-600">Si das click en continuar estas aceptando nuestros <button className="text-black">Términos de servicio</button> y <button className="text-black">Politica de privacidad</button></p>
                               </div>
                               <div className="mt-6">
                                   <p className="text-sm">¿Ya tienes una cuenta? <button className="text-blue-600">Log in</button></p>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-start-1 col-end-2 row-start-3 row-end-4 bg-gray-100 lg:hidden">
                   <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-1 h-full">
                       <div className="col-start-1 col-end-2 sm:col-start-2 sm:col-end-5 row-start-1 row-end-2 p-10 my-auto">
                            <Menu className="text-left w-full">
                                {({ open }) => (
                                    <>
                                    <div>
                                        <Menu.Button className="inline-flex justify-between w-full border-b-2 border-gray-300 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                                            Frameworks
                                            <Transition show={open}>
                                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                            <Transition show={!open}>
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div className="py-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sed alias? Ex possimus laudantium rerum facere omnis reprehenderit est, aliquam, animi cupiditate nostrum culpa. Eligendi vel iste suscipit esse laborum.
                                        </div>
                                    </Transition>
                                    </>
                                )}
                            </Menu>
                            <Menu className="text-left w-full">
                                {({ open }) => (
                                    <>
                                    <div>
                                        <Menu.Button className="inline-flex justify-between w-full border-b-2 border-gray-300 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                                            Resources
                                            <Transition show={open}>
                                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                            <Transition show={!open}>
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div className="py-1">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium laboriosam fugiat sunt cum odio, veniam laudantium delectus temporibus, reprehenderit quaerat maiores ut repudiandae ipsa dignissimos id omnis ex, optio vero.
                                        </div>
                                    </Transition>
                                    </>
                                )}
                            </Menu>
                            <Menu className="text-left w-full">
                                {({ open }) => (
                                    <>
                                    <div>
                                        <Menu.Button className="inline-flex justify-between w-full border-b-2 border-gray-300 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                                            Company
                                            <Transition show={open}>
                                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                            <Transition show={!open}>
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div className="py-1">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima ut rem ab molestias sequi similique nobis corrupti aperiam, mollitia atque possimus repudiandae ea. Praesentium amet similique sed saepe fugit laudantium?
                                        </div>
                                    </Transition>
                                    </>
                                )}
                            </Menu>
                            <Menu className="text-left w-full">
                                {({ open }) => (
                                    <>
                                    <div>
                                        <Menu.Button className="inline-flex justify-between w-full border-b-2 border-gray-300 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                                            Legal
                                            <Transition show={open}>
                                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                            <Transition show={!open}>
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </Transition>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div className="py-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odit iste sequi, dolore natus voluptas, nostrum libero maxime qui facilis eligendi commodi atque ut, repellendus ullam ex voluptatibus sapiente facere!
                                        </div>
                                    </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                   </div>
               </div>
           </div>
        </div>

        </>
    )
}
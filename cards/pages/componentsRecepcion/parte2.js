import React, { Component } from 'react';
import Datos from "../recepcion.json"

class Parte2 extends Component{
    render() {
        return(
            <div>
                <div>
                    <div className="bg-white pb-4 px-4 rounded-md w-full">
                        <div className="flex justify-between w-full pt-6 ">
                            <p className="ml-3"> Users Table</p>
                            <svg
                            width="14"
                            height="4"
                            viewBox="0 0 14 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.4">
                                    <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222" />
                                    <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222" />
                                    <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222" />
                                </g>
                            </svg>
                        </div>
                        <div className="w-full flex justify-end px-2 mt-2">
                            <div className="w-full sm:w-64 inline-block relative ">
                            <input
                                type=""
                                name=""
                                className="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg"
                                placeholder="Search"
                            />

                            <div className="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
                                <svg
                                className="fill-current h-3 w-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 511.999 511.999"
                                >
                                    <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-6">
                            <table className="table-auto border-collapse w-full">
                            <thead>
                                <tr
                                className="rounded-lg text-sm font-medium text-gray-700 text-left"
                                >
                                <th
                                    className="px-4 py-2 bg-gray-200 "
                                >
                                    Title
                                </th>
                                <th className="px-4 py-2 bg-gray-200">
                                    Author
                                </th>
                                <th className="px-4 py-2 bg-gray-200">
                                    Views
                                </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                            {
                                Datos.parte2.cargos.map(venta => (
                                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                        <td className="px-4 py-4">{venta.fecha}</td>
                                        <td className="px-4 py-4">{venta.monto}</td>
                                        <td className="px-4 py-4">{venta.producto}</td>
                                    </tr>)
                                )  
                            }
                            </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Parte2
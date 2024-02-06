import Image from "next/image";
import { Container } from "./Container";


import  iconcard1  from "../assets/iconcard1.jpg"
import  iconcard2  from "../assets/iconcard2.png"
import  iconcard3  from "../assets/iconcard3.png"
import  iconcard4  from "../assets/iconcard4.png"
import  iconcard5  from "../assets/iconcard5.png"
import  iconcard6 from "../assets/iconcard6.png"

import  robot  from "../assets/robot.png"

export function AboutService(){
    return(
        <section id="service" className="h-[900px] mt-14 xl:h-[300px] 2xl:mt-52">


        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 mb-12">
                <h1 className="font-bold text-2xl text-primary-orange">Nossos serviços</h1>
                <div className="h-1 w-28 bg-second-orange rounded-full "/>
            </div>

            <div className="grid grid-cols-1 gap-y-1 gap-x-6 w-[300px] cursor-default xl:grid-cols-2 xl:w-[1110px]">
                <div className="bg-green-one flex items-center justify-between p-3 rounded-md hover:bg-green-two transition ease-in-out duration-75 xl:p-4">
                    <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Pedidos automatizados</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard1}
                        alt="Icon card 1"
                        className="sm:w-8 sm:h-8  xl:w-12 xl:h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-3 rounded-md  hover:bg-green-two transition ease-in-out duration-75 xl:p-4">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Atendimento Humano</p>
                    <h2 className="font-thin text text-white max-w-[370px]">Pedidos feitos pela equipe de atendimento
humana, para tirar qualquer tipo de dúvida.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard2}
                        alt="Icon card 2"
                        className="sm:w-8 sm:h-8  xl:w-12 xl:h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-3 rounded-md hover:bg-green-two transition ease-in-out duration-75 xl:p-4">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Pedidos organizados</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard3}
                        alt="Icon card 1"
                        className="sm:w-8 sm:h-8  xl:w-12 xl:h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-3 rounded-md   hover:bg-green-two transition ease-in-out duration-75 xl:p-4">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Integração com o WhatsApp</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard6}
                        alt="Icon card 1"
                        className="sm:w-8 sm:h-8  xl:w-12 xl:h-12"
                        />
                </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col mt-20">
            <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-green-one font-bold text-[49px]  text-center leading-tight xl:w-[900px]"><span className="text-primary-orange">Serviços</span> de qualidade e muita <span className="text-primary-orange">segurança</span></h1>
                <p className="w-[300px] text-center text-green-one xl:w-[800px]">Garantimos tranquilidade e excelência em cada etapa do processo, protegendo seus dados com as mais avançadas medidas de segurança.</p>
                <div>
            <button className="text-white bg-green-one px-[50px] py-3 rounded-md hover:bg-green-500">
                    Quero ser Stan
                </button>
            </div>
            </div>

            
        
        </div>

        
        </section>

    )

}
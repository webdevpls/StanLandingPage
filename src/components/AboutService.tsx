import Image from "next/image";
import { Container } from "./Container";


import  iconcard1  from "../assets/iconcard1.jpg"
import  iconcard2  from "../assets/iconcard2.png"
import  iconcard3  from "../assets/iconcard3.png"
import  iconcard4  from "../assets/iconcard4.png"

import  robot  from "../assets/robot.png"

export function AboutService(){
    return(
        <section id="service" className="h-[900px] mt-56">


        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 mb-12">
                <h1 className="font-bold text-2xl text-primary-orange">Nossos serviços</h1>
                <div className="h-1 w-28 bg-second-orange rounded-full "/>
            </div>

            <div className="grid grid-cols-2 gap-y-11 gap-x-6 w-[1110px] cursor-default">
                <div className="bg-green-one flex items-center justify-between p-5 rounded-md hover:bg-green-two transition ease-in-out duration-75">
                    <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Pedidos automatizados</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard1}
                        alt="Icon card 1"
                        className="w-12 h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-5 rounded-md  hover:bg-green-two transition ease-in-out duration-75">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Atendimento Humano</p>
                    <h2 className="font-thin text text-white max-w-[370px]">Pedidos feitos pela equipe de atendimento
humana, para tirar qualquer tipo de dúvida.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard2}
                        alt="Icon card 2"
                        className="w-12 h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-5 rounded-md hover:bg-green-two transition ease-in-out duration-75">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Pedidos automatizados</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard3}
                        alt="Icon card 1"
                        className="w-12 h-12"
                        />
                </div>
                </div>
                <div className="bg-green-one flex items-center justify-between p-5 rounded-md   hover:bg-green-two transition ease-in-out duration-75">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-white text-[18px]">Pedidos automatizados</p>
                    <h2 className="font-thin text text-white max-w-72">Pedidos feitos pelo nosso robô para facilitar seus pedidos.</h2>
                    </div>

                    <div className="ml-4">
                        <Image
                        src={iconcard4}
                        alt="Icon card 1"
                        className="w-12 h-12"
                        />
                </div>
                </div>
            </div>
        </div>

        <div className="max-w-[1110px] flex mx-auto mt-28">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-[69px] leading-[87px] w-[498px] text-green-one">Serviços de <span className="text-green-two">qualidade</span> e de <span className="text-green-two">confiança!</span></h1>
                <p className="w-[500px] text-green-one">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div>
            <button className="text-white bg-green-one px-[50px] py-3 rounded-md hover:bg-green-500">
                    Quero ser Stan
                </button>
            </div>
            </div>

            
            <div className="ml-24 w-[564] h-[564px]">
                <Image
                
                src={robot}
                alt="Robo"
                />
            </div>
        </div>

        
        </section>

    )

}
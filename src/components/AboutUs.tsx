import Image from "next/image"
import Robot1 from "../assets/robots2.png"

import  iconcard1  from "../assets/iconcard1.jpg"
import  iconcard2  from "../assets/iconcard2.png"
import  iconcard3  from "../assets/iconcard3.png"
import  iconcard4  from "../assets/iconcard4.png"


export function AboutUs(){
    return(
        <section id="about" className=" h-[832px] mt-[500px] bg-second-orange bg-img_bg bg-no-repeat bg-center  bg-cover cursor-default 2xl:h-[732px]">


            <div className="flex flex-col items-center justify-center pt-28 gap-8">

            <span className="text-white font-medium">Quem somos? ✅</span>
                <h1 className="text-white font-bold text-[50px] max-w-[1110px] md:max-w-[800px] text-center leading-tight xl:text-[69px] xl:max-w-[1110px]"> Somos quem <span className="text-green-two">automatiza</span> todos os seus <span className="text-green-two">pedidos!</span></h1>
                <p className="text-white text-center max-w-[400px] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            

            <div className="grid grid-cols-1 gap-y-11 gap-x-6 w-[370px] cursor-default mt-20 xl:grid-cols-2 xl:w-[1110px]">
                <div className="bg-green-one flex items-center h-20 justify-center gap-5 p-5 rounded-md hover:bg-green-two transition ease-in-out duration-75">
                    
                <div className="">
                        <Image
                        src={iconcard1}
                        alt="Icon card 1"
                        className="w-12 h-12"
                        />
                </div>
                    
                    <div className="flex flex-col gap-1">
                    <p className="font-medium text-white text-[18px]">Anos no mercado de bots</p>

                    </div>

                    
                </div>


                <div className="bg-green-one flex items-center h-20 justify-center gap-5 p-5 rounded-md  hover:bg-green-two transition ease-in-out duration-75">
                <div className="">
                        <Image
                        src={iconcard3}
                        alt="Icon card 1"
                        className="w-12 h-12"
                        />
                </div>
                    
                    <div className="flex flex-col gap-1">
                    <p className="font-medium text-white text-[18px]">Equipe sempre atenta</p>

                    </div>

                    
                </div>

                

            </div>
        </div>

        </section>
    )
}
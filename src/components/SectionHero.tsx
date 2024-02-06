import Image from "next/image";
import { Container } from "./Container";

import Msg from '@/assets/msg1.svg'
import Box1 from '@/assets/Box.jpg'




export function SectioHero(){
    return(
        <section id="home" className="w-full h-[704px] bg-img_bg bg-no-repeat bg-center  bg-cover 2xl:h-[800px]">

            <Container>
            <div className=" w-[1110px] flex flex-col items-center justify-center mt-[600px] gap-8 2xl:mt-[800px]">
                <span className="text-white font-medium">Agilidade é nosso codinome! ✅</span>
                <h1 className="text-white font-bold text-[49px]  text-center leading-tight 2xl:text-[69px]"><span className="text-primary-orange">Automatize</span> sua operação em alguns <span className="text-primary-orange">minutos!</span></h1>
                <p className="text-white text-center max-w-[900px] sm:max-w-[400px] font-light">Transforme a eficiência do seu negócio com nossa solução simplificada e rápida.
                </p>
                <button className="text-white bg-primary-orange px-[50px] py-3 rounded-md hover:bg-green-500">
                    Quero ser Stan
                </button>

                <div className="grid grid-cols-2 gap-2 sm:w-[500px] 2xl:w-[900px] 2xl:gap-3">
                <Image className="rounded-2xl"
                src={Msg}
                alt="Card 1"
                />
                 <Image className="rounded-2xl"
                src={Msg}
                alt="Card 2"
                />
                
            </div>
            </div>

            </Container>

        </section>
        
    )
}
import Image from "next/image";
import { Container } from "./Container";

import Msg from '@/assets/msg.jpg'
import Box1 from '@/assets/Box.jpg'




export function SectioHero(){
    return(
        <section id="home" className="w-full h-[704px] bg-img_bg bg-no-repeat bg-center  bg-cover">

            <Container>
            <div className="flex-1 max-w-[1000px] flex flex-col items-center mt-[750px] gap-8">
                <span className="text-white font-medium">Agilidade é nosso codinome! ✅</span>
                <h1 className="text-white font-bold text-7xl text-center leading-tight"><span className="text-primary-orange">Automatize</span> sua operação em alguns <span className="text-primary-orange">minutos!</span></h1>
                <p className="text-white text-center max-w-[754px] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className="text-white bg-primary-orange px-[50px] py-3 rounded-md hover:bg-green-500">
                    Quero ser Stan
                </button>

                <div className="grid grid-cols-2 gap-5">
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
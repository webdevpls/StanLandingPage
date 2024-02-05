"use client"

import Image from "next/image"
import  iconcard3  from "../assets/iconcard3.png"
import emailjs from "@emailjs/browser"

import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import { useState } from "react"

export function ContactSection () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    function sendEmail(e){

        e.preventDefault();

        if(name == '' || email == '' || message == ''){
            alert("Preencha todos os campos")
            return;
        }


        const templateParms = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_fldu0vk", "template_zgrm7m3", templateParms, "yDDyrkrsu2IAfMH5E" )
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {

            console.log("ERROR", err)


        }
        
        )
        

    }

    return (

        <section id="contact" className="bg-green-three h-[1300px] flex flex-col items-center justify-center">
           

           <div className="flex flex-col items-center justify-center gap-8">

            <span className="text-white font-medium">Fale conosco! ✅</span>
                <h1 className="text-white font-bold text-7xl max-w-[1110px] text-center leading-tight">Entre em <span className="text-green-two">contato</span> e tire todas suas <span className="text-green-two">duvidas!</span></h1>
                <p className="text-white text-center max-w-[754px] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </p>
            </div>

            <div className="bg-second-orange mt-16 w-[800px] p-9 flex flex-col items-center justify-center -4 rounded-lg" >
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[40px] text-white">Fale conosco!</h1>
                        <span className="text-primary-orange">Estamos sempre dispostos a te ajudar!</span>
                    </div>

            <form action="" onSubmit={sendEmail}>
                <div className="flex flex-col items-center justify-center gap-5 mt-9">
                    
                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon1}
                        alt="icon 1"
                        />
                        <input className="bg-white px-14 py-2 w-[500px] rounded-md border border-green-one focus:border-green-two focus:outline-none" 
                        
                        type="text" 
                        placeholder="Seu nome" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        
                        
                        /> 
                    </div>

                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon2}
                        alt="icon 2"
                        />
                        <input className="bg-white px-14 py-2 w-[500px] rounded-md border border-green-one focus:border-green-two focus:outline-none" 
                        
                        type="email" 
                        placeholder="Seu email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        
                        /> 
                    </div>

                    <div>
                        <Image className="absolute mt-2 ml-4"
                        src={icon2}
                        alt="icon 1"
                        />
                        <textarea className="bg-white px-14 py-2 w-[500px] rounded-md border border-green-one focus:border-green-two focus:outline-none resize-none" 
                        
                        placeholder="Digite sua mensagem"
                        rows={13}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        
                        /> 


                    </div>

                    <input className="text-white bg-primary-orange px-[50px] w-full py-3 rounded-md hover:bg-green-500 cursor-pointer" value="Enviar" type="submit"/>
                    
                    

                    </div>
                   </form>

                    
                
            </div>

    


        </section>


    )
}
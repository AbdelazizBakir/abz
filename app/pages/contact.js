import Head from "next/head";
import styles from "/styles/Home.module.css";
import {useRef, useState} from 'react'
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import {List, ListItem, } from '@chakra-ui/react';

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export default function Message({ data }) {
    const [formData, setFormData] = useState({})
    const [messages, setMessages] = useState(data)
    const form = useRef()

    async function saveMessage(e) {
        e.preventDefault()
        setMessages([...messages, formData])
        const response = await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        form.current.reset()
        return await response.json();
        };
 //ensemble des données
 /*
         <main className="min-h-screen  mt-36">
          <div></div>
        <form onSubmit={saveMessage} className="bg-blue-100 w-full p-4 mx-56 ">
        <div className="mb-6">
            <label for="name" className="block mb-2 text-sm text-gray-600">Votre nom</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="ABDELAZIZ Bakir" name="name" onChange={e => setFormData({ ...formData, name: e.target.value })}/>
        </div>
        <div className="mb-6">
            <label for="msg" className="block mb-2 text-sm text-gray-600">Votre message</label>
            <textarea className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            name="msg" id="" cols="6" rows="5" placeholder="Message..." onChange={e => setFormData({ ...formData, msg: e.target.value })} />
        </div>
            <button type="submit" className="w-full px-2 py-4 text-white bg-blue-500 rounded-md  focus:bg-blue-600 focus:outline-none">
                Envoyer
            </button>
        </form>
    </main>
    */
    return (
    <section className="bg-white w-full py-20 lg:py-[120px] overflow-hidden relative z-10">
       <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
             <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                   <span className="block mb-4 text-base text-primary font-semibold">
                   NOUS CONTACTER
                   </span>
                   <h2
                      className="
                      text-dark
                      mb-6
                      uppercase
                      font-bold
                      text-[32px]
                      sm:text-[40px]
                      lg:text-[36px]
                      xl:text-[40px]
                      "
                      >
                      Prenez contact avec nous
                   </h2>
                   <p className="text-base text-body-color leading-relaxed mb-9">
                   Merci pour ta lettre! Nous vous contacterons dès réception de votre message, nous vous souhaitons une bonne journée. 
                   </p>
                </div>
             </div>
             <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg hover:shadow-2xl ">
                   <form  onSubmit={saveMessage} ref={form} className=''>
                      <div className="mb-6">
                         <input
                            type="text"
                            placeholder="votre nom"
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-blue-300
                            hover:border-amber-300
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            
                      </div>
                      <div className="mb-6">
                         <input
                            type="text"
                            placeholder="Ton téléphone"
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-blue-300
                            hover:border-amber-300
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            onChange={e => setFormData({ ...formData, obs: e.target.value })}
                            />
                      </div>
                      <div className="mb-6">
                         <textarea
                            rows="6"
                            placeholder="Votre message"
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-blue-300
                            hover:border-amber-300
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            onChange={e => setFormData({ ...formData, msg: e.target.value })}
                            />
                      </div>
                      <div>
                         <button
                            type="submit"
                            className="
                            w-full
                            text-white
                            bg-blue-600
                            rounded
                            border border-primary
                            p-3
                            transition
                            hover:bg-opacity-90
                            "
                            >
                         Envoyer le message
                         </button>
                      </div>
                   </form>
                   <div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>

)
}
export async function getServerSideProps() {

    const messages = await prisma.contact.findMany()

    return {
    props: {
        data: messages
    }
}
}
  
  
import Head from "next/head";
import styles from "/styles/Home.module.css";
import {useState} from 'react'
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import {List, ListItem, } from '@chakra-ui/react';
import Header from "./dashboard/Header";
import LeftNavbar from "./dashboard/LeftNavbar";

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export default function Message({ data }) {
    const [formData, setFormData] = useState({})
    const [messages, setMessages] = useState(data)

    async function saveMessage(e) {
        e.preventDefault()
        setMessages([...messages, formData])
        const response = await fetch('/api/createt', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        return await response.json();
        };
 //ensemble des données
    return (
        <div className={styles.container}>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
        <main>
        <div className="flex flex-col ml-56 mr-9 mt-8">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full">
                            <thead> 
                                <tr>
                                    <th
                                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Nom complet</th>
                                    <th
                                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Message</th>
                                    <th
                                        className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Statut</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {messages.map(item => (
                                <tr  key="item.id">
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium leading-5 text-gray-900">
                                                {item.name}
                                                 </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-500">
                                        {item.msg}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <span
                                            className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Admin</span>
                                    </td>
                                </tr>
                                ))}     
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <form onSubmit={saveMessage} className="bg-blue-100 mr-20 p-4 ml-64 m-8">
        <div className="mb-6">
            <label for="name" className="block mb-2 text-sm text-gray-600">Votre nom</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="ABDELAZIZ Bakir" name="name" onChange={e => setFormData({ ...formData, name: e.target.value })}/>
        </div>
        <div className="mb-6">
        <label for="id" className="block mb-2 text-sm text-gray-600">Identifiant</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="id_123" name="name" onChange={e => setFormData({ ...formData, name: e.target.value })}/> 
        </div>
        <div className="mb-6">
            <label for="msg" className="block mb-2 text-sm text-gray-600">Votre message</label>
            <textarea className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            name="msg" id="" cols="6" rows="5" placeholder="Message..." onChange={e => setFormData({ ...formData, msg: e.target.value })} />
        </div>
        <div className="mb-6">
            <label for="user" className="block mb-2 text-sm text-gray-600">Récepteur du message</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="Bakir ABDELAZIZ" name="user" onChange={e => setFormData({ ...formData, name: e.target.value })}/>
        </div>
            <button type="submit" className="w-full px-2 py-4 text-white bg-blue-500 rounded-md  focus:bg-blue-600 focus:outline-none">
                Envoyer
            </button>
        </form>
    </main>
    </div>
	</div>
)
}
export async function getServerSideProps() {

    const messages = await prisma.messaget.findMany()

    return {
    props: {
        data: messages
    }
}
}
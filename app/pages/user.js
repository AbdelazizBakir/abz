import Head from "next/head";
import styles from "/styles/Home.module.css";
import Header from "./dashboard/Header";
import LeftNavbar from "./dashboard/LeftNavbar";
import React from "react";
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";
import {PrismaClient} from '@prisma/client'
import Router from "next/router";
const prisma = new PrismaClient()

export default function Home({ data }) {
    const { data: session } = useSession();
    const router = useRouter();
    
    const [formData, setFormData] = useState({})
    const [users, setUsers] = useState(data)
    const form = useRef()

    async function saveUser(e) {
        e.preventDefault()
        setUsers([...users, formData])
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        form.current.reset()
        return await response.json();
        };
        ////session
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            const securePage = async () => {
                const session = await getSession()
                if (!session) {
                    signIn()
                } else {
                    setLoading(false)
                }
            }
            securePage()
        }, [])
        if (loading) {
            return <>
               <div className="h-screen flex items-center justify-center ">
                   <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
               </div>
           </>
        }
        ////////////
    return (
        <div className={styles.container}>
        <div className={styles.container}>
            <Header />
            <LeftNavbar />
        <main className="flex flex-col ml-56 mr-9 mt-8">
        <form  ref={form} onSubmit={saveUser} className="bg-blue-100 mr-36 p-4 ml-48 m-8">
        <div className="mb-6">
            <label for="name" className="block mb-2 text-sm text-gray-600">Nom et prénom</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="ABDELAZIZ Bakir" name="name" onChange={e => setFormData({ ...formData, name: e.target.value })}/>
        </div>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm text-gray-600">Adresse e-mail</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="email" placeholder="ABDELAZIZ.Bakir@outlook.fr" name="email" onChange={e => setFormData({ ...formData, email: e.target.value })}/>
        </div>
        <div className="mb-6">
            <label for="username" className="block mb-2 text-sm text-gray-600">Nom d'utilisateur</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="text" placeholder="ABDELAZIZBakir" name="username" onChange={e => setFormData({ ...formData, username: e.target.value })}/>
        </div>
        <div className="mb-6">
        <label for="password" className="block mb-2 text-sm text-gray-600">Mot de passe</label>
            <input className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            type="password" placeholder="* * * * * * * * *" name="password" onChange={e => setFormData({ ...formData, password: e.target.value })}/> 
        </div>
            <button type="submit" className="w-full px-2 py-4 text-white bg-blue-500 rounded-md  focus:bg-blue-600 focus:outline-none">
                Envoyer
            </button>
        </form>
    </main>
    </div>
    </div>
);
}
export async function getServerSideProps() {

    const users = await prisma.user.findMany()

    return {
    props: {
        data: users
    }
}
}
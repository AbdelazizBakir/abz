import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState} from 'react'
import React from "react";
import Link from 'next/link'
import { fetcher } from "./fetcher";

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export default function Home({ data }) {
    const [formData, setFormData] = useState({})
    const [movies, setMovies] = useState(data)

    async function saveMovie(e) {
        e.preventDefault()
        setMovies([...movies, formData])
        const response = await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        return await response.json();
        };
///////////////////////////////////////////////////// DELETE
    const [delData, setdelData] = useState({})
    const [del, setDels] = useState(data)
    
    async function delMov(e) {
        e.preventDefault()
        setDels([...del, delData])
        const response = await fetch ('/api/delete', {
            method: 'POST',
            body: JSON.stringify(delData)
        })
        return await response.json();
        };
///<button onclick={delMov} name={item.id} onChange={e => setdelData({ ...delData, delete: e.target.value })} > Delete </button>
    return (
        <main>
        <ul>
            {movies.map(item => (
                <li key="item.id">
                    <span><strong>{item.title}</strong></span>
                    <span>{item.year}</span>
                    <span>{item.description}</span>
                    <Link href={`/movies/${item.slug}`}>
                        <a>More about <strong>{item.id}</strong></a>
                    </Link>
                    
                    <button
                    animated="fade"
                    color="red"
                    onClick={async () => {
                      await Fetcher("/api/delete", { id: item.id });
                      await setContacts(contacts.filter((usr) => usr !== item));
                    }}
                    > Detele
                    </button>

                </li>
            ))}
        </ul>
        <form onSubmit={saveMovie}>
            <input type="text" placeholder="Title" name="title" onChange={e => setFormData({ ...formData, title: e.target.value })}/>
            <input type="text" placeholder="Year" name="year" onChange={e => setFormData({ ...formData, year: +e.target.value })} />
            <textarea name="description" id="" cols="30" rows="10" placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
            <input type="text" placeholder="Slug" name="slug" onChange={e => setFormData({ ...formData, slug: e.target.value })} />
            <button type="submit">Add movie</button>
        </form>
    </main>
);
}
export async function getServerSideProps() {

const movies = await prisma.contact.findMany()

return {
props: {
    data: movies
}
}
}
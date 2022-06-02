import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function contact({ data }) {
    return (
            <main className="mt-96">
                <span className="m-8 p-8"><strong>{data.title}</strong></span>
                <span className="m-8 p-8">{data.description}</span>
                <span className="m-8 p-8">{data.year}</span>
            </main>
    )
}
export async function getServerSideProps(context) {
    const {slug} = context.query
    const data = await prisma.contact.findFirst({
        where: {
            slug: slug
        } 
    })
    return {
        props: {
            data
        }
    }
}
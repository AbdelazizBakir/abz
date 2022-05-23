import React from "react";
import styles from '../../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getStaticProps() {
  const res = await fetch(prisma.message.createMany)
    try{
      const data = await res.json()
        return {
          props: { data, }
        }
    }catch (err){

    }finally{

    }
}
function Message() {
	return (
<div class="container mx-auto">
    <div class="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700">Envoyer un message</h1>
        <p class="text-gray-400">Remplissez le formulaire ci-dessous pour envoyer un message.</p>
        </div>
        <div>
        <form action="" method="POST">
            <div class="mb-6">
            <label for="name" class="block mb-2 text-sm text-gray-600">Nom complet</label>
          <input
            type="text"
            name="name"
            placeholder="ABDELAZIZ Bakir"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div class="mb-6">
          <label for="id" class="text-sm text-gray-600">Identifiant</label>
          <input
            type="text"
            name="id"
            placeholder="id_client1234"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm text-gray-600">Votre message</label>
          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
        <div class="mb-6">
        <Link href="#">
          <a>
          <button
            tkkype="44submit"
            class="w-full px-2 py-4 text-white bg-blue-500 rounded-md  focus:bg-blue-600 focus:outline-none">
                Envoyer
          </button>
          </a>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
)
}

export default Message;
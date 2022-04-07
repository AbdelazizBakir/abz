import {NextPage} from 'next';
import { useEffect, useState } from 'react'
import axois from 'axios';
import axios from 'axios';

const BlogsPage: NextPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get('')
        .then(({ data }) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err)) => console.log(err));
    }, []) 
}
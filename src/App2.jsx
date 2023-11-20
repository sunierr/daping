import { useState, useEffect } from 'react'
import Test from './test'
import './App2.css'
import { socket } from './ws.util';

export default function App2(props) {
    const [open, setOpen] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)
    //console.log(currentPage)

    useEffect(() => {
        socket.onmessage = (e) => {
            console.log("message received ")
            const data = JSON.parse(e.data);
            console.log(data)
            switch (data.subject) {
                // case 0:
                //     console.log(currentPage)
                //     if (currentPage === 0) {
                //         setCurrentPage(10)
                //     } else {
                //         setCurrentPage(val => val-1)
                //     }
                //     break;
                // case 1:
                //     console.log(currentPage);
                //     if (currentPage === 10) {
                //         setCurrentPage(0)
                //     } else {
                //         setCurrentPage(val => val+1)
                //     }
                //     break;
                case 0:
                    setCurrentPage((prevPage) => (prevPage === 0 ? 10 : prevPage - 1));
                    break;
                case 1:
                    setCurrentPage((prevPage) => (prevPage === 10 ? 0 : prevPage + 1));
                    break;
                case 2:
                    setOpen(1)
                    break;
                case 3:
                    setOpen(0)
                    break;
                default:
                    throw console.error('not working');
            }
        }
        socket.onerror = (err) => {
            console.log(`error occured: ${err}`)
        }
        socket.ontimeout = () => {
            console.log('WebSocket connection timed out');
        };

        return (() => {

        })
    }, [])
    let addresses = [
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/09/14/be1bf5b58547478fa88be937a6d0e7fc.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/09/09/6a39d075c5b74946a94650dea666ebf6.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/08/27/9fcd8c5c4f3e47a3a06bd9296a96df8c.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/08/26/267e6839ae4a4f3e93ff056dc43bf815.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/29/57afc68643b7440e8e7519cb502695ca.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/16/2593649d5b0942d799050bf89c6b7d56.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/19/cd13b54b7cf84eb69e05241c2fda1e34.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/05/09/3711ef28e10d4d0ebb617d13e42bd410.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/03/21/76eb1bcd4101424680cdc76289f9bf73.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/03/08/6caafb4bc1984e2fb7a39fadadcebdd6.html',
        'https://eerduosirongmei.media.xinhuamm.net/pages/2023/01/21/d5bbc34d7050413b803edf48f714291d.html'
    ];

    return (
        <>
            {open ? <iframe src={addresses[currentPage]} title='show'></iframe> : <Test open={open} setOpen={setOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>
    )
}
import { useState, useEffect, useRef } from 'react'
import Paginate from './Paginate'
import './App2.css'
import { socket } from './ws.util';

export default function App2(props) {
    const [open, setOpen] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [currentPage, setCurrentPage] = useState(0)
    const myIframe = useRef(null);
    // let addresses1 = [
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/09/14/be1bf5b58547478fa88be937a6d0e7fc.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/09/09/6a39d075c5b74946a94650dea666ebf6.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/08/27/9fcd8c5c4f3e47a3a06bd9296a96df8c.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/08/26/267e6839ae4a4f3e93ff056dc43bf815.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/29/57afc68643b7440e8e7519cb502695ca.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/16/2593649d5b0942d799050bf89c6b7d56.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/06/19/cd13b54b7cf84eb69e05241c2fda1e34.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/05/09/3711ef28e10d4d0ebb617d13e42bd410.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/03/21/76eb1bcd4101424680cdc76289f9bf73.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/03/08/6caafb4bc1984e2fb7a39fadadcebdd6.html',
    //     'https://eerduosirongmei.media.xinhuamm.net/pages/2023/01/21/d5bbc34d7050413b803edf48f714291d.html'
    // ];

    let addresses = [
        'test/0.html',
        'test/1.html',
        'test/2.html',
        'test/3.html',
        'test/4.html',
        'test/5.html',
        'test/6.html',
        'test/7.html',
        'test/8.html',
        'test/9.html',
        'test/10.html'
    ];
    const itemsPerpage = 8;
    const lastPageFirstItemIndex = addresses.length % itemsPerpage ? addresses.length - (addresses.length % itemsPerpage) : null;

    var isLastPage = (currentPage) => {
        var zuo, you, shang, xia;
        if (currentPage >= lastPageFirstItemIndex) {
            zuo = () => {
              
                setCurrentPage((prevPage) => (prevPage === lastPageFirstItemIndex ? addresses.length - 1 : prevPage - 1));
            }
            you = () => {
                setCurrentPage((prevPage) => {
                  
                    return (prevPage === addresses.length - 1 ? lastPageFirstItemIndex : prevPage + 1)
                });
            }

            shang = () => {
                setCurrentPage((prevPage) => {
                    if (prevPage - 4 >= lastPageFirstItemIndex) {
                        return prevPage - 4;
                    } else {
                        return addresses.length - 1
                    }
                });
            }

            xia = () => {
                setCurrentPage((prevPage) => {
                    if (prevPage + 4 <= addresses.length - 1) {
                        return prevPage + 4;
                    } else {
                        return lastPageFirstItemIndex
                    }
                });
            }


        } else {
           
            zuo = () => {
                setCurrentPage((prevPage) => (prevPage === itemOffset ? itemOffset + itemsPerpage - 1 : prevPage - 1));
            };
            you = () => {
                setCurrentPage((prevPage) => (prevPage === itemOffset + itemsPerpage - 1 ? itemOffset : prevPage + 1));
            }

            shang = () => {
                setCurrentPage((prevPage) => {
                    if (prevPage - 4 >= itemOffset) {
                        return prevPage - 4;
                    } else {
                        return itemOffset + 7 - 3 + (prevPage - itemOffset)
                    }
                });
            }

            xia = () => {
                setCurrentPage((prevPage) => {
                    if (prevPage + 4 <= itemOffset + 7) {
                        return prevPage + 4;
                    } else {
                        return itemOffset + prevPage - (itemOffset + 7 - 3)
                    }
                });
            }
        }
        return { zuo, you, shang, xia }

    }

    useEffect(() => {

        socket.onmessage = (e) => {
            console.log("message received ")
            const data = JSON.parse(e.data);
            console.log(data);

            var element;
            var holder = isLastPage(currentPage)
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
                    //setCurrentPage((prevPage) => (prevPage === 0 ? 10 : prevPage - 1));
                    holder.zuo();
                    break;
                case 1:
                    //setCurrentPage((prevPage) => (prevPage === 10 ? 0 : prevPage + 1));
                    holder.you();
                    break;
                case 2:
                    setOpen(1)
                    break;
                case 3:
                    setOpen(0)
                    break;
                case 4:
                    holder.shang()
                    break;
                case 5:
                    holder.xia()
                    break;
                case 6:
                    if (myIframe.current) {
                        const iframeContentWindow = myIframe.current.contentWindow;
                        iframeContentWindow.scrollTo({
                            top: iframeContentWindow.scrollY - 100, // Adjust the amount of pixels you want to scroll
                            behavior: 'smooth',
                        });
                    }
                    break;
                case 7:
                    if (myIframe.current) {
                        const iframeContentWindow = myIframe.current.contentWindow;
                        iframeContentWindow.scrollTo({
                            top: iframeContentWindow.scrollY + 100, // Adjust the amount of pixels you want to scroll
                            behavior: 'smooth',
                        });
                    }
                    break;
                case 8:
                    element = document.querySelector('#root > div > ul > li.previous > a');
                    if(element){
                        element.click()
                    }
                    
                    break;
                case 9:
                    element = document.querySelector('#root > div > ul > li.next > a');
                    if(element){
                        element.click()
                    }
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
    }, [currentPage])

    return (
        <>
            {open ? <iframe ref={myIframe} src={addresses[currentPage]} title='show'></iframe> : <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerpage} totalItems={addresses.length} itemOffset={itemOffset} setItemOffset={setItemOffset} />}
        </>
    )
}
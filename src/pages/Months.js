import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { ref, getDownloadURL } from "firebase/storage";


import { storage } from "../firebase";
import notes from '../data/data';

let [...arr] = notes;

// Find all the prefixes and items.
// listAll(listRef)
//     .then((res) => {
//         res.prefixes.forEach((folderRef) => {
//             // All the prefixes under listRef.
//             // You may call listAll() recursively on them.
//         });
//         res.items.forEach((itemRef) => {
//             // All the items under listRef.
//             console.log(itemRef);
//         });
//     }).catch((error) => {
//         // Uh-oh, an error occurred!
//     });

export const Months = () => {
    let match = useRouteMatch();
    let url = getDownloadURL(ref(storage, 'rec/Business-Result-04-2022.pdf'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // console.log("here");
            // console.log(url);
            return <h3>Requested topic ID: {url}</h3>;
            // // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = (event) => {
            //     const blob = xhr.response;
            // };
            // xhr.open('GET', url);
            // xhr.send();

            // // Or inserted into an <img> element
            // const img = document.getElementById('myimg');
            // img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });
    return (
        <Router>
            <Switch>
                {/* <Route path={`${match.url}/:topicId`}>
                    <Topic />
                </Route> */}
                <Route path={`${match.path}`}>
                    <h2 className="text-3xl my-4 md:my-8 md:text-5xl font-extrabold text-red-600 m-auto mt-4 w-[300px] md:w-[460px] text-center">MAYCHA <br></br> BUSINESS RESULT</h2>

                    <div className=" mx-auto flex row flex-wrap items-center justify-center mobile:w-[381px] medium-mobile:w-[393px] mobile:mx-auto h-fit sm:w-[80%] sm:items-start md:justify-start">
                            {arr.map(i => {
                                // console.log(i.length >= 10 ? i.id : `0${i.id}`)
                                if (i.id <= 11) {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <a className=" mobile:w-[126px] mobile:h-[126px] medium-mobile:w-[130px] medium-mobile:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center flex-col sm:py-2 px-2 sm:px-4 text-center bg-transparent mr-0 mt-0 font-bold border-black border-[1px] rounded-lg bg-red-600 text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                            href={`https://firebasestorage.googleapis.com/v0/b/rec-app-803db.appspot.com/o/rec%2FBusiness-Result-${i.id >= 10 ? i.id : `0${i.id}`}-2022.pdf?alt=media&token=95ece86a-0137-496b-b5f0-cbd3a603dfbc`}
                                        >
                                            <p className=" w-full">Tháng {i.id}</p>
                                            <p>2022</p>
                                        </a>
                                    )
                                }
                                // eslint-disable-next-line react/jsx-key
                                return (<a className=" mobile:w-[126px] mobile:h-[126px] medium-mobile:w-[130px] medium-mobile:h-[130px] md:w-[140px] md:h-[140px] flex items-center justify-center flex-col sm:py-2 px-2 sm:px-4 text-center bg-transparent mr-0 mt-0 font-bold border-black border-[1px] rounded-lg bg-slate-50 text-gray-300 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                    href={`/months`}
                                >
                                    <p className=" w-full">Tháng {i.id <= 12 ? i.id : i.id % 12}</p>
                                    <p>{i.id === 12 ? 2022 : 2023}</p>
                                </a>)

                            })}
                    </div>
                </Route>
            </Switch>
        </Router >

    )
}


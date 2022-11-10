import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";


import { storage } from "../firebase";
import notes from '../data/data';

let [...arr] = notes;


const listRef = ref(storage, 'rec');


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
                    <h2 className="mb-4 text-3xl font-extrabold text-red-600 m-auto mt-4 w-[300px] text-center">MAYCHA BUSINESS RESULT</h2>
                    <div className="flex flex-col p-8 w-screen">
                        <div className="flex row flex-wrap items-center md:items-start md:justify-center">
                            {arr.map(i => {
                                // console.log(i.length >= 10 ? i.id : `0${i.id}`)
                                return (
                                    <a className="w-[100px] h-[100px] flex items-center justify-center flex-col py-2 px-4 bg-transparent mr-2 mt-2 text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 "
                                        // to={`${match.url}/${i.id}`}
                                        href={`https://firebasestorage.googleapis.com/v0/b/rec-app-803db.appspot.com/o/rec%2FBusiness-Result-${i.id >= 10 ? i.id : `0${i.id}`}-2022.pdf?alt=media&token=95ece86a-0137-496b-b5f0-cbd3a603dfbc`}
                                    >
                                        <p className=" w-[72px]">Tháng {i.id}</p>
                                        <p>2022</p>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router >

    )
}
function Topic() {
    let { topicId } = useParams();
    console.log(topicId)
    let i = topicId.length == 2 ? topicId : "0" + topicId;
    return <a href={`https://firebasestorage.googleapis.com/v0/b/rec-app-803db.appspot.com/o/rec%2FBusiness-Result-${i}-2022.pdf?alt=media&token=95ece86a-0137-496b-b5f0-cbd3a603dfbc`}>Link</a>
}
function Month() {
    let { topicId } = useParams();

    getDownloadURL(ref(storage, 'rec/Business-Result-01-2022.pdf'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            console.log("here");
            console.log(url);
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
}
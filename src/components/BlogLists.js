import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useNavigate } from 'react-router-dom'

import postData from '../mockdata/PostData';
import BlogDetail from './BlogDetail';


const BlogLists = () => {
const navigateTo = useNavigate();

    const style = {
        width: "18rem"
    }


    let cardsCollection = [];
    for (let index = 0; index < postData.length; index++) {
        const thisCard = postData[index];
        const dom =
            <div className="col-4">
                <div className="card">
                    <code>{thisCard.src}</code>
                    <img className="card-img-top" key={thisCard?.id} src={thisCard?.src} alt={thisCard?.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{thisCard?.title}</h5>
                        <p className="card-text">{thisCard?.snippet}</p>
                        <button className="btn btn-primary" onClick={() => navigateTo('/news-detail', { state : { thisCard }}) }>Go somewhere</button>
                    </div>
                </div>
            </div>
        cardsCollection.push(dom);
    }
    return cardsCollection;

}

export default BlogLists
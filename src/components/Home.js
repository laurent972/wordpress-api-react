import react, { useEffect, useState } from 'react';
import {Link} from  "@reach/router";
import React from 'react';
import Navbar from './Navbar';
import '../style/Style.css';
import Moment from 'react-moment';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const wordPressSiteUrl = 'http://localhost/wordpress/wp-json';

    async function getApi(){
        const response = await fetch(`${wordPressSiteUrl}/wp/v2/posts`)
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        
    }
    

    useEffect(() =>{
        getApi().then(res =>{
            setPosts(res);
            setLoading(true);
        })
    },[])

    return (
        <div>
            {console.log(posts,loading)}
            <Navbar />
            <div className='container'>
                <div className="mt-5 post-container">
                            {loading ? (
                                <>
                                {posts.map((post) =>(
                                    <div key={post.id} className="card border-dark mb-3">
                                            <h3 className='p-3'><Link to={`/post/${post.id}`}>{post.title.rendered}</Link></h3>
                                            <div className='card-body'>
                                                <div className="card-text post-content">
                                                <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                                                <Link to={`/post/${post.id}`} className='btn btn-secondary float-end'>Read more</Link>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <Moment fromNow>{post.date}</Moment>
                                            </div>
                                    </div>
                                ) )}
                                </>
                            ) : `Loading ...`}
                </div>
            </div>
        </div>
    );
};

export default Home;
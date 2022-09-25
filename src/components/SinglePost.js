
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Moment from 'react-moment';



const SinglePost = () => {
    const [loading, setLoading] = useState(false);
    const [thePost, setThePost] = useState([]);
    const wordPressSiteUrl = 'http://localhost/wordpress/wp-json';
    const url = window.location.href;
    const strs = url.split('/');
    const id = strs.at(-1)
 

    async function getApi(){
       
        const response = await fetch(`${wordPressSiteUrl}/wp/v2/posts/${id}`)
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        
    }
    
    
    useEffect(() =>{
       
        getApi().then(res =>{
            setThePost(res);
            setLoading(true);
        })
    },[])

    console.log(thePost);
    return (
        <>
            <Navbar />
            {loading ? (
                <>
                    <div className="card border-dark mb-3">
                            <h3 className='p-3'>{thePost.id}</h3>
                            <div className='card-body'>
                                <div className="card-text post-content">
                                <div dangerouslySetInnerHTML={{__html: thePost.content.rendered}}/>
                                
                                </div>
                            </div>
                            <div className="card-footer">
                                <Moment fromNow>{thePost.date}</Moment>
                            </div>
                        
                    </div>
                 </>
                )  : `Loading ...`}
</>
    );
};

export default SinglePost;
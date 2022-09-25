import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassWord] = useState();
    const [userEmail, setUserEmail] = useState();
    const [loggedIn, setLoggedIn] = useState();
    const [loading, setLoading] = useState();

    return (
        <>
            <Navbar />
            <form onSubmit={}>
                
            </form>
        </>
    );
};

export default Login;
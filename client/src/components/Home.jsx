import React from 'react';
import { Link } from 'react-router-dom';

const Home= () => {
return (
<div>
    <header>
    <h1>My Simple React Home Page</h1>
    </header>
    <main>
    <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
    <div>
    <Link to="/login">Login</Link>
    </div>
    <div>
        <Link to="/signup">Sign Up</Link>
    </div>
    </main>
</div>
);
}

export default Home;
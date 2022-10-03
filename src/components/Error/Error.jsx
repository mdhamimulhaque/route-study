import React from 'react';
import Header from '../Header/Header';

const Error = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: '100%', fontSize: "55px", color: "red" }}>
                <h1>404 Not found</h1>
            </div>

        </div>
    );
};

export default Error;
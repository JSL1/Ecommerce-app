import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    return (
        <h1>
            Online shop store
            <Link to="/store">Go</Link>
        </h1>
    );
}

export default LandingPage;
import React from 'react';
import { Home } from './pages/homePage.jsx';
import { Todos } from './pages/todosPage.jsx';
import { NoPage } from './pages/noPage.jsx';
import { Routes, Route } from 'react-router-dom';


export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/:id" element={<Todos />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/404" element={<NoPage />} />
            </Routes>
	    </>
    );
}




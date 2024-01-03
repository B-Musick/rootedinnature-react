import { useState, useEffect } from 'react';
import PlantCreate from './components/PlantCreate';
// import Dropdown from './components/Dropdown';
import TopNavBar from './components/TopNavBar';
import AccordionPage from './pages/AccordionPage';
import SearchPage from './pages/SearchPage';
import PlantsPage from './pages/PlantsPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <TopNavBar />
                <Routes>
                    {/* Make sure only one route shown at a time */}
                    {/* Content inswitch depends on the route */}
                    <Route path="/accordion" element={<AccordionPage />} />
                    {/* One route for each page we want to render */}
                    {/* Nest the component we want to show within div when on route */}
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/plants" element={<PlantsPage />} />
                    <Route path="/dropdown" element={<DropdownPage />} />
                    <Route path="/modal" element={<ModalPage />} />
                </Routes>
            </Router>

            {/* <h1>Make Plant</h1> */}
            {/* Pass createPlant method to child, then it will call this method within the child to pass the input data back up to here in the parent */}
            {/* <PlantCreate/> */}
        </div>
    )
}

export default App;
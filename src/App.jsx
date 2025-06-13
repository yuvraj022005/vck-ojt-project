

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

import NotFoundPage from './pages/NotFoundPage';

// Header
import Header from './components/Header/Headers';
//Footer
import Footer from "./components/Footer/Footers";
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);

  };

  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Yuvraj Samadhan Dhembare."
          studentPhotoUrl="/Images/yuvraj.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Header />
      
      <main >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ChatbotComponent/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

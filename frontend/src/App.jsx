import React, { useState } from 'react';
import Home from './modules/Home/Home';
import { InquiryModal } from './components/ui/Modal';
import './App.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Home onOpenProject={() => setIsModalOpen(true)} />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;

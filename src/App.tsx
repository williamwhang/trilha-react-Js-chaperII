import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

    function handleOpenTransactionModal(){
      setIsNewTransactionModal(true);
    }

    function handleCloseTransactionModal(){
        setIsNewTransactionModal(false);
    }
    
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseTransactionModal}
      
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}


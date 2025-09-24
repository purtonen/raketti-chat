import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from 'pages';
import 'App.css'
import { UserContextProvider } from 'context/user';
import { ChatContextProvider } from 'context/chat';

function App() {
  return (
    <UserContextProvider>
      <ChatContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </ChatContextProvider>
    </UserContextProvider>
  );
}

export default App;

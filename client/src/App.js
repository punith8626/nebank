import React from 'react'
import './App.css';
import { Login } from './components/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Requests from './components/requests/Requests';
import Page404 from './components/common/Page404';
import CreateRequest from './components/requests/CreateRequest';
// import ProtectedRoute from './Layouts/ProtectedRoute';

function App() {
  // const auth = true;
  return (
    <div className="App d-flex flex-column h-100">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Requests />} />
            {/* <Route exact path={['/dashboard/requests/', '/dashboard/requests/:id']} element={<CreateRequest />} /> */}
            {['/dashboard/requests', '/dashboard/requests/:id'].map((path) => (
              <Route key={path} path={path} element={<CreateRequest />} />
            ))}
            {/* <Route exact path="/dashboard" component={Requests} auth={auth} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;

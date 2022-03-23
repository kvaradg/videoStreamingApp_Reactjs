import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import StreamBasedRoutes from "./routes/StreamBasedRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <ToastContainer />
        <StreamBasedRoutes />
      </main>
    </Router>
  );
};

export default App;

// import React from "react";
// import SignIn from "./components/authComponent/SignIn";

// const App = () => {
//   return (
//     <div>
//       <SignIn />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// // import Booking from "./pages/Services/Booking/Booking";
// // import DesignerDetails from "./pages/Services/DesignerDetails";
// import Router from "@/routes";
// // import SpecialOffer from "./pages/header/SpecialOffer";
// // import MostPopular from "./pages/Services/MostPopular";

// const App: React.FC = () => {
//   return (
//     // <Booking />
//     // <DesignerDetails />
//     <Router />
//     // <MostPopular />
//     // <SpecialOffer />
//   );
// };

// export default App;

import Router from "./routes/Router";

import { UserProvider } from "@/context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;

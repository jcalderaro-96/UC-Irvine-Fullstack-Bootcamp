// updated client/src/App.tsx with green comments
import { Outlet } from 'react-router-dom'; // Outlet for nested routes
import Navbar from './components/Navbar'; // Navbar component

function App() {
  return (
    <div className="container">
      <Navbar /> {/* show navbar on all pages */}
      <main>
        <Outlet /> {/* render child routes here */}
      </main>
    </div>
  );
}

export default App;
// end of file

<<<<<<< HEAD:smarter-tasks/src/pages/NotFound.tsx
import { Link } from "react-router-dom";



const NotFound = () => {
    
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to={"/"}><button id="backToHomeButton">
          Back to Home
        </button></Link>
        
      </div>
    );
  };
  
=======
import { Link } from "react-router-dom";



const NotFound = () => {
    
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to={"/home"}><button id="backToHomeButton">
          Back to Home
        </button></Link>
        
      </div>
    );
  };
  
>>>>>>> 776b855d46fa1d821cdd6727e91074193292f09c:smarter-tasks/src/pages/Notfound.tsx
  export default NotFound;
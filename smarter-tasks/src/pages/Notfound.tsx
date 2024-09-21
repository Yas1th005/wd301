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
  
  export default NotFound;
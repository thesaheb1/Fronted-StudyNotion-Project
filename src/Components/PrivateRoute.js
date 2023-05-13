import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function PrivateRoute({isLoggedIn,children}) { 
    
        if(isLoggedIn)
        {
           return children;
        }
        else
        {
            setTimeout(() => {
                toast.error("Please login first");
                
            }, 1000);
            return   <Navigate to="/login"/>;
        }
  
}

export default PrivateRoute
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LogOut, User, UserPlus } from 'lucide-react';
import { toast } from 'react-toastify'; // Importing react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions
import { db } from '../store/firebase'; // Firebase Firestore instance

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState<string | null>(null); // State to store the user name
  const navigate = useNavigate();

  // Fetch user name from Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      if (user && user.uid) {
        try {
          const docRef = doc(db, 'users', user.uid); // Assume 'users' collection with user.uid as document ID
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const name = docSnap.data().name;
            setUserName(name);
          } else {
            console.log('No such user document in Firestore!');
          }
        } catch (error) {
          console.error('Error fetching user name:', error);
        }
      }
    };

    fetchUserName();
  }, [user]);

  const handleLogout = () => {
    logout();
    toast.success('You have successfully logged out!', {
      position: 'top-right',
      autoClose: 3000,
    });
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            PlayTurf
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-600">
                  Welcome, {userName || 'User'}
                </span>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-blue-600 hover:text-blue-700">
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                >
                  <User className="w-4 h-4 mr-1" />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

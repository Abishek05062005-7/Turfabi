
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null); // Define the type as per your user object
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update state when user changes
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [auth]);

  const logout = () => {
    signOut(auth).catch((error) => console.error('Error signing out:', error));
  };

  return { user, logout };
};


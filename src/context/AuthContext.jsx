import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('aksesnonton_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login & role assignment
    const isAdmin = email.toLowerCase() === 'admin@aksesnonton.com';
    const isPremium = email.toLowerCase().includes('premium');
    
    const userData = { 
      email, 
      name: email.split('@')[0], 
      photo: null,
      role: isAdmin ? 'admin' : 'user',
      isPremium: isAdmin || isPremium
    };
    
    setUser(userData);
    localStorage.setItem('aksesnonton_user', JSON.stringify(userData));
    return true;
  };

  const register = (name, email, password) => {
    // Simulate registration
    const isPremium = email.toLowerCase().includes('premium');
    const userData = { 
      name, 
      email, 
      photo: null, 
      role: 'user',
      isPremium: isPremium
    };
    
    setUser(userData);
    localStorage.setItem('aksesnonton_user', JSON.stringify(userData));
    return true;
  };

  const requestVerification = () => {
    if (!user) return;
    const pendingUser = { ...user, isPending: true };
    setUser(pendingUser);
    localStorage.setItem('aksesnonton_user', JSON.stringify(pendingUser));

    // Add to global pending list for admin
    const allPending = JSON.parse(localStorage.getItem('aksesnonton_pending_payments') || '[]');
    if (!allPending.find(p => p.email === user.email)) {
      allPending.push({ ...user, date: new Date().toISOString() });
      localStorage.setItem('aksesnonton_pending_payments', JSON.stringify(allPending));
    }
  };

  const adminApproveUser = (email) => {
    // If it's the current user, update their state immediately
    if (user && user.email === email) {
      const approved = { ...user, isPremium: true, isPending: false };
      setUser(approved);
      localStorage.setItem('aksesnonton_user', JSON.stringify(approved));
    }

    // Clean up the pending list
    const allPending = JSON.parse(localStorage.getItem('aksesnonton_pending_payments') || '[]');
    const filtered = allPending.filter(p => p.email !== email);
    localStorage.setItem('aksesnonton_pending_payments', JSON.stringify(filtered));

    // Persist verified status for future logins (Simulation)
    const verifiedUsers = JSON.parse(localStorage.getItem('aksesnonton_verified_users') || '[]');
    if (!verifiedUsers.includes(email)) {
      verifiedUsers.push(email);
      localStorage.setItem('aksesnonton_verified_users', JSON.stringify(verifiedUsers));
    }
  };

  const adminRejectUser = (email) => {
    if (user && user.email === email) {
      const rejected = { ...user, isPending: false };
      setUser(rejected);
      localStorage.setItem('aksesnonton_user', JSON.stringify(rejected));
    }
    const allPending = JSON.parse(localStorage.getItem('aksesnonton_pending_payments') || '[]');
    const filtered = allPending.filter(p => p.email !== email);
    localStorage.setItem('aksesnonton_pending_payments', JSON.stringify(filtered));
  };

  const upgradeToPremium = () => {
    if (!user) return;
    const upgradedUser = { ...user, isPremium: true, isPending: false };
    setUser(upgradedUser);
    localStorage.setItem('aksesnonton_user', JSON.stringify(upgradedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aksesnonton_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, login, register, logout, upgradeToPremium, 
      requestVerification, adminApproveUser, adminRejectUser,
      loading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

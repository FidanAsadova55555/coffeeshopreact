import React from 'react';
import { Navigate } from 'react-router';
import useCartStore from '@/store/cartstore';

const ProtectedRoute = ({ element }) => {
  const { user } = useCartStore();
  return user ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

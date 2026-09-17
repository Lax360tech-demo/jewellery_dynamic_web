import React, { useEffect } from 'react';
import { AdminLayout } from '../admin/AdminLayout';

export const Admin = () => {
  useEffect(() => {
    document.title = 'Lax360 | Salon Operations Dashboard';
    return () => {
      document.title = 'Lax360 | Haute Joaillerie & Fine Diamonds';
    };
  }, []);

  return <AdminLayout />;
};

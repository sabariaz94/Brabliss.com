'use client';

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

import AddProduct from '@/app/(pages)/admin/addProducts/page';
// import QuoteRequests from '@/app/dashboard/quotes/page';
// import AllUsers from '@/app/dashboard/users/page';

import { BsChatLeftQuoteFill } from 'react-icons/bs';
import { FaFirstOrderAlt } from 'react-icons/fa6';
import { MdLogout } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

// import { auth, signOut } from '@/firebase/FirebaseConfig.js';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import AdminOrdersPage from '@/app/(pages)/admin/orders/page';

// Navigation without type annotations
const NAVIGATION = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'products', title: 'Products', icon: <ShoppingCartIcon /> },
  { segment: 'orders', title: 'Orders', icon: <FaFirstOrderAlt /> },
  { segment: 'quoteRequests', title: 'QuoteRequests', icon: <BsChatLeftQuoteFill /> },
  { segment: 'users', title: 'Users', icon: <FiUsers /> },
  { segment: 'signOut', title: 'SignOut', icon: <MdLogout /> },
];

// MUI Theme
const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

// Content Component
function DemoPageContent({ pathname }) {
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/signOut') {
      signOut(auth)
        .then(() => {
          toast.success('Signed out successfully!');
          router.push('/login');
        })
        .catch((error) => {
          console.error(error);
          toast.error('An error occurred while signing out.');
        });
    }
  }, [pathname, router]);

  const renderComponent = () => {
    switch (pathname) {
      case '/products':
        return <AddProduct />;
      case '/orders':
        return <AdminOrdersPage />;
      case '/dashboard':
        return <AddProduct />;
      case '/quoteRequests':
        return <AddProduct />;
      case '/users':
        return <AddProduct />;
      default:
        return <Typography>Page Not Found</Typography>;
    }
  };

  if (pathname === '/signOut') return null;

  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      {renderComponent()}
    </Box>
  );
}

// Main Layout Component
export default function DashboardLayoutBranding(props) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = props.window ? props.window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{ title: 'BraBliss', homeUrl: '/' }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

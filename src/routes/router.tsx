import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users/Users";
import Main from "../pages/Main/Main";
import Brands from "../pages/Brands/Brands";
import Products from "../pages/Products/Products";
import Category from "../pages/Category/Category";
import Information from "../pages/Information/Information";
import Contacts from "../pages/Contacts/Contacts";
import Settings from "../pages/Settings/Settings";
import AddCategory from "../componnents/AddCategory/AddCategory";
import SettingHome from "../componnents/SettingHome/SettingHome";
import Certificates from "../componnents/Certificates/Certificates";
import PrivacyPolicy from "../componnents/PrivacyPolicy/PrivacyPolicy";
import ContactMessages from "../pages/Contact Messages/ContactMessages";
import ProductAdd from "../componnents/ProductAdd/ProductAdd";
import AddBrand from "../componnents/Form/AddBrand/AddBrand";
import Login from "../pages/Login/Login";
import MainLayout from "../pages/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SettingsAbout from "../componnents/SettingAbout/SettingsAbout";
import ProductEdit from "../componnents/ProductEdit/ProductEdit";
import AddCertification from "../componnents/AddCertification/AddCertification";
import EditCertification from "../componnents/EditCertification/EditCertification";
import UpdateCategory from "../componnents/Category/updateCategory/updateCategory";


type ProtectedRouteProps = {
  children: React.ReactNode;
}


// Assume this function checks if the user is authenticated
const isAuthenticated = () => {
  // Implement your authentication check logic here
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands/addBrand",
        element: (
          <ProtectedRoute>
            <AddBrand />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands/update/:id",
        element: (
          <ProtectedRoute>
            <AddBrand />
          </ProtectedRoute>
        ),
      },
      {
        path:'/products',
        element:(
          <ProtectedRoute>
            <Products/>
          </ProtectedRoute>
        )
      },
      {
        path: "/products/addProduct",
        element: <ProductAdd/>
    },
    {
        path: "/products/EditProduct/:productNum",
        element: <ProductEdit/>
    },
      
      {
        path:'/categories',
        element:(
          <ProtectedRoute>
            <Category/>
          </ProtectedRoute>
        )
      },
      {
        path:'/categories/addCategory',
        element:(
          <ProtectedRoute>
            <AddCategory/>
          </ProtectedRoute>
        )
      },
      {
        path:'/categories/update-category/:id',
        element:(
          <ProtectedRoute>
            <UpdateCategory/>
          </ProtectedRoute>
        )
      },


      {
        path:'/users',
        element:(
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>
        )
      },
      {
        path:'/contacts',
        element:(
          <ProtectedRoute>
            <Contacts/>
          </ProtectedRoute>
        )
      },
      {
        path:'/contactMessages',
        element:(
          <ProtectedRoute>
            <ContactMessages/>
          </ProtectedRoute>
        )
      },
      {
        path: "settings/system_settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings/certificates",
        element: (
          <ProtectedRoute>
            <Certificates />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings/certificates/add",
        element: (
          <ProtectedRoute>
            <AddCertification/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings/certificates/update/:itemId",
        element: (
          <ProtectedRoute>
            <EditCertification/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings/privacy_policy",
        element: (
          <ProtectedRoute>
            <PrivacyPolicy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings/pages_settings/home",
        element: (
          <ProtectedRoute>
            <SettingHome />
          </ProtectedRoute>
        ),
  
      },
      {
        path: "/settings/pages_settings/about",
        element: (
          <ProtectedRoute>
            <SettingsAbout />
          </ProtectedRoute>
        ),
  
      },
      {
        path:'/info',
        element:(
          <ProtectedRoute>
            <Information/>
          </ProtectedRoute>
        )
      },
      // ==================================
      // ... More protected routes
      // =================================
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

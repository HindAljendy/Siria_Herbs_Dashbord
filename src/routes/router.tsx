import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Users from '../pages/Users/Users'
import Main from '../pages/Main/Main'
import Brands from '../pages/Brands/Brands'
import Products from '../pages/Products/Products'
import Category from '../pages/Category/Category'
import Information from '../pages/Information/Information'
import App from '../App'
import Contacts from '../pages/Contacts/Contacts'
import Settings from '../pages/Settings/Settings'
import AddCategory from '../componnents/AddCategory/AddCategory'
import SettingHome from '../componnents/SettingHome/SettingHome'
import SettingsAbout from '../componnents/SettingAbout/SettingsAbout'
import Certificates from '../componnents/Certificates/Certificates'
import PrivacyPolicy from '../componnents/PrivacyPolicy/PrivacyPolicy'
import SystemSettings from '../componnents/SystemSettings/SystemSettings'
import PagesSettings from '../componnents/PagesSettings/PagesSettings'
import ContactMessages from '../pages/Contact Messages/ContactMessages'
import ProductAdd from '../componnents/ProductAdd/ProductAdd'
import UpdateCategory from '../componnents/Category/updateCategory/updateCategory'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/brands",
                element: <Brands />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/addProduct",
                element: <ProductAdd/>
            },
            {
                path: "/categories",
                element: <Category />,
                children: [
                    {
                        path: "addCategory",
                        element: <AddCategory />,
                    },
                    {
                        path: "update-category/:itemId",
                        element: <UpdateCategory />,
                    },
                ]
            },
            {
                path: "/contacts",
                element: <Contacts />
            },

            {
                path: "/contactMessages",
                element: <ContactMessages />
            },

            {
                path: "/settings",
                element:<Settings/>,
                children: [
                    {
                        path: "certificates",
                        element: <Certificates />,
                    },
                    {
                        path: "privacy_policy",
                        element: <PrivacyPolicy />,
                    },
                    {
                        path: "system_settings",
                        element: <SystemSettings />,
                    },

                    {
                        path: "pages_settings",
                        element:<PagesSettings/>,
                        children:[
                            {
                    
                                path: "home",
                                element: <SettingHome />,
                            },
                            {
                                path: "about",
                                element: <SettingsAbout />,
                            }

                        ]
                    },
                ]
            },
            {
                path: "/info",
                element: <Information />
            },
            {
                path: "/users",
                element: <Users />
            },
        ]
    }
]);


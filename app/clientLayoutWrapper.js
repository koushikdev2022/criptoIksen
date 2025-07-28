'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./ui/sidebar";
import Insideheader from "./ui/insideheader";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function ClientLayoutWrapper({ children }) {
    const [hasToken, setHasToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    // Define public routes that don't require authentication
    const publicRoutes = ['/', '/about-us', '/contact', '/pricing', '/how-it-works', '/features', '/privacy', '/dashboard', '/faqs'];
    const isPublicRoute = publicRoutes.includes(pathname);

    // Function to check token validity
    const checkTokenValidity = () => {
        try {
            const storedToken = sessionStorage.getItem("cryptoToken");
            if (!storedToken) return false;

            const parsedToken = JSON.parse(storedToken);
            const token = parsedToken?.token;

            // Add any additional token validation logic here if needed
            // For example: check expiration, format, etc.
            return !!token;
        } catch (error) {
            console.error("Error parsing token:", error);
            // Clear invalid token
            sessionStorage.removeItem("cryptoToken");
            return false;
        }
    };

    useEffect(() => {
        const validateToken = () => {
            const tokenExists = checkTokenValidity();
            setHasToken(tokenExists);
            setIsLoading(false);

            // Redirect to home if no token and trying to access protected route
            if (!tokenExists && !isPublicRoute) {
                router.push('/');
            }
        };

        validateToken();

        // Listen for storage changes (for logout in other tabs)
        const handleStorageChange = (e) => {
            if (e.key === "cryptoToken") {
                validateToken();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        // Also check periodically in case token changes
        const interval = setInterval(validateToken, 1000);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, [pathname, isPublicRoute, router]);
    const WhatsAppButton = (
        // <a
        //     href="https://wa.me/919999999999"
        //     className="fixed bottom-5 right-5 w-[60px] h-[60px] z-[100] bg-[#25D366] rounded-full flex justify-center items-center shadow-lg"
        //     target="_blank"
        //     aria-label="Chat on WhatsApp"
        // >
        //     <img
        //         src="https://img.icons8.com/ios-filled/50/25D366/whatsapp--v1.png"
        //         alt="WhatsApp Support"
        //         className="w-[30px] h-[30px]"
        //     />
        // </a>
        <a
            href="https://wa.me/61416206144"
            className="fixed bottom-5 right-5 w-[60px] h-[60px] z-[100] bg-[#25D366] rounded-full flex justify-center items-center shadow-lg"
            target="_blank"
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="white"
            >
                <path d="M20.52 3.48A11.8 11.8 0 0012 .5C5.6.5.5 5.6.5 12c0 2.1.6 4.2 1.6 6L.5 23.5 5.9 22c1.8 1 3.9 1.5 6.1 1.5 6.4 0 11.5-5.1 11.5-11.5 0-3.1-1.2-6-3.5-8.02zM12 21.5c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.1.8.9-3-.3-.4C3.2 15.2 2.5 13.6 2.5 12 2.5 6.8 6.8 2.5 12 2.5c2.6 0 5 1 6.8 2.8A9.6 9.6 0 0121.5 12c0 5.2-4.3 9.5-9.5 9.5zm5.2-7.5c-.3-.2-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1s-.7.9-.9 1c-.2.1-.5.2-.9 0-.4-.2-1.5-.6-2.8-1.9-1-1-1.6-2.2-1.8-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.3.3-.5.5-.8.2-.3 0-.6 0-.9-.1-.3-.9-2.2-1.2-3-.3-.8-.6-.7-.8-.7H6c-.2 0-.5 0-.8.3s-1 1-.9 2.3c.1 1.2.7 2.3 1.1 2.9.1.2 1.4 2.2 3.3 3.6C11.4 17 13 17.5 13.7 17.7c.6.2 1.1.2 1.5.1.5-.1 1.6-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
            </svg>
        </a>

    );


    // Show loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    // If no token and trying to access protected route, show loading while redirecting
    if (!hasToken && !isPublicRoute) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    // Authenticated layout
    if (hasToken) {
        return (
            <main>
                <div className="dashboard_wrapper lg:flex bg-[#1E1E1E] p-0">
                    <div className="sidebar_area w-[300px] lg:w-[20%]">
                        <Sidebar />
                    </div>
                    <div className="content_area w-full lg:w-[80%]">
                        <Insideheader />
                        <div className="px-5 lg:px-10 lg:py-2">
                            {children}
                        </div>

                    </div>
                </div>
                {WhatsAppButton}
            </main>
        );
    }

    // Public layout (not authenticated)
    return (
        <main>
            <Header />
            {children}
            <Footer />
            {WhatsAppButton}
        </main>
    );
}
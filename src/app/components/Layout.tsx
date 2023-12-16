import InfoBar from "../common/InfoBar";
import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <>
            <InfoBar />
            <Header />
            <main className="min-h-screen flex flex-col">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;

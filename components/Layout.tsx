import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children?: ReactNode;
    styleClass?: string;
}

const Layout = ({ children, styleClass, ...props }: Props) => {
    return (
        <div className={`${styleClass}`} {...props}>
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export default Layout;

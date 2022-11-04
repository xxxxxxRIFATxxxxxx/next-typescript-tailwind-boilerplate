import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    styleClass?: string;
}

const Text = ({ children, styleClass, ...props }: Props) => {
    return (
        <h1 className={`text-gray-700 text-sm ${styleClass}`} {...props}>
            {children}
        </h1>
    );
};

export default Text;

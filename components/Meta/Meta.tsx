import Head from "next/head";
import React from "react";

interface MetaProps {
    title?: string;
    keywords?: string;
    description?: string;
};

const Meta = ({ title = "", keywords = "", description = "" }: MetaProps) => {
    return (
        <Head>
            <title>
                {title}
            </title>

            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" />

            {/* Font Awesome */}
            <script src="https://kit.fontawesome.com/96239c21a7.js" crossOrigin="anonymous"></script>
        </Head>
    );
};

export default Meta;
import Head from "next/head";

const Seo = ({ pageTitle, font }) => {
    const title = pageTitle ? `${pageTitle} | Ecommerce` : "Ecommerce";

    return (
        <Head>
            <title>{title}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="keywords" content="GreenBuy - eCommerce Next.js, React Template" />
            <meta name="description" content="" />
            <meta name="ibthemes" content="ATFN" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" href="favicon.ico" />
        </Head>
    );
};

export default Seo;

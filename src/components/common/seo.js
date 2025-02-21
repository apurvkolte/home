import NextHead from "next/head"; // Change import name

const Seo = ({ pageTitle, font }) => {
    const title = pageTitle ? `${pageTitle} | Ecommerce` : "Ecommerce";

    return (
        <NextHead>
            <title>{title}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="keywords" content="Ecommerce Website" />
            <meta name="description" content="" />
            <meta name="ibthemes" content="ATFN" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" href="favicon.ico" />
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aayushchouhan24/sheryjs@main/dist/Shery.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></script>
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/gh/aayushchouhan24/sheryjs@main/dist/Shery.js"></script> */}
        </NextHead>
    );
};

export default Seo;

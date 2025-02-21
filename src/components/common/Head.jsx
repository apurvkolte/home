import Head from "next/head";

const Head = ({ pageTitle, font }) => {
    const title = pageTitle ? `${pageTitle} | SGSRO | Buy Water Purifiers & Filters at Best Price Online in Pune` : "SGSRO | Buy Best Water Purifier in Pune | Water Purifier in Pune | Water Purifier pimpri chinchwad| PCMC";

    return (
        <Head>
            <>
                <title>{title}</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="keywords" content="water purifier in Pune, top 10 water purifier in Pune, water purifier in Pune price, best water purifier in Pune, water purifier manufacturers in Pune, water purifier shop in Pune, water purifier shop near me, Kent water purifier, Aquaguard water purifier, water purifier in Moshi nearby, buy water purifier in Moshi, water purifier shop in Hadapsar, water purification, RO water purifier, water filter, water purifier repair, home water purifier, commercial water purifier, alkaline water purifier, copper water purifier, branded water purifier" />
                <meta name="description" content="SGSRO provides the best water purifiers in Pune, including top-rated brands like Kent and Aquaguard. We offer competitive prices, installation services, and repairs for residential and commercial water purifiers. Find the best water purifier in Pune, including popular locations like Hadapsar, and nearby areas like Moshi at SGSRO." />
                <meta name="ibthemes" content="ATFN" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha384-+0X0Ihsl5+1Ckqz3uYDvnu4JwvqQyzAwb0m81LXQBvPrW4eRjuAoKBR8gi5OyDiG" crossOrigin="anonymous" />

                {font && <link href={font} rel="stylesheet" />}
                <link rel="icon" href="favicon.ico" />
            </>
        </Head>
    );
};

export default Head;

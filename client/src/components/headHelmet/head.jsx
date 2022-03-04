import { React } from "react";
import { Helmet } from "react-helmet";


export default function HEAD({ title, description, url, keyWord }) {
    console.log(title, description)

    return (
        <Helmet htmlAttributes>
            <meta name="description" content={description} />
            <title>{title}</title>
            <meta property="og:url" content={url} />
            <meta content={keyWord} name="keywords" />
        </Helmet>
    )
}
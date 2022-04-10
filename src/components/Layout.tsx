import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
    title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={title} />
            </Helmet>
            {children}
        </>
    )
}

export default Layout

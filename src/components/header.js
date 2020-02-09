import React from 'react'
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title
          }
        }
      }
    `)
    return (
        <nav className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
            <h2>Or ones I want to go to anyway...</h2>
            <ul className={headerStyles.navList}>
                <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                </li>
                <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                </li>
                <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/meetup">Meetups</Link>
                </li>
                <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header

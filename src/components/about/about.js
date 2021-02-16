import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Button from '../button/button'

import Style from './about.module.css'

const About = () => {
    const { resume } = useStaticQuery(
        graphql`
        query MyQuery {
            resume:file(name: {eq: "md_hussainul_islam_sajib"}, extension: {eq: "pdf"}) {
              name
              publicURL
              extension
            }
          }
        `
    )

    return (
        <div className={Style.writeContainer}>
            <p>
                I am a Full Stack Developer. My primary web stack includes Python, Django, React, and PostgreSQL. Apart
                from these I have worked with many other frameworks and libraries, including Node.js, ASP.NET MVC, 
                Vue.js, and Angular. I have also worked extensively with Oracle and MySQL databases.
            </p>
            <p>
                I am currently working on two of the major DevOps technologies: Docker and AWS. My recent projects were
                built on Docker and I am planning to deploy and manage those with different services of AWS. On top of 
                that, I am currenty preparing for AWS Developer Associate exam.
            </p>
            <p>
                I am also learning about computer forensics, ethical hacking, and cybersecurity. I believe security is
                should be the top priority for any application, especially for dynamic data-driven applications.
            </p>
            <p>
                In my personal life, I am father of two ninjas, who keep me busy when I am not working. I am currently
                based in Toronto, Canada but originally from Dhaka, Bangladesh. Software development is my newly found
                passion and love but enjoy every moment of it. They excitement that I get from building something,
                whether it is a web or console application cannot be compared with anything else.
            </p>
            <p>
                Download my résumé from here:
            </p>
            <div className={Style.downloadButton}>
                <Button 
                    name='Résumé' 
                    filled={false} 
                    link={ resume.publicURL } 
                    download={`${resume.name}.${resume.extension}`} 
                />

            </div>
        </div>
    )
}

export default About

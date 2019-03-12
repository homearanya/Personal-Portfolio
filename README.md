# Personal Portfolio

[www.carloswebdev.com](https://www.carloswebdev.com/)

This is a [Gatsby](https://www.gatsbyjs.org/) site.

For this project I purchased [Flexi's template on Theme Forest](https://themeforest.net/item/flexi-personal-portfolio-html5-template/22514193).

I converted all the necessary HTML into JSX and used the existing styling that came with the template. I did some customizations with standard CSS but mostly through [Styled Components](https://www.styled-components.com/).

All the Javascript/Jquery logic had to be replaced with ReactJS logic.

The contact form logic is hosted on AWS. I used the [Serverless Framework](https://serverless.com/framework/) in combination with AWS's Lambda and EMS service. This is the tutorial I followed: [Building A Serverless Contact Form For Your Static Site](https://www.smashingmagazine.com/2018/05/building-serverless-contact-form-static-website/).

The site has a headless CMS, in particular [Netlify CMS](https://www.netlifycms.org/). For this, I followed the docs on Gatsby's site: [Sourcing from Netlify CMS](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/#sourcing-from-netlify-cms).

The site is hosted for free in [Netlify](https://www.netlify.com/). Kudos to these guys.

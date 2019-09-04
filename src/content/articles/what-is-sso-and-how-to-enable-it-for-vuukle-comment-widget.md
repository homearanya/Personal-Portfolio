---
title: What is SSO and how to enable it for Vuukle comment widget
path: /what-is-sso-and-how-to-enable-it-for-vuukle-comment-widget/
date: 2017-05-01T22:12:03.284Z
category: FAQ
tags:
  - how to
  - SSO
shortDescription: >-
  Single sign-on (SSO) is an authentication process that allows a user to access
  multiple applications with one set of login credentials.
---

![sso img](/img/what-is-sso-and-how-to-enable-it-for-vuukle-comment-widget-img_2.png)

```html
<script>
   var VUUKLE_CONFIG = {
   	apiKey: "Place Your API Key Here",
   	articleId: "Generate Unique id for your article",
   comments: {
  	auth: {
  		facebook: false,
  		google: false,
  		twitter: false,
  		disqus: false,
  		password: false,
  		vuukle: false,
  		sso: {
  			onClick: login_from_vuukle // some function to invoke for sso modal
  		}
  	}
   };
   // ⛔️ DON'T EDIT BELOW THIS LINE
   (function() {
  	 var d = document,
   		s = d.createElement('script');
  	s.onload = function() {vuukleLogin("ewogICAgInVzZXJuYW1lIjogIlNhbXBsZSBVc2VyIE5hbWUiLAogICAgImVtYWlsIjogIm1vdXNAZW1haWwuY29tIiwKICAgICJwdWJsaWNfa2V5IjogImVhZDQxZTQ2LWE1ZmQtMTFlMi1iYzk3LWJjNzY0ZTA0OTJjYyIsCiAgICAic2lnbmF0dXJlIjogIjBDOUMzMTRFMzZCNzgxNzg2REE2NUYyQ0Y3RTMwQzczNTI2NTUyNzM3ODY4MzEzMTRBOTM5NEEyOTI3N0NFQjU5REIzMDA1MjAzQTQyRjJERUE4QTE1QTQ0NjMwMjQzRTVCNEYxMEMxOUFCMEM3RDcwM0FDMjlENkM3OEEwMTgwIgp9")};
   s.src = 'https://cdn.vuukle.com/platform.js';
  (d.head || d.body).appendChild(s);
   })();
</script>
```

This will help you to create smooth UX on your site.
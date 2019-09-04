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

**Single sign-on** (**SSO**) is an authentication process that allows a user to access multiple applications with one set of login credentials.

If your site has authorization you can use SSO with Vuukle comment widget.

Firstly email and **secret** apiKey are being hashed by SHA512 encryption:

```html
mous@email.com-07115720-6848-11e5-9bc9-002590f371ee
```
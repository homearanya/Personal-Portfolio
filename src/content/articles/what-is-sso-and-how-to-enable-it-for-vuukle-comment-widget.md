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

This gives us a signature:

```html
0C9C314E36B781786DA65F2CF7E30C7352655273786831314A9394A29277CEB59DB3005203A42F2DEA8A15A44630243E5B4F10C19AB0C7D703AC29D6C78A0180
```

General info and the signature are being encrypted by base64 (**using UTF8 encoding**):

```html
{ "username": "Sample User Name", "email": "mous@email.com", "public_key":
"ead41e46-a5fd-11e2-bc97-bc764e0492cc", "signature":
"0C9C314E36B781786DA65F2CF7E30C7352655273786831314A9394A29277CEB59DB3005203A42F2DEA8A15A44630243E5B4F10C19AB0C7D703AC29D6C78A0180"
}
```

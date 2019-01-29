Cloudflare is very useful to cache the response of API Gateway.
Using Cloudflare, we can reduce cost of AWS without additional charge.

## Setup

This post explains how to setup custom domain of API gateway for Cloudflare.
https://stackoverflow.com/a/45849093/4221452

## Note

1. You must setup base path mappings on custom domain settings.
2. A page rule can be used to enable full SSL on a subdomain.
3. Recommend to turn off Always Online on Cloudflare.
   Accessing favicon.ico cause to switch to offline mode.
   To turn off only in a subdomain, a page rule would be useful.
4. No need to specify a stage name in the url when accessing the image.


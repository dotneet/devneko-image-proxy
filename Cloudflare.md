Cloudflare is very useful to cache the response of API Gateway.
Using Cloudflare, we can reduce cost of AWS without additional charge.

## Setup

This post explains how to setup custom domain of API gateway for Cloudflare.
https://stackoverflow.com/a/45849093/4221452

## Note

1. You must setup base path mappings on custom domain settings.
2. A page rule can be used to enable full SSL on a subdomain.
3. Recommend to turn off Always Online on Cloudflare.
   Accessing favicon.ico makes cloudflare offline mode.
   A page rule can be used to turn off Alaways Online only in a subdomain, 
4. No need to specify a stage name in the url when accessing an image.


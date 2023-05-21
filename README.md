The serverless image proxy that resizes and converts an image on the fly with AWS lambda and S3 and sharp.

## Docker installation

You need to install docker before using devneko-image-proxy.

https://docs.docker.com/install/

## Setup AWS credentials

devneko-image-proxy uses [cloudia](https://github.com/claudiajs/claudia) to deploy a lambda function and setup API gateway.
So you need to setup AWS credentials to `.aws/credentials` like this:

```
[claudia]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_ACCESS_SECRET
```

Then set the environment variable AWS_PROFILE to cloudia.

```bash
export AWS_PROFILE=claudia
```

## Configuration

Setup S3 bucket and others to `.env` file.

```bash
cp .env-example .env
```

AWS_REGION:
Set the region of S3 bucket.

AWS_PROFILE:
The aws profile you want to use.

S3_BUCKET:
Set the S3 bucket that you want to access.

LAMBDA_ROLE:
Set the role for lambda function.
This role must have the privilege that allows the access to the S3 bucket.
You can use the command `yarn run create-role` to create a role.

LAMBDA_MEMORY:
The memory size of lambda function.

LAMBDA_TIMEOUT:
The timeout seconds of lambda function.

PATH_PREFIX: (Optional)
This value will be used as the prefix of S3 key.

## Management commands

### Creating a lambda function

This command creates a lambda function and API gateway.
After completes creating the lambda function, `claudia.json` will be created.
This file will be used for update and destroy command.

```bash
npm install --arch=arm64 --platform=linux
npm run create
```

### Updating a lambda function

```bash
npm install --arch=arm64 --platform=linux
npm run update
```

### Destroying a lambda function

After completes destorying the lambda function, `claudia.json` will be removed.

```bash
npm run destroy
```

## Accessing an image

You can access an image via API gateway like this:

```
https://xxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/latest/path.jpg?w=640&h=480
```

The processing options are specified with query parameters.
If query parameters are not set, an image will not be processed.

### Image processing options

 - w: width of an image.
 - h: height of an image.
 - q: quality (1-100)
 - prog: if specified, a lambda function returns the progressive image.
 - format: convert an image to the format specified in this option. The possible values are jpeg, png, gif, webp.

## Tips

### Claudflare Integration

[Cloudflare.md](https://github.com/dotneet/devneko-image-proxy/blob/master/Cloudflare.md)


This product provides the ability to resize an image on the fly with AWS lambda and S3 and sharp.

## Setup AWS credentials

This project uses [cloudia](https://github.com/claudiajs/claudia) to deploy a lambda function and setup api gateway.
So you need to setup AWS credentials to `.aws/credentials` like this:

```
[claudia]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_ACCESS_SECRET
```

And set the environment variable to cloudia.

```
export AWS_PROFILE=cloudia
```

## Configuration

Setup S3 bucket and others to `.env` file.

```bash
cp .env-example .env
```

AWS_REGION:
Set the region of S3 bucket.

S3_BUCKET:
Set the S3 bucket that you want to access.

LAMBDA_ROLE:
Setup the role for lambda function.
This role must have the privilege to allow the access to the S3 bucket.

PATH_PREFIX: (Optional)
This value will be used as the prefix of S3 key.

## Command

### Creating a lambda function

This command creates a lambda function and API gateway.
After completes creating the lambda function, `claudia.json` will be created.
This file will be used for update and destroy command.

```bash
yarn run create
```

### Updating a lambda function

```bash
yarn run update
```

### Destroying a lambda function

After completes destorying the lambda function, `claudia.json` will be removed.

```bash
yarn run destroy
```


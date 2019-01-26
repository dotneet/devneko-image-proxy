#!/bin/bash -ue

claudia create \
        --region ${AWS_REGION} \
        --name devneko-image-proxy \
        --handler index.handler \
        --runtime "nodejs8.10" \
        --role ${LAMBDA_ROLE} \
        --deploy-proxy-api \
        --set-env "S3_BUCKET=${AWS_S3_BUCKET}"


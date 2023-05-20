#!/bin/bash -ue

claudia create \
        --region ${AWS_REGION} \
        --name ${LAMBDA_NAME} \
        --handler index.handler \
        --arch arm64 \
        --runtime "nodejs16.x" \
        --role ${LAMBDA_ROLE} \
        --memory ${LAMBDA_MEMORY} \
        --timeout ${LAMBDA_TIMEOUT} \
        --deploy-proxy-api \
        --set-env "S3_BUCKET=${S3_BUCKET}"


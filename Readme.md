# Use Serverless to Deploy functions to GCP

### GCP CLI 

Use gcloud CLI to deploy

```bash
export FUNCTION_NAME=xz-test
export FUNCTION_ENTRYPOINT=xztest
export FUNCTION_RUNTIME=nodejs10
export FUNCTION_REGION=asia-northeast1
export FUNCTION_MEMORY=128MB

gcloud functions deploy $FUNCTION_NAME --region $FUNCTION_REGION --memory $FUNCTION_MEMORY --entry-point $FUNCTION_ENTRYPOINT --runtime $FUNCTION_RUNTIME --trigger-http  --update-labels app=xztest

```

### Use Serverless
check the serverless.yml

```bash
npx serverless deploy
```
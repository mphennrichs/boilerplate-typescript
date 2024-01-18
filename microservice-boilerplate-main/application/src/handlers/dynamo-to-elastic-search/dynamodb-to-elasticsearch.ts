'use strict';

import { ReplicateFromDynamoToElastic } from '@pagaleve/shared-backend-library';
import * as Sentry from '@sentry/serverless';
import { Handler } from 'aws-lambda';

Sentry.AWSLambda.init({
  environment: process.env.STAGE,
  dsn: process.env.SENTRY_DSN_URL,
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE),
});

const handler: Handler = Sentry.AWSLambda.wrapHandler(async (event: any) => {
  if (process.env.ELASTICSEARCH_ANALYTICS_ENDPOINT) {
    const replicate = new ReplicateFromDynamoToElastic({
      event,
      elasticSearchEndpoint: process.env.ELASTICSEARCH_ANALYTICS_ENDPOINT,
      elasticSearchSecurityToken:
        process.env.ELASTICSEARCH_ANALYTICS_SECURITY_TOKEN,
    });

    await replicate.process();
  }
  return { body: JSON.stringify({ ok: true }) };
}, {});

export default handler;

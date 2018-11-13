// Copyright (c) Microsoft. All rights reserved.

const Config = {
  // APIs
  simulationApiUrl: 'https://xiong-20181030-cli-1.azurewebsites.net/devicesimulation-svc/v1/',
  diagnosticsApiUrl: '/diagnostics-svc/v1/',
  configApiUrl: '/config-svc/v1/',

  // Constants
  formFieldMaxLength: 25,
  formDescMaxLength: 100,
  retryWaitTime: 15000, // On retryable error, retry after 15s
  maxRetryAttempts: 2,
  maxDevicesPerVM: 20000,
  retryableStatusCodes: new Set([ 0, 502, 503 ]),
  sessionTimeout: 1200000,  // Session will expire in 20 mins
  simulationStatusPollingInterval: 10000, // 10s
  telemetryRefreshInterval: 60000, // 60s
  customSensorValue: 'custom',
  defaultAjaxTimeout: 10000, // 10s
  paginationPageSize: 15,
  deviceModelTypes: {
    customModel: 'Custom',
    stockModel: 'Stock'
  },
  dateTimeFormat: 'DD/MM/YY hh:mm:ss A'
};

export default Config;

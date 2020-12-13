const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "node-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bwh9be7ke2.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7PJ07nHIi",
    APP_CLIENT_ID: "nqehduf16b6dfviflgok1cuhl",
    IDENTITY_POOL_ID: "us-east-1:bbe514ac-fb26-4e55-9346-25e637864292",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
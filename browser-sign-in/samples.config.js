
export default {
  oidc: {
    clientId: 'your redirect uri',
    redirectUri: 'your redirect uri',
    endSessionRedirectUri: 'your redirect uri',
    discoveryUri: 'https://{your okta domain}/oauth2/default',
    scopes: ["openid", "profile", "offline_access"],
    requireHardwareBackedKeyStore: false,
  }
};

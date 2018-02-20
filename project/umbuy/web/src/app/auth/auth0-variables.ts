interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'FFM4DomrxSjVr4hWrP5JZly9j1jPE0d9',
    domain: 'team6.auth0.com',
    callbackURL: 'http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000/callback'
    // callbackURL: 'http://localhost:4200/callback'
  };
  
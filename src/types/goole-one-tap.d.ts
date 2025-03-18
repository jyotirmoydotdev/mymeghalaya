declare global {
    interface Window {
      google?: {
        accounts: {
          id: {
            initialize: (config: {
              client_id: string;
              callback: (response: CredentialResponse) => void;
              nonce?: string;
              use_fedcm_for_prompt?: boolean;
            }) => void;
            prompt: () => void;
          };
        };
      };
    }
  }
  
  export {};
  
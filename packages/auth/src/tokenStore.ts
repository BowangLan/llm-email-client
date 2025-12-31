export interface TokenStore {
  getToken: (accountId: string) => Promise<string | null>;
  setToken: (accountId: string, token: string) => Promise<void>;
  clearToken: (accountId: string) => Promise<void>;
}

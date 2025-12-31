export interface AccountStore {
  listAccounts: () => Promise<string[]>;
  updateAccount: (accountId: string, data: Record<string, unknown>) => Promise<void>;
}

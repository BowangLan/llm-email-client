import type { LlmClient } from "./types";

export const selectProvider = (client: LlmClient) => {
  return client;
};

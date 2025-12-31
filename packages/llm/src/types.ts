export interface LlmClient {
  classifyEmail(input: {
    subject: string;
    from: string;
    snippet?: string;
    body?: string;
  }): Promise<{
    isJobRelated: boolean;
    category: "applied" | "interview" | "assessment" | "rejection" | "offer" | "other";
    company?: string;
    confidence: number;
  }>;
}

export interface CalloutComponentBaseSchema {
  id: string;
  type: string;
  key: string;
  label?: string;
  input?: boolean;
  adminOnly?: boolean;
  [key: string]: unknown;
}
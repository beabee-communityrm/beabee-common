import type {
  CalloutComponentInputTimeSchema,
  CalloutResponseAnswer,
  ValidatorCalloutComponent,
} from "../types/index.ts";

export const calloutComponentInputTimeValidator: ValidatorCalloutComponent<
  CalloutComponentInputTimeSchema
> = (
  schema: CalloutComponentInputTimeSchema,
  answer: CalloutResponseAnswer,
): boolean => {
  // If answer is not required and is undefined return true because we don't need to validate this
  if (!schema.validate?.required && answer === undefined) {
    return true;
  }

  throw new Error(
    `[calloutComponentInputTimeValidator] Not implemented yet`,
  );
};

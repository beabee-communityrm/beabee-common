import { BaseCalloutValidator, EmailValidator } from "./index.ts";
import type {
  CalloutResponseAnswer,
  InputCalloutComponentSchema,
} from "../types/index.ts";

export class CalloutComponentInputValidator extends BaseCalloutValidator {
  validate(
    schema: InputCalloutComponentSchema,
    answer: CalloutResponseAnswer | CalloutResponseAnswer[],
  ): boolean {
    const answers = Array.isArray(answer) ? answer : [answer];

    for (const answer of answers) {
      switch (schema.type) {
        case "email":
          return new EmailValidator().validate(answer);
      }
    }

    console.error(new Error(`[${this.constructor.name}] Not implemented yet`));
    return false;
  }
}
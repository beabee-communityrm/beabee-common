export interface BaseCalloutComponentSchema {
  id: string;
  type: string;
  key: string;
  label?: string;
  input?: boolean;
  adminOnly?: boolean;
  [key: string]: unknown;
}

export interface ContentCalloutComponentSchema
  extends BaseCalloutComponentSchema {
  type: "content";
  input: false;
}

export interface NestableCalloutComponentSchema
  extends BaseCalloutComponentSchema {
  type: "panel" | "well" | "tabs";
  input: false;
  components: CalloutComponentSchema[];
}

export interface InputCalloutComponentSchema
  extends BaseCalloutComponentSchema {
  type:
    | "address"
    | "button"
    | "checkbox"
    | "currency"
    | "datetime"
    | "email"
    | "file"
    | "number"
    | "password"
    | "phoneNumber"
    | "signature"
    | "textfield"
    | "textarea"
    | "time"
    | "url";
  input: true;
}

export interface SelectCalloutComponentSchema
  extends BaseCalloutComponentSchema {
  type: "select";
  input: true;
  data: { values: { label: string; value: string }[] };
}

export interface RadioCalloutComponentSchema
  extends BaseCalloutComponentSchema {
  type: "radio" | "selectboxes";
  input: true;
  values: { label: string; value: string; nextSlideId?: string }[];
}

export type CalloutComponentSchema =
  | ContentCalloutComponentSchema
  | SelectCalloutComponentSchema
  | RadioCalloutComponentSchema
  | InputCalloutComponentSchema
  | NestableCalloutComponentSchema;

export interface SetCalloutNavigationSchema {
  nextSlideId: string;
}

export interface SetCalloutSlideSchema {
  id: string;
  title: string;
  components: CalloutComponentSchema[];
  navigation: SetCalloutNavigationSchema;
}

export interface SetCalloutFormSchema {
  slides: SetCalloutSlideSchema[];
}

export interface GetCalloutNavigationSchema extends SetCalloutNavigationSchema {
  prevText: string;
  nextText: string;
  submitText: string;
}

export interface GetCalloutSlideSchema extends SetCalloutSlideSchema {
  navigation: GetCalloutNavigationSchema;
}

export interface GetCalloutFormSchema extends SetCalloutFormSchema {
  slides: GetCalloutSlideSchema[];
}

export interface CalloutResponseAnswerAddress {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}
export interface CalloutResponseAnswerFileUpload {
  url: string;
}
export type CalloutResponseAnswer =
  | string
  | boolean
  | number
  | null
  | undefined
  | Record<string, boolean>
  | CalloutResponseAnswerAddress
  | CalloutResponseAnswerFileUpload;

/**
 * Answers are grouped by slide key: {[slideId]: {[componentKey]: answer | answer[]}}
 */
export type CalloutResponseAnswers = Record<
  string,
  Record<string, CalloutResponseAnswer | CalloutResponseAnswer[]> | undefined
>;

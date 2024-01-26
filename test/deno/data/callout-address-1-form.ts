import type { CalloutComponentInputSchema } from "../../../mod.ts";

export const calloutAddress1Form: CalloutComponentInputSchema = {
  "id": "evej0rq",
  "key": "whatIsTheAddressOfYourFavouritePlace",
  "tags": [],
  "tree": true,
  "type": "address",
  "input": true,
  "label": "What is the address of your favourite place?",
  "logic": [],
  "addons": [],
  "errors": "",
  "hidden": false,
  "prefix": "",
  "suffix": "",
  "unique": false,
  "widget": null,
  "dbIndex": false,
  "overlay": {
    "top": "",
    "left": "",
    "page": "",
    "style": "",
    "width": "",
    "height": "",
  },
  "tooltip": "",
  "disabled": false,
  "lazyLoad": false,
  "multiple": false,
  "provider": "nominatim",
  "redrawOn": "",
  "tabindex": "",
  "validate": {
    "json": "",
    "custom": "",
    "unique": false,
    "multiple": false,
    "required": false,
    "customMessage": "",
    "customPrivate": false,
    "strictDateValidation": false,
  },
  "adminOnly": false,
  "autofocus": false,
  "encrypted": false,
  "hideLabel": false,
  "modalEdit": false,
  "protected": false,
  "refreshOn": "",
  "tableView": false,
  "attributes": {},
  "components": [
    {
      "id": "esal5hg",
      "key": "address1",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "Address 1",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
    {
      "id": "ehfmzlm",
      "key": "address2",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "Address 2",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
    {
      "id": "e5dkt2n",
      "key": "city",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "City",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
    {
      "id": "e8amojk",
      "key": "state",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "State",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
    {
      "id": "ez3x4l6",
      "key": "country",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "Country",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
    {
      "id": "eh6qvn",
      "key": "zip",
      "mask": false,
      "type": "textfield",
      "input": true,
      "label": "Zip Code",
      "addons": [],
      "hidden": false,
      "prefix": "",
      "suffix": "",
      "unique": false,
      "widget": {
        "type": "input",
      },
      "dbIndex": false,
      "overlay": {
        "top": "",
        "left": "",
        "style": "",
        "width": "",
        "height": "",
      },
      "tooltip": "",
      "disabled": false,
      "multiple": false,
      "redrawOn": "",
      "tabindex": "",
      "validate": {
        "custom": "",
        "unique": false,
        "pattern": "",
        "multiple": false,
        "required": false,
        "maxLength": "",
        "minLength": "",
        "customPrivate": false,
        "strictDateValidation": false,
      },
      "adminOnly": false,
      "autofocus": false,
      "encrypted": false,
      "hideLabel": false,
      "inputMask": "",
      "inputType": "text",
      "modalEdit": false,
      "protected": false,
      "refreshOn": "",
      "tableView": false,
      "attributes": {},
      "errorLabel": "",
      "persistent": true,
      "properties": {},
      "spellcheck": true,
      "validateOn": "change",
      "clearOnHide": true,
      "conditional": {
        "eq": "",
        "show": null,
        "when": null,
      },
      "customClass": "",
      "description": "",
      "displayMask": "",
      "inputFormat": "plain",
      "placeholder": "",
      "defaultValue": null,
      "dataGridLabel": false,
      "labelPosition": "top",
      "showCharCount": false,
      "showWordCount": false,
      "calculateValue": "",
      "calculateServer": false,
      "customConditional":
        "show = _.get(instance, 'parent.manualMode', false);",
      "allowMultipleMasks": false,
      "customDefaultValue": "",
      "allowCalculateOverride": false,
      "truncateMultipleSpaces": false,
    },
  ],
  "errorLabel": "",
  "persistent": true,
  "properties": {},
  "validateOn": "change",
  "clearOnHide": true,
  "conditional": {
    "eq": "",
    "json": "",
    "show": null,
    "when": null,
  },
  "customClass": "",
  "description": "",
  "placeholder": "",
  "defaultValue": "{}",
  "dataGridLabel": false,
  "labelPosition": "top",
  "showCharCount": false,
  "showWordCount": false,
  "calculateValue": "",
  "calculateServer": false,
  "providerOptions": {
    "params": {
      "autocompleteOptions": {},
    },
  },
  "disableClearIcon": false,
  "enableManualMode": false,
  "customConditional": "",
  "allowMultipleMasks": false,
  "customDefaultValue": "",
  "manualModeViewString": "",
  "allowCalculateOverride": false,
  "switchToManualModeLabel": "Can't find address? Switch to manual mode.",
};

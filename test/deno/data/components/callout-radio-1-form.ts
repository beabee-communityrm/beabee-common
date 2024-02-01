import { CalloutComponentType } from "../../../../mod.ts";
import type { CalloutComponentInputSelectableRadioSchema } from "../../../../mod.ts";

export const calloutRadio1Form: CalloutComponentInputSelectableRadioSchema = {
  "id": "eo4k3e",
  "key": "whatIsYourFavoriteIde",
  "data": {
    "url": "",
  },
  "tags": [],
  "type": CalloutComponentType.INPUT_SELECTABLE_RADIO,
  "input": true,
  "label": "What is your favorite IDE?",
  "logic": [],
  "addons": [],
  "errors": "",
  "hidden": false,
  "inline": false,
  "prefix": "",
  "suffix": "",
  "unique": false,
  "values": [
    {
      "label": "Sublime Text",
      "value": "sublimeText",
      "nextSlideId": "",
    },
    {
      "label": "Visual Studio",
      "value": "visualStudio",
      "nextSlideId": "",
    },
    {
      "label": "Visual Studio Code",
      "value": "visualStudioCode",
      "nextSlideId": "",
    },
    {
      "label": "GNOME Builder",
      "value": "gnomeBuilder",
      "nextSlideId": "",
    },
    {
      "label": "Vim",
      "value": "vim",
      "nextSlideId": "",
    },
    {
      "label": "Emacs",
      "value": "emacs",
      "nextSlideId": "",
    },
  ],
  "widget": null,
  "dataSrc": "values",
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
  "fieldSet": false,
  "multiple": false,
  "redrawOn": "",
  "tabindex": "",
  "template": "<span>{{ item.label }}</span>",
  "validate": {
    "json": "",
    "custom": "",
    "unique": false,
    "multiple": false,
    "required": false,
    "customMessage": "",
    "customPrivate": false,
    "onlyAvailableItems": false,
    "strictDateValidation": false,
  },
  "adminOnly": false,
  "autofocus": false,
  "encrypted": false,
  "hideLabel": false,
  "inputType": "radio",
  "modalEdit": false,
  "protected": false,
  "refreshOn": "",
  "tableView": false,
  "attributes": {},
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
  "ignoreCache": false,
  "placeholder": "",
  "authenticate": false,
  "defaultValue": "",
  "dataGridLabel": false,
  "labelPosition": "top",
  "showCharCount": false,
  "showWordCount": false,
  "valueProperty": "",
  "calculateValue": "",
  "calculateServer": false,
  "customConditional": "",
  "allowMultipleMasks": false,
  "customDefaultValue": "",
  "optionsLabelPosition": "right",
  "allowCalculateOverride": false,
};

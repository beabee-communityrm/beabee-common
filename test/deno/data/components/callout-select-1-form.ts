import { CalloutComponentType } from "../../../../mod.ts";
import type { CalloutComponentInputSelectSchema } from "../../../../mod.ts";

export const calloutSelect1Form: CalloutComponentInputSelectSchema = {
  "id": "e3dw34",
  "key": "selectAnyElementFromTheDropdownMenu",
  "data": {
    "url": "",
    "json": "",
    "custom": "",
    "values": [
      {
        "label": "Sun",
        "value": "sun",
      },
      {
        "label": "Moon",
        "value": "moon",
      },
      {
        "label": "Tree",
        "value": "tree",
      },
      {
        "label": "Flower",
        "value": "flower",
      },
      {
        "label": "Winter",
        "value": "winter",
      },
    ],
    "resource": "",
  },
  "tags": [],
  "type": CalloutComponentType.INPUT_SELECT,
  "input": true,
  "label": "Select any element from the dropdown menu",
  "limit": 100,
  "logic": [],
  "addons": [],
  "errors": "",
  "filter": "",
  "hidden": false,
  "idPath": "id",
  "prefix": "",
  "suffix": "",
  "unique": false,
  "widget": "choicesjs",
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
  "dataType": "",
  "disabled": false,
  "lazyLoad": true,
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
  "indexeddb": {
    "filter": {},
  },
  "minSearch": 0,
  "modalEdit": false,
  "protected": false,
  "refreshOn": "",
  "tableView": true,
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
  "fuseOptions": {
    "include": "score",
    "threshold": 0.3,
  },
  "ignoreCache": false,
  "placeholder": "",
  "searchField": "",
  "authenticate": false,
  "defaultValue": "",
  "selectFields": "",
  "customOptions": {},
  "dataGridLabel": false,
  "labelPosition": "top",
  "readOnlyValue": false,
  "refreshOnBlur": "",
  "searchEnabled": true,
  "showCharCount": false,
  "showWordCount": false,
  "uniqueOptions": false,
  "valueProperty": "",
  "calculateValue": "",
  "clearOnRefresh": false,
  "searchDebounce": 0.3,
  "useExactSearch": false,
  "calculateServer": false,
  "selectThreshold": 0.3,
  "customConditional": "",
  "allowMultipleMasks": false,
  "customDefaultValue": "",
  "allowCalculateOverride": false,
};

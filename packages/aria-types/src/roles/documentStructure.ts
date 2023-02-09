export const ariaRolesDocumentStructure = [
  "application",
  "article",
  "cell",
  "columnheader",
  "definition",
  "directory",
  "document",
  "feed",
  "figure",
  "group",
  "heading",
  "img",
  "list",
  "listitem",
  "math",
  "none",
  "note",
  "presentation",
  "row",
  "rowgroup",
  "rowheader",
  "separator",
  "table",
  "term",
  "toolbar",
  "tooltip"
] as const;

export type AriaRoleDocumentStructure =
  (typeof ariaRolesDocumentStructure)[number];

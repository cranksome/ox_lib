import { IconProp } from "@fortawesome/fontawesome-svg-core";

type RowType = "input" | "checkbox" | "select";

export interface Row {
  type: RowType;
  label: string;
  options?: { value: string; label?: string }[];
  password?: boolean;
  icon?: IconProp;
}

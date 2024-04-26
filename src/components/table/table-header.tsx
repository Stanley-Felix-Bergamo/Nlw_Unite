import { ComponentProps } from "react";

interface TableHaderProps extends ComponentProps<"th"> {}

export function TableHader(props: TableHaderProps) {
  return (
    <th className="px-4 py-3 text-sm font-semibold text-left" {...props} />
  );
}

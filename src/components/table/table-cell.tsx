import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return <td className="px-4 py-3 text-sm text-zinc-300" {...props} />;
}

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHader } from "./table/table-header";
import { TableCell } from "./table/table-cell";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="cursor-pointer size-4 text-emerald-300" />
          <input
            type="text"
            className="flex-1 p-0 text-sm bg-transparent border-0 outline-none"
            placeholder="Buscar participantes..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="bg-black border rounded border-white/10 size-4 accent-orange-400"
              />
            </TableHader>
            <TableHader>Código</TableHader>
            <TableHader>Participantes</TableHader>
            <TableHader>Data de inscrição</TableHader>
            <TableHader>Data do check-in</TableHader>
            <TableHader style={{ width: 64 }}></TableHader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }).map((_, i) => {
            return (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input
                    type="checkbox"
                    className="bg-black border rounded border-white/10 size-4 checked:bg-orange-400"
                  />
                </TableCell>
                <TableCell>12345</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Stanley Felix Bergamo
                    </span>
                    <span>stanley.felix.bergamo@outlook.com</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>3 dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <td
              className="px-4 py-3 text-sm text-right text-zinc-300"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

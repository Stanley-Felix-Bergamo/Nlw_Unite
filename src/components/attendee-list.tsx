import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

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

      <div className="border rounded-lg border-white/10">
        <table className="w-full border">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 64 }}
                className="px-4 py-3 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="bg-black border rounded border-white/10 size-4 accent-orange-400"
                />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Código
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="px-4 py-3 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="bg-black border rounded border-white/10 size-4 checked:bg-orange-400"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">12345</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Stanley Felix Bergamo
                      </span>
                      <span>stanley.felix.bergamo@outlook.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <button className="bg-black border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className="px-4 py-3 text-sm text-right text-zinc-300"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

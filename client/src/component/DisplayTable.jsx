import PropTypes from 'prop-types';

import {
  //createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'



const DisplayTable = ({ data, column }) => {
  const table = useReactTable({
    data,
    columns : column,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
    <table className='w-full py-0 px-0 border-collapse'>
      <thead className='bg-green-600 text-black'>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            <th>Sr.No</th>
            {headerGroup.headers.map(header => (
              <th key={header.id} className='border whitespace-nowrap'>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row,index) => (
          <tr key={row.id}>
            <td className='border px-2 py-1 '>{index+1}</td>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className='border px-2 py-1 whitespace-nowrap '>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="h-4" />
  </div>
  )
}

DisplayTable.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.array.isRequired,
};

export default DisplayTable

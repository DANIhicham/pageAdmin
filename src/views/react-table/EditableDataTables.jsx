'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './data'

// Column Definitions
const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('fullName', {
    header: 'Name'
  }),
  columnHelper.accessor('email', {
    header: 'Email'
  }),
  columnHelper.accessor('start_date', {
    header: 'Date'
  }),
  columnHelper.accessor('experience', {
    header: 'Experience'
  }),
  columnHelper.accessor('age', {
    header: 'Age'
  })
]

const EditableCell = ({ getValue, row, column, table }) => {
  // Vars
  const initialValue = getValue()

  // States
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={e => setValue(e.target.value)} onBlur={onBlur} />
}

// Give our default column cell renderer editing superpowers!
const defaultColumn = {
  cell: ({ getValue, row, column, table }) => {
    return <EditableCell getValue={getValue} row={row} column={column} table={table} />
  }
}

const EditableDataTables = () => {
  // States
  const [data, setData] = useState(() => defaultData)

  // Hooks
  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    },

    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value
              }
            }

            return row
          })
        )
      }
    }
  })

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default EditableDataTables

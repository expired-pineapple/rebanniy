import { ColumnDef } from "@tanstack/react-table"
 
export const studentColumn: ColumnDef<any>[] = [
    {
      accessorKey: "fullName",
      header: "Full Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "studentStatus",
      header: "Student Status",
    },
    {
        accessorKey: "paymentStatus",
        header: "Payment Status",
      }
  ]
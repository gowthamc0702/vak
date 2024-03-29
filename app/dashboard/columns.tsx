import { ColumnDef } from "@tanstack/react-table";

export type Records = {
  id: string;
  name: string;
  phone: string;
  desc: string;
};

export const columns: ColumnDef<Records>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone No",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  
];

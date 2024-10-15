import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <main className="mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-6 text-center">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4 text-center">Status</TableHead>
            <TableHead className="p-4 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-4 text-left font-medium">
              <span className="font-semibold">10/5/2020</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-semibold">Four</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-normal">four7518@gmail.com</span>
            </TableCell>
            <TableCell className="text-cent p-4er">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="text-righ p-4t">
              <span className="font-semibold">$10.33</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default DashboardPage;

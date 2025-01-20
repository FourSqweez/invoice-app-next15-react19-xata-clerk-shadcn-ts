import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

const InvoicePage = async ({ params }: { params: { invoiceId: string } }) => {
  const invoiceId = parseInt(params.invoiceId);

  if (isNaN(invoiceId)) {
    throw new Error("Invalid Invoice id");
  }

  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!result) notFound();

  return (
    <main className="mx-auto my-12 h-full max-w-5xl">
      <div className="mb-8 flex justify-between">
        <h1 className="flex items-center gap-4 text-3xl font-bold">
          Invoice {invoiceId}
          <Badge
            className={cn(
              "rounded-full capitalize",
              result.status === "open" && "bg-blue-500",
              result.status === "paid" && "bg-green-600",
              result.status === "void" && "bg-zinc-700",
              result.status === "uncollectible" && "bg-red-600",
            )}
          >
            {result.status}
          </Badge>
        </h1>
      </div>

      <p className="mb-3 text-3xl">${(result.value / 100).toFixed(2)}</p>

      <p className="mb-8 text-lg">{result.description}</p>

      <h2 className="mb-4 text-lg font-bold">Billing Details</h2>

      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">
            Invoice ID
          </strong>
          <span>{result.id}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 text-sm font-medium">
            Invoice Date
          </strong>
          <span>{new Date(result.createTs).toLocaleDateString()}</span>
        </li>
      </ul>
    </main>
  );
};

export default InvoicePage;

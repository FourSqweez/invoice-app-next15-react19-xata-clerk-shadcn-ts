import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const InvoicePage = () => {
  return (
    <main className="mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoices</h1>
      </div>

      <form className="grid max-w-xs gap-4" action="">
        <div>
          <Label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="mb-2 block text-sm font-semibold">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold"
          >
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>
        <div>
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default InvoicePage;

import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import Link from "next/link";

export default async function Home() {
  const result = await db.execute(sql`SELECT current_database()`);
  return (
    <main className="mx-auto flex h-screen max-w-5xl flex-col justify-center gap-6 text-center">
      {JSON.stringify(result)}
      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}

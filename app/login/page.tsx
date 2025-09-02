import { getSession } from "@/lib/getSession";
import { LoginClient } from "./LoginClient";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();
  if (session?.user) redirect("/dashboard");

  return (
    <>
      <LoginClient />
    </>
  );
}

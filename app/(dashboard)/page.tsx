import { auth } from '@clerk/nextjs/server';
import { UserButton } from "@clerk/nextjs";

export default async function Page() {
  // Redirects to the sign-in route if the user is not signed in
  await auth.protect()

  return (
    <main>
      <h1>Hello world</h1>
      <UserButton />
    </main>
  );
}
"use client";
import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (false) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        {session ? (
          <>
            Signed in as {session?.user?.name}
            <br />
            <Button
              className="m-2.5"
              variant="contained"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Button variant="text" color="error">
              Not signed in
            </Button>
            <br />
            <Button
              className="m-2.5"
              variant="contained"
              onClick={() => signIn("github")}
            >
              Sign in using Github
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

"use client";
import { loginAction } from "@/app/(Backend)/actions/auth/loginAction";
import { registerAction } from "@/app/(Backend)/actions/auth/registerAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EaseIn from "@/lib/ease_In";
import { AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const [state, dispatch] = useFormState(loginAction, null);
  if (state?.success) {
    redirect("/panel");
  }

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-tl from-rose-100 to-teal-100 dark:bg-gradient-to-tl  dark:from-purple-950 dark:to-teal-900">
      <EaseIn>
        <form action={dispatch}>
          <Card className="w-[400px] ">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl flex justify-between">
                Admin Login{" "}
                <Button
                  className="rounded-full"
                  asChild
                  variant={"outline"}
                  size={"sm"}
                >
                  <Link href="/">Back</Link>
                </Button>
              </CardTitle>
              <CardDescription>
                Enter your username and password
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="********"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full gap-2">
                {state?.error ? (
                  <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <p>{state?.error}</p>
                  </div>
                ) : (
                  ""
                )}
                <DynamicButton title="Submit" />
              </div>
            </CardFooter>
          </Card>
        </form>
      </EaseIn>
    </section>
  );
}

const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading...
        </>
      ) : (
        title
      )}
    </Button>
  );
};

"use client";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Credential</h3>
        <p className="text-sm text-muted-foreground">
          Enter new username and password to change admin credentials
        </p>
      </div>
      <Separator />
      <InputWithLabel />
    </div>
  );
}

///////////////////////////
/////////////////////////

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import updateAction from "@/app/(Backend)/actions/auth/updateCredentials";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function InputWithLabel() {
  const [state, dispatch] = useFormState(updateAction, null);
  useEffect(() => {
    if (state?.success) {
      toast.success(`${state.success}`);
    } else if (state?.error) {
      toast.error(state?.error);
    } else if (state?.info) {
      toast.info(state?.info);
    }
  }, [state]);

  return (
    <form className="space-y-4" action={dispatch}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input
          type="username"
          name="username"
          id="username"
          placeholder="username"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          required
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <DynamicButton title={"Update"} />
      </div>
    </form>
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

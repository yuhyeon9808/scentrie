import Login from "@/component/login/Login";
import React, { Suspense } from "react";

export default function loginPage() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}

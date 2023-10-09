"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const navigate = useRouter();
  console.log("a");
  const access =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null;

  useEffect(() => {
    if (!access) {
      alert("로그인이 필요한 페이지입니다.");
      navigate.push("/login");
    }
  }, [access]);
};

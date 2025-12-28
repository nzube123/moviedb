"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../app/styles/header.css'
import '../app/styles/home.css'
import { PropsWithChildren } from "react";
// import HeaderJSX  from "./ui/home/header";

export default function CategoryLayout({ children }: PropsWithChildren) {
  const queryclient = new QueryClient();

  return (
    <html>
      <body>
        <QueryClientProvider client={queryclient} >
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
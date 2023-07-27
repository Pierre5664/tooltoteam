import { PropsWithChildren } from "react";

export default function DashboardsLayout({
  params,
    children, // will be a page or nested layout
  }: PropsWithChildren<{
    
    params: { boardId: string };
    searchParams?: { [key: string]: string | string[] | undefined }
  }>) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }
  
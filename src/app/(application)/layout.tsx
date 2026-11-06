import ApplicationShell from "@/components/common/applicationShell";

export default function ApplicationLayout({
  children,
}: LayoutProps<"/">) {
  return <ApplicationShell>{children}</ApplicationShell>;
}

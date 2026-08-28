import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  as?: "div" | "section";
};

export function Container({
  children,
  className,
  narrow = false,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(narrow ? "container-narrow" : "container-site", className)}>
      {children}
    </Tag>
  );
}
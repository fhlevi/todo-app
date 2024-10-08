import type { Metadata } from "next";
import "@/styles/globals.scss";
import '@fortawesome/fontawesome-free/css/all.css';
import { Root } from "@/components/layouts/root";
import { z } from "zod";

const LayoutSchema = z.object({
  children: z.any(),
}).readonly();

type SchemaProps = z.infer<typeof LayoutSchema>;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: SchemaProps) {
  return (
    <Root>
      {children}
    </Root>
  );
}

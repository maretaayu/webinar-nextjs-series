// utils/metadata.ts
import type { Metadata } from "next";

type MetadataParams = {
  title: string;
  description: string;
};

const defaultMetadata: Metadata = {
  icons: { icon: "/IconTwitter.svg" },
};

export const generateMetadata = ({
  title,
  description,
}: MetadataParams): Metadata => ({
  ...defaultMetadata,
  title,
  description,
});

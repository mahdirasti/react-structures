import { TFunction } from "i18next";

export interface absolutePath {
  path: string;
  title: string;
}

const absoluteRoutes = (t: TFunction): absolutePath[] => [
  {
    path: "/user",
    title: t("routes:user"),
  },
];

export default absoluteRoutes;

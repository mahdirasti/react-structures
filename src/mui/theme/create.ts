import { Theme, createTheme } from "@mui/material";

import { lightPalette } from "../palettes";

/**
 * Place all theme related properties here (except for palette)
 * @param {boolean} dark is used to switch theme
 * Since designs currently have only one theme, don't provide dark argument
 */

const create = (dark?: boolean): Theme => {
  // const palette = lightPalette;
  const theme = createTheme({
    palette: lightPalette,
    direction: "rtl",
  });

  const media = theme.breakpoints.up("md");
  /* Responsive typographies here (only base typographies(for example header. not headerBold)) or default MUI */
  theme.typography.header = {
    fontSize: "1rem",
    lineHeight: "21px",
    [media]: {
      fontSize: "1.5rem",
      lineHeight: "37px",
    },
  };
  theme.typography.large = {
    fontSize: "0.875rem",
    lineHeight: "19px",
    [media]: {
      fontSize: "1.25rem",
      lineHeight: "28px",
    },
  };
  theme.typography.heading = {
    fontSize: "1rem",
    lineHeight: "25px",
    [media]: {
      fontSize: "1.125rem",
      lineHeight: "28px",
    },
  };
  theme.typography.body = {
    fontSize: "0.75rem",
    lineHeight: "15.5px",
    [media]: {
      fontSize: "1rem",
      lineHeight: "25px",
    },
  };
  theme.typography.subtitle = {
    fontSize: "0.75rem",
    lineHeight: "19px",
    [media]: {
      fontSize: "0.875rem",
      lineHeight: "22px",
    },
  };
  theme.typography.small = {
    fontSize: "0.5rem",
    lineHeight: "8px",
    [media]: {
      fontSize: "0.75rem",
      lineHeight: "12px",
    },
  };
  theme.typography = {
    ...theme.typography,
  };

  return theme;
};

export default create;

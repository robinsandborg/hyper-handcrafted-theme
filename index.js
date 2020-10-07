'use strict';

const backgroundColor = "#101d27";
const foregroundColor = "#d1c4b6";
const borderColor = "#25323d";
const cursorColor = "#5eb231";
const accentColor = "#59be84"
const padding = "12px 14px",
const colors = {
  black: "#03131D",
  red: "#fd8877",
  green: "#5eb231",
  yellow: "#b3ae50",
  blue: "#9aa5ff",
  magenta: "#f585ca",
  cyan: "#59be84",
  white: "#d1c4b6",
  lightBlack: "#53606d",
  lightRed: "#fd8877",
  lightGreen: "#59be84",
  lightYellow: "#b3ae50",
  lightBlue: "#9aa5ff",
  lightMagenta: "#f585ca",
  lightCyan: "#43bbce",
  lightWhite: "#eee0d1",
}

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    accentColor,
    colors,
    padding,
    termCSS: `
      ${config.termCSS || ""}
    `,
    css: `
			${config.css || ""}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: ${borderColor};
			}
		`,
  });
};

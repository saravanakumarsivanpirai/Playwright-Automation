export default {
  default: {
    require: ["Features/hooks/hooks.js", "Features/stepdef/loginstepdef.js"],
    paths: ["Features/**/*.feature"],
    format: ["progress", "html:cucumber-report.html"],
  },
};

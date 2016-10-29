const getCorrectedNames = require('corrected-names');

function getComponent(options) {
  const name = getCorrectedNames(options.argv[0]);
  const navbarName = getCorrectedNames(`${name.dashedName}-navbar`);
  return {
    filename: `${name.pascalCaseName}.jsx`,
    parent: `imports/ui/Navbars`,
    templateName: `component.navbar`,
    templateData: {
      pascalCaseName: name.pascalCaseName,
      cssClass: navbarName,
      projectName: options.projectName,
    },
  };
}

function getStylesheet(options) {
  const name = getCorrectedNames(options.argv[0]);
  const navbarName = getCorrectedNames(`${name.dashedName}-navbar`);
  return {
    filename: `${navbarName.dashedName}.${options.css}`,
    parent: `client/style/Navbars`,
    templateName: `stylesheet.solo`,
    templateData: navbarName,
  };
}

module.exports = (options) => {
  return [
    getComponent(options),
    getStylesheet(options),
  ];
};
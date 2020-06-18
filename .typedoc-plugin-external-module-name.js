//const subpackage = new RegExp("packages/([^/]+)/");
module.exports = function customMappingFunction(explicit, implicit, path, reflection, context) {
  // extract the monorepo package from the path
  //const package = subpackage.match(path)[1];
  // build the module name
  return "grpc-bchrpc-browser";
}
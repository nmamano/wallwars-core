const packageJson = require("../package.json");

// Example function to export.
export function version(): string {
  return `wallwars-core v${packageJson.version}`;
}

// Example usage.
console.log(version());

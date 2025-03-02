import { Client } from "@hiveio/dhive";

// Ensure @hiveio/dhive is properly installed
const client = new Client("https://api.hive.blog");

// Use named export instead of default export
export { client };

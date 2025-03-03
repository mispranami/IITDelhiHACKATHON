import hivesigner from "hivesigner";

const client = new hivesigner.Client({
    app: "", // No need to register an app
    callbackURL: "http://localhost:3000", // Change when deployed
    scope: ["login", "vote", "comment", "post"],
});

export { client };

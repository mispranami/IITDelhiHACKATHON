import hivesigner from "hivesigner";

const client = new hivesigner.Client({
    app: "",
    callbackURL: "http://localhost:3000", // Change this for production
    scope: ["login", "vote", "comment"],
});

export default client;

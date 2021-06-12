import tap from "tap";
import { fastifyServer } from "../src";
tap.test("one", async (t) => {
    t.teardown(async () => await fastifyServer.close());
    t.test("two", async (t) => {
        const response = await fastifyServer.inject({
            method: "get",
            url: "/",
        });
        t.equal(1, 1);
    });
    t.test("two", async (t) => {
        t.equal(1, 1);
    });
});

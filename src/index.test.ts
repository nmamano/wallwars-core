import { version } from "../src/index";

describe("version", () => {
  it("current version", () => {
    expect(version()).toEqual("wallwars-core v0.0.6");
  });
});

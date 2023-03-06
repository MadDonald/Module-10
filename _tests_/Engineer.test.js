const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the engineer's GitHub username", () => {
      const engineer = new Engineer("John", 123, "john@test.com", "john-github");
      expect(engineer.getGithub()).toEqual("john-github");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer("John", 123, "john@test.com", "john-github");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});

const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the intern's school", () => {
      const intern = new Intern("John", 123, "john@test.com", "University of Texas");
      expect(intern.getSchool()).toEqual("University of Texas");
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("John", 123, "john@test.com", "University of Texas");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});

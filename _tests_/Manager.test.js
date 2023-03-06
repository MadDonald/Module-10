const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
      const manager = new Manager("John", 123, "john@test.com", 456);
      expect(manager.getOfficeNumber()).toEqual(456);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const manager = new Manager("John", 123, "john@test.com", 456);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});

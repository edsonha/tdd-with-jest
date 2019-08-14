//toBe - Use .toBe to compare primitive values
const can = {
  name: "pamplemousse",
  ounces: 12
};

describe("the can", () => {
  test("has 12 ounces", () => {
    expect(can.ounces).toBe(12);
  });

  test("has a sophisticated name", () => {
    expect(can.name).toBe("pamplemousse");
  });
});

//toEqual - Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality).
const can1 = {
  flavor: "grapefruit",
  ounces: 12
};

const can2 = {
  flavor: "grapefruit",
  ounces: 12
};

describe("the La Croix cans on my desk", () => {
  test("have all the same properties", () => {
    expect(can1).toEqual(can2);
  });
  test("are not the exact same can", () => {
    // expect(can1).toBe(can2); //will fail
    expect(can1).not.toBe(can2);
  });
});

//toMatchObject - to check that a JavaScript object matches a subset of the properties of an object.
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white"
  }
};
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/)
  }
};
describe("the house", () => {
  test("the house has my desired features", () => {
    expect(houseForSale).toMatchObject(desiredHouse);
  });
});

describe("toMatchObject applied to arrays", () => {
  test("the number of elements must match exactly", () => {
    expect([{ foo: "bar" }, { baz: 1 }]).toMatchObject([
      { foo: "bar" },
      { baz: 1 }
    ]);
  });

  // .arrayContaining "matches a received array which contains elements that
  // are *not* in the expected array"
  // so this will fail
  test(".toMatchObject does not allow extra elements", () => {
    expect([{ foo: "bar" }, { baz: 1 }]).not.toMatchObject([{ foo: "bar" }]);
  });

  test(".toMatchObject is called for each elements, so extra object properties are okay", () => {
    expect([{ foo: "bar" }, { baz: 1, extra: "quux" }]).toMatchObject([
      { foo: "bar" },
      { baz: 1 }
    ]);
  });
});

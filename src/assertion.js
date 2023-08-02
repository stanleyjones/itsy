class AssertionError extends Error {
  constructor(message = "Assertion failed") {
    super(message);
    this.name = "AssertionError";
  }
}

export function assert(condition, message) {
  if (!condition) {
    throw new AssertionError(message);
  }
}

export function assertEq(...args) {
  const [left, right] = args.map(JSON.stringify);
  assert(left === right, `Expected ${left} to equal ${right}`);
}

export function assertNe(...args) {
  const [left, right] = args.map(JSON.stringify);
  assert(left !== right, `Expected ${left} not to equal ${right}`);
}

export function assertThrows(func) {
  let throws = false;
  try {
    func();
  } catch {
    throws = true;
  }
  assert(throws, `Expected ${func.name || "anonymous function"} to throw`);
}

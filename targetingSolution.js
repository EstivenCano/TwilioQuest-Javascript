class TargetingSolution {
  constructor(params) {
    this.x = params.x;
    this.y = params.y;
    this.z = params.z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target());

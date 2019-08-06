enum WheelKind {
  RUBBER,
  PLASTIC
}

class Wheel {
    public kind: WheelKind;
    public rpm: number = 0;
    
    constructor(kind: WheelKind) { this.kind = kind; }

    public setNewRPM(r: number) { this.rpm = r; }
}

export { Wheel, WheelKind };
import { Wheel } from '../wheel/Wheel';

export default class Vehicle {
    private numberOfWheels: number; // bigger than -1
    public wheels: Wheel[];
    private fuel: number; // 0~100
  
    constructor(numberOfWheels: number, wheels: Wheel[], fuel: number) {
        this.numberOfWheels = numberOfWheels;
        this.wheels = wheels;
        this.fuel = fuel;
    }

    public getNumberOfWheels() { return this.numberOfWheels; }
  
    public getFuel() { return this.fuel; }

    // 출발
    protected start( numberOfRPM: number ) {
        for (let i = 0; i < this.getNumberOfWheels(); i++) {
            this.wheels[i].rpm = numberOfRPM;
        }
    }
}
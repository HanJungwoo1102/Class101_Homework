import Vehicle from './Vehicle';

export class Car extends Vehicle {
    private static RPM = 5;

    // 시동을 켠다
    public startDriving() { this.start(Car.RPM); }
}
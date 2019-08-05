import Vehicle from './Vehicle';

export class Bike extends Vehicle {
    private static RPM = 8;

    // 페달을 밟는다
    public startRiding(){ this.start(Bike.RPM); }
}
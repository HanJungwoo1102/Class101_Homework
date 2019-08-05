import { Wheel , WheelKind } from './comp/wheel/Wheel';
import { Road } from './comp/road/Road';
import { Car } from './comp/vehicles/Car';
import { Bike } from './comp/vehicles/Bike';

const road = new Road();

const car = new Car(4, [new Wheel(WheelKind.RUBBER),new Wheel(WheelKind.RUBBER),new Wheel(WheelKind.RUBBER),new Wheel(WheelKind.RUBBER)], 100);

const bike = new Bike(2, [new Wheel(WheelKind.PLASTIC), new Wheel(WheelKind.PLASTIC)], 50);

road.getOnThisRoad(car);
road.getOnThisRoad(bike);
car.startDriving();
bike.startRiding();

console.log("All vehicles on road: ", road.getListOftheVehiclesOnThisRoad());
console.log("isEmpty: ", road.isRoadEmpty());
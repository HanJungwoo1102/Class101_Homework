import Vehicle from '../vehicles/Vehicle';

export class Road {
    private road:Vehicle[];

    constructor(){ this.road = [] }
    
    public getOnThisRoad( vehicle: Vehicle ) { this.road.push(vehicle); }
    public getListOftheVehiclesOnThisRoad() { return this.road; }
    public isRoadEmpty() { return this.road.length === 0; }
}
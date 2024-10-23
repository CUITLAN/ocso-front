export interface Location {
    locationId: number;
    locationName: string;
    locationAddres: string;
    locationLat: number[];
    manager?: any;
    region?: any;
    empleoyees?: Empleoyees[];
}
export interface Empleoyees {
    employeeId: string;
    Empleoyename: string
    EmpleoyelastName: string
    EmpleoyePhoneNumber: string
    Empleoyeemail:string
    EmpleoyephotoUrl: string;
    location?: Location;
    user?: any;
}
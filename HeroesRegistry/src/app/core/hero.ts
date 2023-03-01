import { Mission } from "./mission";

export interface Hero {
    id: string;
    name: string;
    shortBio: string;
    missions: Mission[];
}
import { Mission } from "./mission";

export interface Hero {
    id: string;
    name: string;
    alias: string;
    shortBio: string;
    missions: Mission[];
}
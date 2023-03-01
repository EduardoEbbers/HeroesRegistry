export interface Hero {
    id: string;
    name: string;
    shortBio: string;
    missions: string[];
    priority: 'low' | 'medium' | 'high';
}
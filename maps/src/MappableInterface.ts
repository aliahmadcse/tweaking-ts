export interface MappAble {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

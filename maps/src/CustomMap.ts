import { MappAble } from "./MappableInterface";

export class CustomMap {
  private googleMap: google.maps.Map;

  /**
   *
   * @param divId
   */
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      }
    );
  }

  /**
   *
   * @param mappable An object with lat and lon properties
   */
  public addMarker(mappable: MappAble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("mouseover", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

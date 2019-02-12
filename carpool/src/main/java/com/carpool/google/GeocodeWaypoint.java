package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class GeocodeWaypoint {
    final private String geocoder_status;
    final private String place_id;
    final private List<String> types;

    @JsonCreator
    public GeocodeWaypoint(@JsonProperty("geocoder_status") String geocoder_status,
                           @JsonProperty("place_id") String place_id,
                           @JsonProperty("types") List<String> types) {
        this.geocoder_status = geocoder_status;
        this.place_id = place_id;
        this.types = types;
    }

    public String getGeocoder_status() {
        return geocoder_status;
    }

    public String getPlace_id() {
        return place_id;
    }

    public List<String> getTypes() {
        return types;
    }
}

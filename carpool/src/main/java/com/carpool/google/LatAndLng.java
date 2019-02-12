package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.Objects;

public class LatAndLng {
    final private double lat;
    final private double lng;

    @JsonCreator
    public LatAndLng(@JsonProperty("lat") double lat,
                     @JsonProperty("lng") double lng) {
        this.lat = lat;
        this.lng = lng;
    }

    public double getLat() {
        return lat;
    }

    public double getLng() {
        return lng;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LatAndLng latAndLng = (LatAndLng) o;
        return Double.compare(latAndLng.lat, lat) == 0 &&
                Double.compare(latAndLng.lng, lng) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(lat, lng);
    }
}

package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Polyline {
    final private String points;

    @JsonCreator
    public Polyline(@JsonProperty("points") String points) {
        this.points = points;
    }

    public String getPoints() {
        return points;
    }
}

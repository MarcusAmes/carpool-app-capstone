package com.carpool.google;

import com.carpool.google.LatAndLng;
import com.carpool.google.TextAndValue;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimplifiedStep {
    private final TextAndValue distance;
    private final TextAndValue duration;
    private final LatAndLng end_location;
    private final LatAndLng start_location;

    @JsonCreator
    public SimplifiedStep(@JsonProperty("distance") TextAndValue distance,
                          @JsonProperty("duration") TextAndValue duration,
                          @JsonProperty("end_location") LatAndLng end_location,
                          @JsonProperty("start_location") LatAndLng start_location) {
        this.distance = distance;
        this.duration = duration;
        this.end_location = end_location;
        this.start_location = start_location;
    }

    public TextAndValue getDistance() {
        return distance;
    }

    public TextAndValue getDuration() {
        return duration;
    }

    public LatAndLng getEnd_location() {
        return end_location;
    }

    public LatAndLng getStart_location() {
        return start_location;
    }
}

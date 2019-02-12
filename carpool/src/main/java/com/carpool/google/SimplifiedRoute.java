package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class SimplifiedRoute {
    private final LatAndLng start_location;
    private final LatAndLng end_location;
    private final TextAndValue distance;
    private final TextAndValue duration;
    private final List<SimplifiedStep> simplifiedStep;

    @JsonCreator
    public SimplifiedRoute(@JsonProperty("start_location") LatAndLng start_location,
                           @JsonProperty("end_location") LatAndLng end_location,
                           @JsonProperty("distance") TextAndValue distance,
                           @JsonProperty("duration") TextAndValue duration,
                           @JsonProperty("simplifiedStep") List<SimplifiedStep> simplifiedStep) {
        this.start_location = start_location;
        this.end_location = end_location;
        this.distance = distance;
        this.duration = duration;
        this.simplifiedStep = simplifiedStep;
    }

    public LatAndLng getStart_location() {
        return start_location;
    }

    public LatAndLng getEnd_location() {
        return end_location;
    }

    public TextAndValue getDistance() {
        return distance;
    }

    public TextAndValue getDuration() {
        return duration;
    }

    public List<SimplifiedStep> getSimplifiedStep() {
        return simplifiedStep;
    }
}

package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

public class Step {
    final private TextAndValue distance;
    final private TextAndValue duration;
    final private LatAndLng end_location;
    final private String html_instructions;
    final private Polyline polyline;
    final private LatAndLng start_location;
    final private String travel_mode;
    final private String maneuver;

    @JsonCreator
    public Step(@JsonProperty("distance") TextAndValue distance,
                @JsonProperty("duration") TextAndValue duration,
                @JsonProperty("end_location") LatAndLng end_location,
                @JsonProperty("html-instructions") String html_instructions,
                @JsonProperty("polyline") Polyline polyline,
                @JsonProperty("start_location") LatAndLng start_location,
                @JsonProperty("travel_mode") String travel_mode,
                @JsonProperty("maneuver") String maneuver) {
        this.distance = distance;
        this.duration = duration;
        this.end_location = end_location;
        this.html_instructions = html_instructions;
        this.polyline = polyline;
        this.start_location = start_location;
        this.travel_mode = travel_mode;
        this.maneuver = maneuver;
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

    public String getHtml_instructions() {
        return html_instructions;
    }

    public Polyline getPolyline() {
        return polyline;
    }

    public LatAndLng getStart_location() {
        return start_location;
    }

    public String getTravel_mode() {
        return travel_mode;
    }

    public String getManeuver() {
        return maneuver;
    }
}

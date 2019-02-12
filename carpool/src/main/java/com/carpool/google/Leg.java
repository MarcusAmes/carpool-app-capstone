package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

public class Leg {
    final private TextAndValue distance;
    final private TextAndValue duration;
    final private String end_address;
    final private LatAndLng end_location;
    final private String start_address;
    final private LatAndLng start_location;
    final private List<Step> steps;
    final private List<String> traffic_speed_entry;
    final private List<String> via_waypoint;

    @JsonCreator
    public Leg(@JsonProperty("distance") TextAndValue distance,
               @JsonProperty("duration") TextAndValue duration,
               @JsonProperty("end_address") String end_address,
               @JsonProperty("end_location") LatAndLng end_location,
               @JsonProperty("start_address") String start_address,
               @JsonProperty("start_location") LatAndLng start_location,
               @JsonProperty("steps") List<Step> steps,
               @JsonProperty("traffic_speed_entry") List<String> traffic_speed_entry,
               @JsonProperty("via_waypoint") List<String> via_waypoint) {
        this.distance = distance;
        this.duration = duration;
        this.end_address = end_address;
        this.end_location = end_location;
        this.start_address = start_address;
        this.start_location = start_location;
        this.steps = steps;
        this.traffic_speed_entry = traffic_speed_entry;
        this.via_waypoint = via_waypoint;
    }

    public TextAndValue getDistance() {
        return distance;
    }

    public TextAndValue getDuration() {
        return duration;
    }

    public String getEnd_address() {
        return end_address;
    }

    public LatAndLng getEnd_location() {
        return end_location;
    }

    public String getStart_address() {
        return start_address;
    }

    public LatAndLng getStart_location() {
        return start_location;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public List<String> getTraffic_speed_entry() {
        return traffic_speed_entry;
    }

    public List<String> getVia_waypoint() {
        return via_waypoint;
    }
}

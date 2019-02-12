package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

public class Route {
    final private Bound bounds;
    final private String copyrights;
    final private List<Leg> legs;
    final private Polyline overview_polyline;
    final private String summary;
    final private List<String> warnings;
    final private List<String> waypoint_order;

    @JsonCreator
    public Route(@JsonProperty("bounds") Bound bounds,
                 @JsonProperty("copyrights") String copyrights,
                 @JsonProperty("legs") List<Leg> legs,
                 @JsonProperty("overview_polyline") Polyline overview_polyline,
                 @JsonProperty("summary") String summary,
                 @JsonProperty("warnings") List<String> warnings,
                 @JsonProperty("waypoint_order") List<String> waypoint_order) {
        this.bounds = bounds;
        this.copyrights = copyrights;
        this.legs = legs;
        this.overview_polyline = overview_polyline;
        this.summary = summary;
        this.warnings = warnings;
        this.waypoint_order = waypoint_order;
    }

    public Bound getBounds() {
        return bounds;
    }

    public String getCopyrights() {
        return copyrights;
    }

    public List<Leg> getLegs() {
        return legs;
    }

    public Polyline getOverview_polyline() {
        return overview_polyline;
    }

    public String getSummary() {
        return summary;
    }

    public List<String> getWarnings() {
        return warnings;
    }

    public List<String> getWaypoint_order() {
        return waypoint_order;
    }
}

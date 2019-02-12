package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

public class GoogleResponse {
    final private List<GeocodeWaypoint> geocoded_waypoints;
    final private List<Route> routes;
    final private String status;

    @JsonCreator
    public GoogleResponse(@JsonProperty("geocoded_waypoints") List<GeocodeWaypoint> geocoded_waypoints,
                          @JsonProperty("routes") List<Route> routes,
                          @JsonProperty("status") String status) {
        this.geocoded_waypoints = geocoded_waypoints;
        this.routes = routes;
        this.status = status;
    }

    public List<GeocodeWaypoint> getGeocoded_waypoints() {
        return geocoded_waypoints;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public String getStatus() {
        return status;
    }
}

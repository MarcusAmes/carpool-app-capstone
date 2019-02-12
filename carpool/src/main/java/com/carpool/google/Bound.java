package com.carpool.google;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Bound {
    final private LatAndLng northeast;
    final private LatAndLng southwest;

    @JsonCreator
    public Bound(@JsonProperty("northeast") LatAndLng northeast,
                 @JsonProperty("southeast") LatAndLng southwest) {
        this.northeast = northeast;
        this.southwest = southwest;
    }

    public LatAndLng getNortheast() {
        return northeast;
    }

    public LatAndLng getSouthwest() {
        return southwest;
    }
}

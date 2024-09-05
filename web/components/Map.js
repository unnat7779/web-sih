"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""
        ></script>
      </head>
      <MapContainer
        center={[23.5937, 80.9629]} // Centering the map on India
        zoom={4} // Zoom level to fit the whole of India
        scrollWheelZoom={true} // Enable zooming with the scroll wheel
        style={{ height: "347px", width: "519px" }} // Adjusted map size
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.750604, 77.116526]}>
          <Popup>
            Marker 1 in India. <br /> Customizable text here.
          </Popup>
        </Marker>
        <Marker position={[28.752098, 77.117228]}>
          <Popup>
            Marker 2 in India. <br /> Customizable text here.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

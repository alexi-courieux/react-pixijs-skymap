﻿import { FC } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Plane from "../models/Plane.tsx";
import Airport from "../models/Airport.tsx";

interface InfoPanelProps {
  plane?: Plane;
  airport?: Airport;
  onClose: () => void;
}

const InfoPanel: FC<InfoPanelProps> = ({ plane, airport, onClose }) => {

  if (!plane && !airport) {
    return null;
  }

  let content = null;

  if (plane) {
    content = (
      <>
        <Typography gutterBottom variant="h5" component="div">
          Plane Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {plane.id}
        </Typography>
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Position:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lat: {plane.pos.lat}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lon: {plane.pos.lon}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Altitude: {plane.pos.alt} m
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="body2" color="text.secondary">
          Rotation: {plane.rot * 180 / Math.PI}° degrees
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Speed: {plane.spd} km/h
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Departure: {plane.dep.name} ({plane.dep.code})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Arrival: {plane.arr.name} ({plane.arr.code})
        </Typography>
      </>
    );
  }

  if (airport) {
    content = (
      <>
        <Typography gutterBottom variant="h5" component="div">
          Airport Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {airport.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {airport.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: Lat {airport.pos.lat}, Lon {airport.pos.lon}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Altitude: {airport.pos.alt} m
        </Typography>
      </>
    );
  }

  return (
    <Card>
      <CardContent>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        {content}
      </CardContent>
    </Card>
  );
};

export default InfoPanel;
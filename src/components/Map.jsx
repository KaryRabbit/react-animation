import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';
import * as colors from '../colors';

const Map = () => {
  const points = [
    { City: 'Paris', Coordinates: [2.351153217820679, 48.85724432608836] },
    { City: 'Dublin', Coordinates: [-6.265622795810476, 53.35044643240651] },
    { City: 'Madrid', Coordinates: [-3.698764596937793, 40.415971758594765] },
    { City: 'Oslo', Coordinates: [10.306243223665298, 60.52438730218127] },
    { City: 'Rome', Coordinates: [12.76857569281849, 41.925514093755716] },
  ];
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-2, 7],
        scale: 1700,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography="/features.json"
        fill={colors.blueAccentColor}
        stroke={colors.primaryColor}
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      {points.map((point) => (
        <Annotation
          key={point.City}
          subject={point.Coordinates}
          dx={point.Dx || -60}
          dy={point.Dy || -20}
          connectorProps={{
            stroke: colors.primaryColor,
            strokeWidth: 2,
            strokeLinecap: 'round',
          }}
        >
          <text
            x={point.X || '-10'}
            y={point.Y || '0'}
            textAnchor="end"
            alignmentBaseline="middle"
            fill={colors.primaryColor}
          >
            {point.City}
          </text>
        </Annotation>
      ))}
    </ComposableMap>
  );
};

export default Map;

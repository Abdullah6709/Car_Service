import React from 'react';
import CostEstimator from '../components/CostEstimator';

export default function EstimatorPage({ onOpenBooking }) {
  return (
    <CostEstimator
      onBookCustomPackage={(packageData) => {
        onOpenBooking({
          serviceIds: packageData.serviceIds,
          segment: packageData.segment,
        });
      }}
    />
  );
}

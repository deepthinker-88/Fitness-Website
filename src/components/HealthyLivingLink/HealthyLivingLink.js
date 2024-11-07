import React from "react";
import { useNavigate } from "react-router-dom";

export default function HealthyLivingPageLink() {
  const navigate = useNavigate();

  const handleGoToLivingPageLink = () => {
    navigate("/healthy-living");
  };
  return (
    <a href = "/healthy-living" onClick={handleGoToLivingPageLink}>
      healthy-living
    
    </a>
  );
}

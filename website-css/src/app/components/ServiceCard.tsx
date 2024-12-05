import React, { ReactNode } from "react";

interface PropsType {
  title: string;
  icon: ReactNode;
  desc: string;
}

const ServiceCard = ({ title, icon, desc }: PropsType) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">{icon}</div>
      <div>
        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

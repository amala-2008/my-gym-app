import "./eqmt.css";
import { useState, useMemo } from "react";

import treadmill from "../assets/images/treadmil.png";
import bike from "../assets/images/bike.png";
import dumbbells from "../assets/images/dumbells.png";
import barbell from "../assets/images/barbell.png";
import benchpress from "../assets/images/benchpress.png";
import legpress from "../assets/images/legpress.png";
import chestpress from "../assets/images/chestpress.png";
import shoulderpress from "../assets/images/shoulderpress.webp";
import cablemachine from "../assets/images/cablemachine.jpg";
import latpulldown from "../assets/images/latpulldown.jpg";
import smithmachine from "../assets/images/smithmachine.jpg";
import rowingmachine from "../assets/images/rowingmachine.webp";
import Navbar from "../components/Navbar";

function Eqmt() {
  const [search, setSearch] = useState("");

  const equipments = [
    { name: "Treadmill", image: treadmill },
    { name: "Exercise Bike", image: bike },
    { name: "Dumbbells", image: dumbbells },
    { name: "Barbell", image: barbell },
    { name: "Bench Press", image: benchpress },
    { name: "Leg Press", image: legpress },
    { name: "Chest Press", image: chestpress },
    { name: "Shoulder Press", image: shoulderpress },
    { name: "Cable Machine", image: cablemachine },
    { name: "Lat Pulldown", image: latpulldown },
    { name: "Smith Machine", image: smithmachine },
    { name: "Rowing Machine", image: rowingmachine },
  ];

  const filteredEquipments = useMemo(() => {
    return equipments.filter((equipment) =>
      equipment.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="equipment-container">
      <Navbar/>
      <h1 className="title">Gym Equipments</h1>

      <input
        type="text"
        placeholder="Search Equipment..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="equipment-grid">
        {filteredEquipments.map((equipment, index) => (
          <div className="equipment-card" key={index}>
            <img src={equipment.image} alt={equipment.name} />
            <h3>{equipment.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eqmt;
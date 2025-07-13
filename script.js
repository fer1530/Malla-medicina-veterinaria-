body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f9fc;
}

h1 {
  text-align: center;
  color: #005b80;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 30px;
}

.curso {
  background-color: #cfe8ff;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background 0.3s;
}

.curso:hover {
  background-color: #a7d2f7;
}

.popup {
  display: none;
  position: fixed;
  top: 20%;
  left: 30%;
  width: 40%;
  background-color: #fff;
  border: 1px solid #aaa;
  box-shadow: 0 0 12px rgba(0,0,0,0.2);
  padding: 20px;
  z-index: 1000;
  border-radius: 10px;
}

.popup-content {
  position: relative;
}

.cerrar {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #444;
}


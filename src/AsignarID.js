import React from "react";

const revisarID = (bdColaboradores, historialId, setHistorialId) => {
  if (historialId.length == 0) {
    let maxID = Math.max.apply(
      Math,
      bdColaboradores.map(function (o) {
        return (Number(o.id) + 1).toString();
      })
    );
    return maxID.toString();
  } else {
    let minID = Math.min.apply(
      Math,
      historialId.map(function (o) {
        return o;
      })
    );
    return minID.toString();
  }
};

export default revisarID;

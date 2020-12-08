// JavaScript source code
import React from "react";
import _ from "lodash";

export default function Item(props) {
  const item_infos = Object.keys(props).map(function(prop, i) {
    return _.isObjectLike(props[prop]) ? (
      ""
    ) : (
      <div className="info" key={"info-" + prop + i}>
        <strong className="info__prop">{prop + ": "}</strong>
        <span className="info__value">{props[prop]}</span>
      </div>
    );
  });

  return (
    <div className="item">
      <h3>{props.itemName}</h3>
      <div className="item__description">{props.description}</div>
      <div className="item__infos">{item_infos}</div>
    </div>
  );
}

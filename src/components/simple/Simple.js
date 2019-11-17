import React from "react";
import "./Simple.scss";
/**
 * Simple
 */
export const Simple = ({ data, clickHandler }) => (<div className="simple" onClick={clickHandler}>{data}</div>);
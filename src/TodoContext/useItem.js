import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useItem(itemName_V1, initial_Items) {
  const [items, setItems] = React.useState(initial_Items);
  const [loading, setloading] = React.useState(true);
  const [errores, seterrores] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (JSON.parse(localStorage.getItem(itemName_V1) == null)) {
          initial_Items = initial_Items;
        } else {
          initial_Items = JSON.parse(localStorage.getItem(itemName_V1));
        }
        setloading(false);
        setItems(initial_Items);
      } catch (error) {
        seterrores(error);
      }
    }, 1000);
  }, []);

  const setStorage = (params) => {
    try {
      setItems(params);
      localStorage.setItem(itemName_V1, JSON.stringify(params));
      initial_Items = JSON.parse(localStorage.getItem(itemName_V1));
    } catch (error) {
      seterrores(error);
    }
  };

  return { items, setStorage, loading, errores };
}

export { useItem };

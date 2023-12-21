import { useState, useEffect } from "react";

/* note this isn't part of the Item interface -- it's a separate array that keep tracks
of item index and count of said index */

const useItemCounts = () => {
  const [itemCount, setItemCount] = useState(() => {
    const savedItems = localStorage.getItem("itemCount");
    return savedItems ? JSON.parse(savedItems) : {};
  });

  useEffect(() => {
    localStorage.setItem("itemCount", JSON.stringify(itemCount));
  }, [itemCount]);

  const incrementCount = (index: number) => {
    // if item doesn't already have a count, it will have count of 1 upon being initially added to the list
    const newCount = itemCount[index] + 1 ? itemCount[index] + 1 : 1;
    const updatedItemsCount = {
      ...itemCount,
      [index]: newCount,
    };
    setItemCount(updatedItemsCount);
  };

  const decrementCount = (index: number) => {
    // if item is already in list (has count more than 0), decrement, if it doesn't exist initialize it with 0
    const newCount =
      (itemCount[index] && itemCount[index]) > 0 ? itemCount[index] - 1 : 0;
    const updatedItemsCount = {
      ...itemCount,
      [index]: newCount,
    };
    setItemCount(updatedItemsCount);
  };

  const clearCount = (index: number) => {
    const updatedItemsCount = {
      ...itemCount,
      [index]: 0,
    };
    setItemCount(updatedItemsCount);
  };

  return { incrementCount, decrementCount, clearCount, itemCount };
};

export default useItemCounts;

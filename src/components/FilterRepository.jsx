import { Picker } from "@react-native-picker/picker";
import React from "react";

const FilterRepository = ({ sortBy, setSortBy }) => {
  return (
    <Picker
      selectedValue={sortBy}
      onValueChange={(itemValue) => setSortBy(itemValue)}
    >
      <Picker.Item label="latest" value="createdAt" />
      <Picker.Item label="highest rated" value="highRate" />
      <Picker.Item label="lowest rated" value="lowRate" />
    </Picker>
  );
};

export default FilterRepository;

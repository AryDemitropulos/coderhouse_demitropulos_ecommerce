import React from "react";
import { Box, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AdjustIcon from "@mui/icons-material/Adjust";

const CategoriesList = ({ categories, selectedCategory }) => {
  const selectedIcon = <AdjustIcon />;

  const isCategorySelected = (category) =>
    selectedCategory?.toLocaleLowerCase() === category?.toLocaleLowerCase();

  return (
    <Box mt={2}>
      <Stack direction="row" spacing={1}>
        {categories.map((category, index) => (
          <Link to={"/category/" + category} key={index}>
            <Chip
              label={category}
              color={isCategorySelected(category) ? "success" : "primary"}
              variant={isCategorySelected(category) ? "filled" : "outlined"}
              clickable
              icon={isCategorySelected(category) ? selectedIcon : null}
            />
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesList;

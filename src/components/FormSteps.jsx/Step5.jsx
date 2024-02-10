import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Step5 = () => {
  return (
    <Card className="w-full mx-auto ">
      <List className="flex-row ">
        <ListItem className="p-0 ">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <img
              className="h-full w-64 relative object-cover object-center"
              src="amazon-associate.png"
              alt="nature image"
            />
            <ListItemPrefix className="mr-3 absolute left-1/3 scale-125 ">
              <Checkbox
                color="indigo"
                id="horizontal-list-react"
                ripple={false}
                className="hover:before:opacity-0 border-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <img
              className="h-full w-64 relative object-cover object-center"
              src="mediavine.png"
              alt="nature image"
            />
            <ListItemPrefix className="mr-3 absolute left-1/3 scale-125">
              <Checkbox
                color="indigo"
                id="horizontal-list-vue"
                ripple={false}
                className="hover:before:opacity-0 border-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <img
              className="h-full relative w-64  object-cover object-center"
              src="clickbank.png"
              alt="nature image"
            />
            <ListItemPrefix className=" absolute left-1/3 mr-3 scale-125">
              <Checkbox
                color="indigo"
                id="horizontal-list-svelte"
                ripple={false}
                className="hover:before:opacity-0 border-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
          </label>
        </ListItem>
      </List>
    </Card>
  );
};

export default Step5;

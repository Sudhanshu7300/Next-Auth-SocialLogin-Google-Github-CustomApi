"use client";
import React from "react";
import Menuitems from "./MenuItems";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import Image from "next/image";
import TestLogo from "../../../assets/Images/test-logo.jpg";
import Link from "next/link";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  return (
    <Box sx={{ px: 3 }}>
      <Image src={TestLogo} alt="TestLogo" height={85} width={200} />
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item: any) => {
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;

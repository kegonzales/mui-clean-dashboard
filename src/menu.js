import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import React from "react";

export const menu = [
    {
        icon: <HomeOutlinedIcon />,
        title: "Home",
        to: "/"
    },
    {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Software",
        items: [
            {
                title: "Software 1",
                items: [
                    {
                        title: "Description",
                        to: "/soft1/desc"
                    },
                    {
                        title: "Read Me",
                        to: "/soft1/read"
                    },
                    {
                        title: "Download",
                        to: "/soft1/download"
                    }
                ]
            },
            {
                title: "Software 2",
                items: [
                    {
                        title: "Description",
                        to: "/soft2/desc"
                    },
                    {
                        title: "Read Me",
                        to: "/soft2/read"
                    },
                    {
                        title: "Download",
                        to: "/soft2/download"
                    }
                ]
            }
        ]
    },
    {
        icon: <TrendingUpOutlinedIcon />,
        title: "About",
        to: "/about"
    },
    {
        icon: <DescriptionOutlinedIcon />,
        title: "Contact",
        to: "/contact"
    }
];

import { useContext } from 'react';
import InputBase from '@mui/material';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import { LightModeOutlinedIcon } from '@mui/icons-material/LightModeOutlined';
import { DarkModeOutlinedIcon } from '@mui/icons-material/DarkModeOutlined';
import { NotificationsOutlinedIcon } from '@mui/icons-material/NotificationsOutlined';
import { SettingsOutlinedIcon } from '@mui/icons-material/SettingsOutlined';
import { PersonOutlinedIcon } from '@mui/icons-material/PersonOutlined';
import { SearchIcon } from '@mui/icons-material/Search';

import React from 'react'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
        <h1>Topbar</h1>
    </div>
  )
}

export default Topbar;
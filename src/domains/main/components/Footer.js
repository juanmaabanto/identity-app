import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LanguageSelect from '../../../components/select/LanguageSelect';

const LinkItem = (props) => {
    const { sx, ...other } = props;

    return (
        <Link
            color="textPrimary"
            underline="hover"
            sx= {{
                fontSize: '0.875rem',
                display: 'inline-block',
                lineHeight: '28px',
                ml: '0.5rem',
                mr: '0.5rem',
                ...sx
            }}
            {...other}
        />
    );
};

LinkItem.propTypes = {
    sx: PropTypes.object,
};
  

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{
            bottom: 0,
            left: 0,
            minHeight: '1.75rem',
            position: 'absolute',
            width: '100%',
            zIndex: 1200
        }}>
            <Box sx={{ float: 'left' }}>
                <LanguageSelect />
            </Box>
            <Box sx={{ float: 'right' }}>
                <LinkItem  href="#">{t('main.footer.help')}</LinkItem>
                <LinkItem href="#">{t('main.footer.terms')}</LinkItem>
                <LinkItem href="#">{t('main.footer.privacy')}</LinkItem>
            </Box>
        </Box>
    );
};

export default Footer;
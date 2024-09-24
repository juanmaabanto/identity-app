import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import i18next from 'i18next';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Popover from '@mui/material/Popover';

const languageMap = {
    en: { label: 'English', dir: 'ltr', active: true },
    es: { label: 'Español', dir: 'ltr', active: false },
    pt: { label: 'Português', dir: 'ltr', active: false },
    qu: { label: 'Quechua', dir: 'ltr', active: false },
};

const LanguageSelect = () => {
    let [searchParams] = useSearchParams();
    const [menuAnchor, setMenuAnchor] = useState(null);
    const selected = searchParams.get('lng') || i18next.language || 'en';

    useEffect(() => {
        if (i18next.getDataByLanguage(selected)) {
            document.title = i18next.getDataByLanguage(selected).translation['document.title'];
        }
    }, [selected])

    return (
        <>
            <Button
                onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
                sx={{
                    color: 'text.primary',
                    fontWeight: 400
                }}
            >
                {languageMap[selected].label}
                <ArrowDropDown fontSize='small' />
            </Button>
            <Popover
                anchorEl={menuAnchor}
                open={!!menuAnchor}
                onClose={() => setMenuAnchor(null)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <List>
                    {Object.keys(languageMap)?.map(item => (
                        <ListItemButton
                            key={item}
                            onClick={() => {
                                if ('URLSearchParams' in window) {
                                    var searchParams = new URLSearchParams(window.location.search);
                                
                                    searchParams.set("lng", item);
                                    window.location.search = searchParams.toString();
                                }
                                setMenuAnchor(null)
                            }}
                        >
                            {languageMap[item].label}
                        </ListItemButton>
                    ))}
                </List>
            </Popover>
        </>
    );
};

export default LanguageSelect;
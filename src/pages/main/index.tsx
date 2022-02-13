import * as React from 'react';
import { Container, Box,Autocomplete,TextField,Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import './index.css';

function convertSpace(word: string) : string {
    return word? word.trim().replace(/[\s]+/g, '+') : '';
}

function Main() {
    const history = useHistory();
    const [value, setValue]  = React.useState('')
    const [inputValue, setInputValue]  = React.useState('')
    
    function goSearch(val: string): void {
        const searchWord: string = convertSpace(val); // 去掉首尾空格后将空格转换为“+”号
        history.push(`/search/${searchWord}`);
    }
    
    return (
        <div className="page-main">
            <header className="page-main-header">
                <span className="word-hl">Best</span>Search
            </header>
            <Container fixed>
                <h3 className="page-main-title">Search Trends</h3>
                <Box sx={{ height: 'auto',display: 'flex' }} >
                    <Autocomplete
                        sx={{flex: 1, marginRight: '10px'}}
                        freeSolo
                        options={[]}
                        value={value}
                        inputValue={inputValue}
                        onChange={(ev, newVal: string | null) => {
                            console.log(newVal)
                            // setValue(newVal);
                            goSearch(newVal || '');
                        }}
                        onInputChange={(ev, newVal: string | null) => setInputValue(newVal || '')}
                        renderInput={(params) => <TextField {...params} label="Related product trends" />}
                    />
                    <Button variant="outlined" sx={{borderColor: '#bfbdb6', color: '#64635f'}} onClick={() => goSearch(inputValue)}><Search /></Button>
                </Box>
            </Container>
        </div>
    )
}

export default Main;
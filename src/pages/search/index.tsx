import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Box, Autocomplete, TextField, Button, Grid} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    searchResult,
    fetchResultAsync,
} from '../../store/reduces/search';

import Item from './Item';
import './index.css';

interface routerParams { 
    searchWord: string;
}

function convertPlus(word: string) : string {
    return word? word.replace(/\+/g, ' ') : ''; // 将加号转成空格
}
function convertSpace(word: string) : string {
    return word? word.trim().replace(/[\s]+/g, '+') : '';// 去掉首尾空格后将空格转换为“+”号
}

function PageSearch() {
    const result = useAppSelector(searchResult);
    const dispatch = useAppDispatch();
    const history = useHistory();
    const { searchWord } : routerParams = useParams();
    const [value, setValue]  = React.useState(convertPlus(searchWord));

    function goSearch(val: string): void {
        const wrod: string = convertSpace(val); 
        search();
        history.push(`/search/${wrod}`);
    }

    function search() {
        const params = {
            "login_token":"INTERVIEW_SIMPLY2021",
            "search_phrase": searchWord,
        }
        dispatch(fetchResultAsync(params))
    }

    // 执行一次搜索请求
    React.useEffect(() => search(), []);
    console.log('查询列表')

    return (
        <div className="page-search">
            <header className="page-search-header">
                <Box sx={{ height: '32px',display: 'flex', maxWidth: '1000px'}} >
                    <Box sx={{ width: '150px' }}>
                        <span className="word-hl">Best</span>Search
                    </Box>
                    <Box sx={{ height: '32px',display: 'flex', flex: 1, }} >
                         <TextField 
                            id="input_search"
                            sx={{flex: 1, height: 'auto',marginRight: '10px', '& .MuiInputLabel-root': { lineHeight: '15px'}}}
                            size="small"
                            defaultValue={value}
                            onChange={(e) => {
                                console.log('输入搜索单词', e, e.target.value)
                                setValue(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                if (e && 13 === e.nativeEvent.keyCode) {

                                    console.log('回车键触发')
                                    goSearch(value)
                                }
                            }}
                            label="Related product trends" />
                        <Button id="button_search" variant="outlined" sx={{borderColor: '#bfbdb6', color: '#64635f'}} onClick={() => goSearch(value)}><Search /></Button>
                    </Box>
                </Box>
            </header>
           
            <Container maxWidth="lg" fixed>
                <h6>Related Product trends</h6>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        {Array.from(result).map((item, index) => (
                            <Grid item xs={2} sm={4} md={3} key={index}>
                                <Item data={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default PageSearch;
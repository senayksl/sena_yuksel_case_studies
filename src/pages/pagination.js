import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded(props) {
    return (
        <Stack spacing={2} style={{alignItems:"center"}}>
            <Pagination onChange={(event,page)=> {
                props.setPage(page)
                console.log(page)
            }} count={!!props?.pageSize?props.pageSize:1} page={props.page} shape="rounded" />
        </Stack>
    );
}

import { Paper, Skeleton, Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  interface ItemModel { 
      name: string;
      search_msv: Array<object>;
  }
interface ItemProps { 
    data: ItemModel,
}

export default function item(props: ItemProps) {
    let { data } = props;
    console.log('传入item的data参数', data);
    
    return (
        <Item sx={{ height: '200px'}}>
            {/* <Skeleton variant="rectangular" width="100%" height={118} />
            <Skeleton />
            <Skeleton width="60%" /> */}
            <Grid container direction="column" height="100%">
                <Grid item xs>
                    <Skeleton variant="rectangular" width="100%" height="100%" />
                </Grid>
                <Grid item xl={2}>
                    <Typography variant="body2" color="text.secondary">
                        {data.name}
                    </Typography>
                </Grid>
            </Grid>
        </Item>
    )
}
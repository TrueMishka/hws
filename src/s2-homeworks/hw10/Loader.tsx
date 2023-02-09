import s from './Loader.module.css'
import {Box, CircularProgress} from "@mui/material";

export const Loader = () => {
    return (
        <div className={s.loader}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

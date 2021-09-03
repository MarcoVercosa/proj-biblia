import { React, useState, memo } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import "./header.css"




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },

    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: "none",
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },


        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(1),
            width: '60%',
        },


    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },



}));

function SearchAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const [dataPesquisa, setDataPesquisa] = useState()

    function Buscar(tecla) {

        if (tecla.key === "Enter") {
            if (dataPesquisa === undefined || dataPesquisa.length < 2) {
                alert("Digite ao menos 2 letras para iniciar a pesquisa")
                return
            }
            // alert("Pressione o botão buscar para encontrar o que deseja")
            window.location.href = `/biblianvi/pesquisa/${dataPesquisa}`
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative" style={{ backgroundColor: "#14a37f" }}>
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />

                    </IconButton> */}


                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
                        <i style={{ color: "white" }} class="fas fa-bars fa-2x"></i>

                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link className='li-vamos' to="/">
                            <MenuItem onClick={handleClose}>INÍCIO</MenuItem></Link>
                        <Link className='li-vamos' to="/biblianvi#selecionar">
                            <MenuItem onClick={handleClose}>LEITURA DA BÍBLIA</MenuItem></Link>
                        <Link className='li-vamos' to="/harpacrista">
                            <MenuItem onClick={handleClose}>HINOS DA HARPA</MenuItem></Link>
                        <Link className="li-vamos" to="/sobre">
                            <MenuItem onClick={handleClose}>SOBRE</MenuItem></Link>
                    </Menu>





                    <Typography style={{ display: "flex", fontFamily: 'Lora' }}
                        className={classes.title} variant="h4" noWrap>
                        <span style={{ marginLeft: "15px" }}
                            className="icone-bible"><i className="fas fa-bible fa-1x"></i></span> <span className="SearchAppBar-spam" style={{ marginLeft: "25px" }}> FONTE DE VIDA on line</span>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={(recebe) => { setDataPesquisa(recebe.target.value) }}
                            onKeyDown={(recebe) => { Buscar(recebe) }}
                            placeholder="Pesquisar"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />

                    </div>
                    {/* <Link to={`/biblianvi/pesquisa/${dataPesquisa}`}>
                        <Button
                            style={{ marginLeft: "7px" }}
                            variant="contained">Buscar
                        </Button>
                    </Link> */}
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default memo(SearchAppBar)
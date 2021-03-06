import React,{useState,useEffect, useContext} from 'react';
import { AppContextVotes } from '../ContextApi/contextApi_2';
import Loader from 'react-loader-spinner';
import {db} from "../config";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';


function createData(student_id, president, vice_president, src_president, secretary) {
  return { student_id, president, vice_president,src_president,secretary};
}

const rows = [
  createData('Cupcake', 305, 50),
  createData('Donut', 452 ,50),
  createData('Eclair', 262 ,50),
  createData('Frozen yoghurt', 159 ,50),
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const headCells = [
  { id: 'student_id', numeric: false, disablePadding: true, label: 'Student Id' },
  { id: 'president', numeric: true, disablePadding: false, label: 'President' },
  { id: 'vice_president', numeric: true, disablePadding: false, label: 'Vice President' },
  { id: 'src_president', numeric: true, disablePadding: false, label: 'SRC President' },
  { id: 'secretary', numeric: true, disablePadding: false, label: 'Secretary' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Voters List
        </Typography>
      )}

{/* ............................................................. */}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),

  },
  paper: {
    width: '90%',
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 50,
  },
}));



export default function Results() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = voterslist.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  

    const [voterslist,setVotersList] = useState([]);
    const [loading,setLoading] = useState(true);

    const {Pres,Vice,Src,Sec} = useContext(AppContextVotes);
    // console.log(Pres)
    const [newPresVote, setNewPresVote] = Pres;
    const [newViceVote, setNewViceVotes] = Vice;
    const [newSrcVote, setNewSrcVote] = Src; 
    const [newSecVote, setNewSecVote] = Sec;




    useEffect(()=> {
      db.collection('online-voting').onSnapshot((query)=> {
        setVotersList(
          query.docs.map( info => ({
            id: info.id,
            studentId: info.data().studentId,
            president: info.data().president,
            vicePresident: info.data().vicePresident,
            srcPresident: info.data().src,
            secretary: info.data().secretary,
            student_Id: info.data().student_Id,
            student_Name: info.data().student_Name,
          }))
        );
        setLoading(false);

        // FOR PRESIDENTS

        const PRESIDENT = voterslist.map((item)=> item.president);
           const Manasseh = PRESIDENT.filter((man)=> man === "Manasseh Ankrah");
           const Mohammed = PRESIDENT.filter((moh)=> moh === "Mohammed Sogbe");
           const Ruby = PRESIDENT.filter((rub)=> rub === "Ruby Bentil");
           const Dinah = PRESIDENT.filter((din)=> din === "Dinah Ofooley");
           const David = PRESIDENT.filter((dav)=> dav === "David Ankrah");
           const Judah = PRESIDENT.filter((jud)=> jud === "Judah Ankrah");

           if(Manasseh === undefined) return 0;
           if(Mohammed === undefined) return 0;
           if(Ruby === undefined) return 0;
           if(Dinah === undefined) return 0;
           if(David === undefined) return 0;
           if(Judah === undefined) return 0;

        setNewPresVote({
          Manasseh: Manasseh.length,
          Mohammed: Mohammed.length,
          Ruby: Ruby.length,
          Dinah: Dinah.length,
          David: David.length,
          Judah: Judah.length,
        })


        // FOR VICE_PRESIDENTS
    const VICE_PRESIDENT = voterslist.map((item)=> item.vicePresident)

    const Jonathan = VICE_PRESIDENT.filter((presi)=> presi === "Jonathan Bently");
    const Rosemond = VICE_PRESIDENT.filter((presi)=> presi === "Rosemond Adai");
    const Joseph = VICE_PRESIDENT.filter((presi)=> presi === "Joseph Andoh");
    const George = VICE_PRESIDENT.filter((presi)=> presi === "George Amoni");
    const Amanda = VICE_PRESIDENT.filter((presi)=> presi === "Amanda Acquah");
    const Jude = VICE_PRESIDENT.filter((presi)=> presi === "Jude Benson");

        if(Jonathan === undefined) return 0;
        if(Rosemond === undefined) return 0;
        if(Joseph === undefined) return 0;
        if(George === undefined) return 0;
        if(Amanda === undefined) return 0;
        if(Jude === undefined) return 0;

    setNewViceVotes({
      Jonathan: Jonathan.length,
      Rosemond: Rosemond.length,
      Joseph: Joseph.length,
      George: George.length,
      Amanda: Amanda.length,
      Jude: Jude.length
    })



  // FOR SRC_PRESIDENTS
const SRC_PRESIDENT = voterslist.map((item)=> item.srcPresident)

const Patience = SRC_PRESIDENT.filter((presi)=> presi === "Patience Ankrah");
const Daniel = SRC_PRESIDENT.filter((presi)=> presi === "Daniel Darko");
const Charlotte = SRC_PRESIDENT.filter((presi)=> presi === "Charlotte Adams");
const Jeremy = SRC_PRESIDENT.filter((presi)=> presi === "Jeremy Westland");
const Lois = SRC_PRESIDENT.filter((presi)=> presi === "Lois Essel");
const Kendrick = SRC_PRESIDENT.filter((presi)=> presi === "Kendrick Lamar");

if(Patience === undefined) return 0;
if(Daniel === undefined) return 0;
if(Charlotte === undefined) return 0;
if(Jeremy === undefined) return 0;
if(Lois === undefined) return 0;
if(Kendrick === undefined) return 0;

setNewSrcVote({
  Patience: Patience.length,
  Daniel: Daniel.length,
  Charlotte: Charlotte.length,
  Jeremy: Jeremy.length,
  Lois: Lois.length,
  Kendrick: Kendrick.length
})


// FOR SECRETARY
const SECRETARY = voterslist.map((item)=> item.secretary)

const Mercy = SECRETARY.filter((presi)=> presi === "Mercy Appiah");
const Rose = SECRETARY.filter((presi)=> presi === "Rose Prah");
const Jacob = SECRETARY.filter((presi)=> presi === "Jacob Davidson");
const Johnson = SECRETARY.filter((presi)=> presi === "Johnson Elaine");
const Nathaniel = SECRETARY.filter((presi)=> presi === "Nathaniel Essel");
const Kennedy = SECRETARY.filter((presi)=> presi === "Kennedy Asiedu");

if(Mercy === undefined) return 0;
if(Rose === undefined) return 0;
if(Jacob === undefined) return 0;
if(Johnson === undefined) return 0;
if(Nathaniel === undefined) return 0;
if(Kennedy === undefined) return 0;

setNewSecVote({
  Mercy: Mercy.length,
  Rose: Rose.length,
  Jacob: Jacob.length,
  Johnson: Johnson.length,
  Nathaniel: Nathaniel.length,
  Kennedy: Kennedy.length
})

      })
    },[])
     
   const Spinner = () => {
     return(
    <div style={{display: "flex", justifyContent: "center",alignItems:"center",marginTop: 300}} >
      <Loader type="TailSpin" color="white" height={80} width={80} />
    </div>
     )
    }
  
return(
  <div className="results__table">
      { loading ? <Spinner /> :
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={voterslist.length}
            />
            <TableBody className="tbody">
              
                {voterslist.map( vote => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, vote.studentId)}
                      role="checkbox"
                      aria-checked=""
                      tabIndex={-1}
                      key={shortid.generate()}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell component="th" id="" scope="row" padding="none">
                        { vote.student_Name +"("+ vote.student_Id +")" } 
                      </TableCell>
                      <TableCell align="right">
                        { vote.president } 
                        </TableCell>
                       <TableCell align="right">
                       { vote.vicePresident } 
                         </TableCell>
                      <TableCell align="right">
                          {vote.srcPresident}
                      </TableCell>
                      <TableCell align="right">
                          {vote.secretary}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5,10,25]}
          component="div"
          count={voterslist.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  }
  </div>
  )
}

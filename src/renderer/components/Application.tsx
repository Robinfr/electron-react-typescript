import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles'
import styled, { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import InputBase from '@material-ui/core/InputBase'
import Avatar from '@material-ui/core/Avatar'

import CustomerForm from './CustomerForm'
import CompanyList from './CompanyList'
import { mainListItems, secondaryListItems } from './ListItems'
import { Company } from '../../main/entities/Company'

var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs-extra');
var path = require('path');

const orm = (window as any).typeorm
// const dbconnection = window['dbconnection']

// const sqlite3 = require('sqlite3').verbose();
// let sqliteDB = new sqlite3.Database('./database.sqlite3', (err: any) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

const Logo = require('../assets/images/linkedin_avatar_small.png')
// import { createConnection } from 'typeorm';
// import { Company } from '../models/Company';



// createConnection({
//   type: 'sqlite',
//   database: sqliteDB,
//   // host: 'localhost',
//   // port: 3306,
//   // username: 'root',
//   // password: 'admin',
//   // database: 'test',
//   entities: [Company],
//   synchronize: true,
//   logging: false
// })
// .then(async connection => {
//   // here you can start to work with your entities
//   let company = new Company()
//   company.name = "ChickenStash, LLC"
//   company.nameShort = "Chicken"

//   await connection.manager.save(company);
//   console.log('Company has been saved');
// })
// .catch(error => console.log(error));

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();




// const theme = createMuiTheme();
const theme = {
  spacing: 4,
  palette: {
    primary: '#ff004f',
  },
}


// import Chart from './Chart'
// import Deposits from './Deposits'
// import Orders from './Orders'
const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexgrow: {
      flexGrow: 1,
    },
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    search: {
      // minWidth: 300,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 20,
      marginRight: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
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
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    topbarAvatar: {
      marginLeft: '20px'
    },


    title: {
      // flexGrow: 1,
      paddingRight: 20,
    },
    logo: {
      position: 'absolute',
      left: '19px',
      top: '17px',
      color: "#ff004f",
      fontWeight: "bold",
      width: '75px',
      opacity: 1,
      transition: '.3s opacity',

      '& > img': {
        width: '100%',
      }
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },

      '& $logo': {
        opacity: 0,
      },
    },
    drawerFirstMenu: {
      paddingTop: '50px'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuButtonHidden: {
      display: 'none',
    },
  })
)


const initialCustomerValues = {
  name: '',
  email: '',
  address_street: '',
  address_city: '',
  address_state: '',
  address_zip: '',
  business_type: '',
  contact_primary_first_name: '',
  contact_primary_last_name: '',
  contact_primary_email: '',
  contact_primary_role: '',
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://dylanbishop.me/">
        Dylan Bishop Media, LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

interface DocGenValues {
  name: string;
}

const generateDocx = (templateFile: string, outputDir: string, values: DocGenValues) => {

  //Load the docx file as a binary
  // return fs.readFile(path.resolve(__dirname, templateFile), 'binary')
  return fs.readFile(path.resolve(templateFile))
    .then((content: any) => {
      var zip = new PizZip(content);
      var doc = new Docxtemplater();
      doc.loadZip(zip);

      //set the templateVariables
      doc.setData(values);

      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
      }
      catch (error) {
        var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        console.log(JSON.stringify({error: e}));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
      }

      var buf = doc.getZip()
                  .generate({type: 'nodebuffer'});

      // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
      // fs.writeFileSync(path.resolve(__dirname, `${outputDir}${name.toLowerCase()}_output.docx`), buf);
      return fs.writeFile(path.resolve(`${outputDir}${values.name.toLowerCase()}_output.docx`), buf)
    })
    .catch((err: any) => console.log(err))

}



const Application = (props: any) => {

  const {
    dbconnection
  } = props

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  interface CustomerFormValues {
    name: string;
    email: string;
    address_street: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    business_type: string;
    contact_primary_first_name: string;
    contact_primary_last_name: string;
    contact_primary_email: string;
    contact_primary_role: string;
  }

  interface CustomerFormFunctions {
    setSubmitting?: any;
  }

  const onSubmitCustomerForm = async (values: CustomerFormValues, { setSubmitting }: CustomerFormFunctions ): void => {

    alert("submit form")
    await dbconnection.manager.save(Company, {
      ...values,
    });

    const companies = await dbconnection
      .getRepository(Company)
      .createQueryBuilder("companies")
      // .where("company.isActive = :isActive", { isActive: 1 })
      .getMany()
    alert("customer saved :D")

    console.log(companies)
  //   })
  // .catch(error => console.log(error));
    // orm.getRepository('company').save(values)
      // const result = await orm.getRepository('user').find()
      // console.log(result)
    // generateDocx('docs/templates/msa.docx', 'docs/output/', values).then((res: any) => {
    //   alert('');
    //   setSubmitting(false);
    // });
  };

  // const companies = props.appContext.data.companies
  // const companies = [
  //   {
  //     id: 1,
  //     name: 'testing facility',
  //     name_short: 'testshort',
  //   },
  //   {
  //     id: 2,
  //     name: 'testing facility',
  //     name_short: 'testshort',
  //   },
  //   {
  //     id: 3,
  //     name: 'testing facility',
  //     name_short: 'testshort',
  //   },
  //   {
  //     id: 4,
  //     name: 'testing facility',
  //     name_short: 'testshort',
  //   },
  // ]

  const companies = dbconnection
    .getRepository(Company)
    .createQueryBuilder("companies")
    // .where("company.isActive = :isActive", { isActive: 1 })
    .getMany()

  return (

    <ThemeProvider theme={theme}>

      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Customers
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <div className={classes.flexgrow}></div>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Avatar alt="Dylan Bishop" src={Logo} className={classes.topbarAvatar} />
          </Toolbar>
          </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.logo}>
            <img src={Logo} alt="devcrm"/>
          </div>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.drawerFirstMenu}>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  {companies.length
                    ? <CompanyList companies={companies} />
                    : <CustomerForm initialValues={initialCustomerValues} onSubmitForm={onSubmitCustomerForm}/> }

                </Paper>
              </Grid>

              {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                  asdf
                </Paper>
              </Grid> */}

            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default hot(Application)

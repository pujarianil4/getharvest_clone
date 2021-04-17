import React, {useState, useEffect} from 'react'
import { Grid, Box, Container,Tabs,Tab,AppBar, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux';
import { getProjectData } from "../../../Redux/Reports/reportsAction"
import { Table, TableBody,TableCell, TableHead, TableContainer } from "@material-ui/core"



export default function Time() {

const hours = 10;
const Amount = 200;
const uninvoiced_amount = 0.00;
const billableHours = 8;

const userId = useSelector(state => state.auth.uid)

const projectReportData = useSelector(state => state.reports.projectReportData)
const dispatch = useDispatch()
const isLoading = useSelector(state => state.reports.isLoading)

const Keys = !isLoading && Object.keys(projectReportData.tasks);

const [value, setValue] = useState(0)

const handleChange = (e, val) => {
    setValue(val)
}

useEffect(()=>{

    const action = getProjectData (userId);
    dispatch(action);

},[])

function TabPanel ({children, value, index}) {

    return (
        <div>
{
        value === index && (
           <h2>{children}</h2> 
        )
}   
</div>
 )
}

    return (
        <div>
            <Container style={{width: "75%", margin: "auto"}}>
                <Grid container>
                    <Grid item lg={3}>
                        <Box >
                            <p>Hours Tracked</p>
                            <h3>{hours}</h3>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box >
                            <p>Billable Hours</p>
                            <h3>some data</h3>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box >
                            <p>Billable Amount</p>
                            <h3>{Amount}</h3>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box >
                            <p>Un Invoiced Amount</p>
                            <h3>{uninvoiced_amount}</h3>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container style = {{width:"75%", margin: "auto"}}>

                    <AppBar position="static">
                        <Tabs value = {value} onChange={handleChange}>
                        <Tab label = "Clients" />
                        <Tab label = "Projects" />
                        <Tab label = "Tasks" />
                        </Tabs>
                        
                    </AppBar>
                   
                    <TabPanel value = {value} index = {0}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell>Billable Hours</TableCell>
                                            <TableCell>Billable Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{projectReportData.client}</TableCell>
                                            <TableCell>25</TableCell>
                                            <TableCell>20</TableCell>
                                            <TableCell>2000$</TableCell>
                                            {/* <TableCell>${projectReportData.projectType[0].hourlyRates}</TableCell> */}
                                            
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                    </TabPanel>

                    <TabPanel value = {value} index = {1}>
                            
                        <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Clients</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell>Billable Hours</TableCell>
                                            <TableCell>Billable Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{projectReportData.pname}</TableCell>
                                            <TableCell>{projectReportData.client}</TableCell>
                                            <TableCell>25</TableCell>
                                            <TableCell>20</TableCell>
                                            <TableCell>1500$</TableCell>
                                            {/* <TableCell></TableCell> */}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </TabPanel>
                    <TabPanel value = {value} index = {2}>
                            
                        <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Hours</TableCell>
                                            <TableCell>Billable Hours</TableCell>
                                            <TableCell>Billable Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        
                                        { 
                                            Keys &&
                                            Keys.map((item) => 

                                                <TableRow>
                                                <TableCell>{item}</TableCell>
                                                <TableCell>25</TableCell>
                                                <TableCell>20</TableCell>
                                                <TableCell>1500$</TableCell>
                                                </TableRow>
                                            )     
                                        }
                                            
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </TabPanel>
                       
                </Container>     
        </div>

    )
}

import React, {useState, useEffect} from 'react'
import { Grid, Box, Container,Tabs,Tab,AppBar, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux';
import { getProjectData, getTaskData } from "../../../Redux/Reports/reportsAction"
import { Table, TableBody,TableCell, TableHead, TableContainer } from "@material-ui/core"
import styled from 'styled-components'
import style from "../Time/Timesheet_/TimeDayTabs.module.css"



const Hr = styled.hr`
    margin: 30px 0px;

`
// const Section = styled.section`
//     display: flex;
// `
// const Button = styled.button`
//     background-color: #EDEDED;
// `


export default function Time() {

const uninvoiced_amount = 0.00;
//const billableHours = 8;
const isLoadingProject = useSelector(state => state.reports.isLoadingProject)
const isLoadingTask = useSelector(state => state.reports.isLoadingTask)

const userId = useSelector(state => state.auth.uid)

const projectReportData = useSelector(state => state.reports.projectReportData);
const projectTaskData = useSelector(state => state.reports.projectTaskData);
let taskObj = {}
!isLoadingTask && !isLoadingProject && projectTaskData.map((item) => {
    if (!taskObj[item.taskName]) {
      return  taskObj[item.taskName] = Number(item.timer);
    }
    else {
       return taskObj[item.taskName] = taskObj[item.taskName] + Number(item.timer)
    }
})

//console.log(projectReportData[0].projectType[0].hourlyRates);
//eslint-disable-next-line
let rates = !isLoadingProject && !isLoadingTask && Number(projectReportData[0].projectType[0].hourlyRates) || 0


const dispatch = useDispatch()

let arry = Object.values(taskObj);
//eslint-disable-next-line
let totalHours = !isLoadingProject && !isLoadingTask && arry.reduce((e,a) => e + a) || 0;


const [value, setValue] = useState(0)

const handleChange = (e, val) => {
    setValue(val)
}

useEffect(()=>{

    const action = getProjectData(userId);
    dispatch(action);
//eslint-disable-next-line
},[])

useEffect(()=>{

    const action = getTaskData(userId);
    dispatch(action);
//eslint-disable-next-line
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
            <div className={style.showdate} style={{marginTop : "30px", marginBottom: "-10px"}}>
             <button style={{padding: "7px 12px"}}><i class="fa fa-angle-left" style={{fontSize:"15px"}}></i></button>
             <button style={{padding: "7px 12px"}}><i class="fa fa-angle-right" style={{fontSize:"15px"}}></i></button>
         <h2>This Week: 12 - 18 Apr 2021</h2>
         
          
         </div>
            </Container>

            <Container style={{width: "75%", margin: "auto"}}>

                <Hr />
                <Grid container>
                    <Grid item lg={3}>
                        <Box >
                            <p>Hours Tracked</p>
                            <h3>{totalHours}</h3>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box >
                            <p>Billable Hours</p>
                            <h3>{totalHours}</h3>
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box >
                            <p>Billable Amount</p>
                            <h3>{totalHours * rates}$</h3>
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
                    
                    <AppBar style={{backgroundColor:"#F37714", color: "white", marginTop: "40px"}} position="static">
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
                                        { !isLoadingProject && !isLoadingTask &&
                                        projectReportData.map((item) => 
                                            <TableRow>
                                                <TableCell>{item.client}</TableCell>
                                                <TableCell>25</TableCell>
                                                <TableCell>20</TableCell>
                                                <TableCell>2000$</TableCell>                                                
                                            </TableRow>
                                            )
                                        }
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
                                        
                                        {   !isLoadingTask && !isLoadingProject &&
                                            projectReportData.map((item) => 

                                            <TableRow>
                                            <TableCell>{item.pname}</TableCell>
                                            <TableCell>{item.client}</TableCell>
                                            <TableCell>25</TableCell>
                                            <TableCell>20</TableCell>
                                            <TableCell>1500$</TableCell>
                                            </TableRow>

                                            )}
                                        
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
                                        
                                            <TableRow>
                                                <TableCell>Business Development</TableCell>
                                                <TableCell>{taskObj.businessDevelopment || 0 }</TableCell>
                                                <TableCell>{taskObj.businessDevelopment || 0 }</TableCell>
                                                <TableCell>{taskObj.businessDevelopment * rates}$</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Programming</TableCell>
                                                <TableCell>{taskObj.programming || 0}</TableCell>
                                                <TableCell>{taskObj.programming || 0}</TableCell>
                                                <TableCell>{taskObj.programming * rates}$</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Marketing</TableCell>
                                                <TableCell>{taskObj.marketing || 0 }</TableCell>
                                                <TableCell>{taskObj.marketing || 0 }</TableCell>
                                                <TableCell>{taskObj.marketing * rates}$</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Design</TableCell>
                                                <TableCell>{taskObj.design || 0 }</TableCell>
                                                <TableCell>{taskObj.design || 0 }</TableCell>
                                                <TableCell>{taskObj.design * rates}$</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>project Management</TableCell>
                                                <TableCell>
                                                        {taskObj.projectManagement || 0 }
                                                </TableCell>
                                                <TableCell>{taskObj.projectManagement || 0 }</TableCell>
                                                <TableCell>{taskObj.projectManagement * rates}$</TableCell>
                                            </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </TabPanel>
                       
                </Container>     
        </div>

    )
}

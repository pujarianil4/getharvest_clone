import React, {useState} from 'react'
import { Grid, Box, Container,Tabs,Tab,AppBar } from "@material-ui/core"


export default function Time() {

const hours = 10;
const Amount = 200;
const uninvoiced_amount = 0.00;
const billableHours = 8;
const nonBillableHours = 2;
const perbillAmnt = (billableHours/hours) * 100;

const [value, setValue] = useState(0)

const handleChange = (e, val) => {
    console.log(val);
    setValue(val)
}

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
                        {/* <div style = {{display: "flex"}}> */}
                        {/* <h3>{perbillAmnt}</h3> */}
                            <div style={{display: "flex", flexFlow: "column", marginLeft: "10px"}}>
                                <p>Billable Hours</p>
                                <h3>some data</h3>
                            </div>
                            {/* </div> */}
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
                        <TabPanel value = {value} index = {0}>item 1</TabPanel>
                        <TabPanel value = {value} index = {1}>item 2</TabPanel>
                        <TabPanel value = {value} index = {2}>item 3</TabPanel>
                    </Container>     
</div>

    )
}

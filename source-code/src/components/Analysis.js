import React, { useState} from 'react'
import { Container } from 'react-bootstrap'
import activePlayers from "../json/activePlayers.json"
import { Select, Col , Row, Divider, Button} from "antd"

import Linechart from './dataCharts/LineChart.js'
const { Option } = Select

const Analysis = () => {
    const [targetStat, setTargetStat] = useState("PTS");
    const [playerOneID, setPlayerOneID] = useState(2544);
    const [playerTwoID, setPlayerTwoID] = useState(201939);
    const [playerThreeID, setPlayerThreeID] = useState(202695);
    const [playerFourID, setPlayerFourID] = useState(201142);
    const [pOneInfo, setPOneInfo] = useState();
    const [pTwoInfo, setPTwoInfo] = useState();
    const [pThreeInfo, setPThreeInfo] = useState();
    const [pFourInfo, setPFourInfo] = useState();


    const basicStats = ["PTS", "OREB" ,'DREB','REB','AST','BLK','STL','FGM','FGA','FG_PCT',"FG3_PCT",'FTA','FTM','FT_PCT',]
    
    const setPlayerOne = key => {
        setPlayerOneID(key)
        console.log(key)
    }
        
    const setPlayerTwo = key => {
        setPlayerTwoID(key)
        console.log(key)
    }

    const setPlayerThree = key => {
        setPlayerThreeID(key)
    }

    const setPlayerFour = key => {
        setPlayerFourID(key)
    }

    return (
        <Container fluid>
            <Row>
                <Col span = {6}>
                    <div className = "data-card">
                        <Divider style = {{}}/>
                        <h5 style = {{textAlign : "center"}}>Pick a Stat</h5>
                        <span className = "data-search">
                            
                            <Select
                                showSearch
                                defaultValue = {"PTS"}
                                style={{ width: 200 }}
                                placeholder="Select a Statistic"
                                optionFilterProp="children"
                                width = {"50px"}
                                onSelect={(key) => setTargetStat(key)}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                            {basicStats.map((stat) => 
                                <Option key = {stat}>{stat}</Option>
                            )}
                            </Select>
                        </span>
                        <Divider/>
                       <div> 
                        <span className="wrapper">   
                            
                            <h5 style = {{textAlign : "center"}}>Pick Players</h5>
                            <span className = "data-search">
                            <Select
                                defaultValue = {"LeBron James"}
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player One"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerOne(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                        <span className = "data-search">
                            <Select
                                defaultValue = {"Stephen Curry"}
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player Two"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerTwo(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                        <span className = "data-search">
                            <Select
                                defaultValue = {"Kawhi Leonard"}
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player Three"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerThree(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                        <span className = "data-search">
                            <Select
                                defaultValue = {"Kevin Durant"}
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player Four"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerFour(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                            <Divider/>   
                                 
                        </span>
                        
                        </div>
                    </div>
                </Col>
                <Col>
                <>
                    <Linechart 
                        stat={targetStat} 
                        playerOne={playerOneID} 
                        playerTwo={playerTwoID} 
                        playerThree={playerThreeID} 
                        playerFour={playerFourID}
                    />
                </>
                </Col>
            </Row>
        </Container>
    )
}

export default Analysis
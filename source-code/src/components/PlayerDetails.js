import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router'
import {Row, Col, Input } from 'antd'
import { useGetPlayerSeasonsQuery } from '../services/data.nba';

const PlayerDetails = () => {
    const [teams, setTeams] = useState(null);
    const [playerInfo, setPlayerInfo] = useState(null);    
    const params = useParams()
    const playerId = params?.playerid    
    const {data, isFetching} = useGetPlayerSeasonsQuery(playerId)
    console.log(data);
    const headers = {
        'Host': 'stats.nba.com',
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const url = "http://localhost:5000"
    useEffect(() => {
        fetch(`${url}/api/getPlayerInfo?player_id=${playerId}`, headers)
        .then(res => res.json())
        .then(res => setPlayerInfo(res));
    },[])

    const imgSRC = playerInfo?.CommonPlayerInfo[0]?.PERSON_ID
    const imgURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${imgSRC}.png`

    const playerDetails = playerInfo?.CommonPlayerInfo[0]
    console.log(playerDetails)
    
    return (
        <Container className = "content-container">
           {/* <Row> 
                <Col className = "player-detail-container">
                    <Col span = {4}>
                        <img src = {imgURL} alt = "NBA"/>
                    </Col>
                    <Col span = {12}>
                        Hilo
                    </Col>
                </Col>
           </Row> */}
           <Row>
                <Col xs={24} xl={8}>
                    <img src = {imgURL} alt = "NBA"/>
                </Col>
                <Col xs={24} xl={8}>

                </Col>
                <Col xs={24} xl={8}>

                </Col>
            </Row>
        </Container>
    )
}

export default PlayerDetails

import React, {useEffect, useState} from 'react';
import triangle from "../img/triangle.svg"
import triangle2 from "../img/triangle2.svg"
import check from "../img/check.svg"
import circle from "../img/circle_round3.svg"
import freep from "../img/panda_img1.png"
import {web3_handleBuybtn} from '../utils/web3API'
function TokenPage() {
    const tokenAddress = "0x4db5a66e937a9f4473fa95b1caf1d1e1d62e29ea"
    const tokenname = "WETH"
    const APIKEY = "OH6dkf9zigHlmeEalmK1vV9oXSderCP0Op8mmJbypYEElBnQohGVI7E6MaSkEMlK"
    const [tokenPrice, setTokenPrice] = useState('')
    const [tokenRate, setTokenRate] = useState('')
    var roundData = [
        {
            type : "pre-sale",
            start_date : "12/22/2021",
            end_data : "1/21/2022",
            amount : "42,000,000,000",
            unit : "0.000001",
        },
        {
            type : "round1",
            start_date : "1/21/2022",
            end_data : "2/20/2022",
            amount : "42,000,000,000",
            unit : "0.000001",
        },
        {
            type : "round2",
            start_date : "2/20/2022",
            end_data : "3/22/2022",
            amount : "42,000,000,000",
            unit : "0.000001",
        },
        {
            type : "round3",
            start_date : "7/22/2022",
            end_data : "8/15/2022",
            amount : "42,000,000,000",
            unit : "0.000001",
        }
    ]
    useEffect(()=>{
        try{
            fetch(`https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/price?chain=bsc&exchange=PancakeSwapv2`,{
              method : 'GET',
              headers : {
                "x-api-key" : "OH6dkf9zigHlmeEalmK1vV9oXSderCP0Op8mmJbypYEElBnQohGVI7E6MaSkEMlK",
                "Content-Type": "application/json",
              },
            })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setTokenPrice(res.usdPrice.toFixed(2))
                setTokenRate(res.nativePrice.value.slice(0,1) + "." + res.nativePrice.value.slice(1,3))
            });
          }catch(err){
            console.log(err)
          }
    },[])
    const handleBuybtn = async(e) => {
        e.preventDefault()
        const res = await web3_handleBuybtn()
        console.log(res)
    }
    const RoundMapTop = (props)=> {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        var startDate = new Date(props.data.start_date)
        var endDate = new Date(props.data.end_data)
        var progress;
        if(new Date(props.data.start_data) > new Date())
          progress = 0;
        else if(new Date(props.data.end_data) < new Date())
        progress = 100;
        else {
            var baserange = new Date(props.data.end_data).getTime() - new Date(props.data.start_date).getTime()
            var currentrange = new Date().getTime() - new Date(props.data.start_date).getTime()
            progress = Math.round(currentrange / baserange * 100)
        }
        return (
            <div className={`token__row1 ${props.styletype}`}>
                <div className="token__padding">                                      
                    <div className="token_text d-sm-flex d-xs-block">
                        <p className="text__1">{props.data.type} </p>
                        <p className="text__2">{startDate.getDate()} {months[startDate.getMonth()]} {startDate.getFullYear()} – {endDate.getDate()} {months[endDate.getMonth()]} {endDate.getFullYear()}</p>
                    </div>
                    <div className="token_text d-flex d-xs-block">
                        <p className="text__1">Amount:</p>
                        <p className="text__2">{props.data.amount}</p>
                    </div>
                    <div className="token_text d-flex d-xs-block">
                        <p className="text__1">Unit:</p>
                        <p className="text__2">{props.data.unit} BNB</p>
                    </div>
                    <div className="my__progress">
                        <div className="my__bar"  style={{"width" : `${progress}%`}}>
                            
                        </div>
                        <p>{progress}%</p>
                    </div>
                </div> 
                <div className={props.trianglestyle}>
                    <img src={triangle} alt="triangle"/>
                </div>
            </div>
        )
    }
    const RoundMapBottom = (props)=> {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        var startDate = new Date(props.data.start_date)
        var endDate = new Date(props.data.end_data)
        var progress;
        if(new Date(props.data.start_data) > new Date())
          progress = 0;
        else if(new Date(props.data.end_data) < new Date())
        progress = 100;
        
        else {
            var baserange = new Date(props.data.end_data).getTime() - new Date(props.data.start_date).getTime()
            var currentrange = new Date().getTime() - new Date(props.data.start_date).getTime()
            progress = Math.round(currentrange / baserange * 100)
        }
        return (
            <div className={`token__row1 ${props.styletype}`}>
                <div className={props.trianglestyle}>
                    <img src={triangle2} alt="triangle"/>
                </div>
                <div className="token__padding">                                      
                    <div className="token_text d-sm-flex d-xs-block">
                        <p className="text__1">{props.data.type}</p>
                        <p className="text__2">{startDate.getDate()} {months[startDate.getMonth()]} {startDate.getFullYear()} – {endDate.getDate()} {months[endDate.getMonth()]} {endDate.getFullYear()}</p>
                    </div>
                    <div className="token_text d-flex d-xs-block">
                        <p className="text__1">Amount:</p>
                        <p className="text__2">{props.data.amount}</p>
                    </div>
                    <div className="token_text d-flex d-xs-block">
                        <p className="text__1">Unit:</p>
                        <p className="text__2">{props.data.unit} BNB</p>
                    </div>
                    <div className="my__progress">
                        <div className="my__bar" style={{"width" : `${progress}%`}}>
                            
                        </div>
                        <p>{progress}%</p>
                    </div>
                </div> 
            </div>
        )
    }
    const CircleCheck = (data) => {
        if(new Date(data.data.end_data) < new Date())
        return(
            <div className="circle__check">
                <img src={check} alt="check"/>
            </div>
        )
        else
        return(
            <div className="circle__check">
                <img src={circle} alt="circle"/>
            </div>
        )
    }
    return (
        <section className="page__token">
            <div className="token__body">
                <div className="container">
                    <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="token__title">
                                    <h1>A <span>Decentralized</span> Meme Token</h1>
                                    <p>NAME aims to become the most decentralized meme-token in existence,
                                    distributing its token to over 1 million users and surpassing 
                                    DogeCoin in the number of holders.</p>
                                </div>
                                <div className="token__block d-flex">
                                    <RoundMapTop data = {roundData[0]} styletype = "cd1" trianglestyle = "triangle__pre-sale"/>
                                    <RoundMapTop data = {roundData[2]} styletype = "cd2" trianglestyle = "triangle__round2"/>
                                </div>
                                <div className="circle__line d-flex">
                                    <CircleCheck data = {roundData[0]}/>
                                    <div className="line"></div>
                                    <CircleCheck data = {roundData[1]}/>
                                    <div className="line"></div>
                                    <CircleCheck data = {roundData[2]}/>
                                    <div className="line"></div>
                                    <CircleCheck data = {roundData[3]}/>
                                </div>
                                <div className="token__block2 d-flex">
                                    <RoundMapBottom data = {roundData[1]} styletype = "cd3" trianglestyle = "triangle__round1"/>
                                    <RoundMapBottom data = {roundData[3]} styletype = "cd4" trianglestyle = "triangle__round3"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 text-left">
                                <div className="freep1 img-fluid wow animate__animated  animate__zoomIn animate__fast">
                                    <img src={freep} alt="freep"/>
                                </div>   
                            </div>
                    </div>
                        <div className="row token-buy__body">
                            <div className="col-12 col-md-4  token-buy__title">
                                <h4>ROUND 3 Of Sales</h4> 
                                <p>Price: 1BNB = {tokenRate} {tokenname}</p>    
                            </div>
                            <div className="col-12 col-sm-11 col-md-8 offset-md-0 col-lg-7 form__buy">
                            
                                <form onSubmit={handleBuybtn}>
                                        <div className="d-flex align-items-center">
                                        <input type="number" id="buy-amount" name="buy" placeholder="0.1" min="0"/>
                                        <label htmlFor="buy-amount">{tokenname}</label>
                                        </div>
                                        <input type="submit" value="buy"/>
                                </form>
                                <div className="form-buy__text d-sm-flex">
                                    <p className="swap__price">Pancakeswap price: <span>{tokenPrice}USD</span> ↑ <span>169.371%</span> </p>
                                    <p className="token__info">Token Info</p>
                                </div>
                            </div>
                        </div>
                </div>       
            </div>
        </section>
    );
}

export default TokenPage;

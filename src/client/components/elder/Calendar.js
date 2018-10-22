import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Page, Button, Panel, PanelHeader, PanelBody,
  MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription } from 'react-weui'
import AuthService from '../auth/AuthService'
import { Carousel } from 'react-responsive-carousel'
import { shortDateFormat as dateFormat } from '../../utils'
import 'react-responsive-carousel/lib/styles/carousel.css'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.auth = new AuthService();

    const curr = new Date();
    curr.setDate(curr.getDate()+1);

    this.state = {
      inDate: new Date(),
      outDate: curr,
      daysDiff: 1,

      data: [],
      pagerParams: {
        currentPage: 1,
        perPage: 10,
        totalCount: 0,
        totalPage: 0,
      },
      isLoading: false,
    }
  }

  fetch(pagerParams, callback) {
    const { data } = this.state
    this.setState({ isLoading: true })
    this.auth.fetch(`/api/serve/serveList.do?currentPage=${pagerParams.currentPage}&perPage=${pagerParams.perPage}`)
      .then(res => {
        this.setState({
          data: data.concat(res.items),
          pagerParams: res.pagerParams,
          isLoading: true
        })
      })
      .then(callback)
  }

  componentDidMount() {
    const elder = localStorage.getItem('elder') ? JSON.parse(localStorage.getItem('elder')) : {}
    const inDate = elder && elder.inDate ? elder.inDate : null
    const outDate =  elder && elder.outDate ? elder.outDate : null
    const daysDiff = elder && elder.daysDiff ? elder.daysDiff : 1
    if(inDate && outDate) {
      this.setState({ inDate, outDate, daysDiff })
    }
    /** 获取房型列表 */
    const { pagerParams } = this.state
    this.fetch(pagerParams)
  }

  componentWillUnmount() {
    const { inDate, outDate } = this.state;
    localStorage.setItem('elder', JSON.stringify({ inDate, outDate }));
  }

  render() {
    const { inDate, outDate, daysDiff, data } = this.state
    const inDateShow = dateFormat(inDate)
    const outDateShow = dateFormat(outDate)
    return (
      <div className="fixed">
        <Page className="calender" infiniteLoader={false} ptr={false}>
          <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="/assets/slide02.jpg" alt="" />
            </div>
            <div>
              <img src="/assets/slide01.jpg" alt=""/>
            </div>
          </Carousel>
          {/** 入住/退房 日期 */}
          <div className="date-picker">
            <div className="in ta-c di-b">
              <label className="db">入住日期</label>
              <span className="date">
                <Link to="/elder/date-picker">
                  {inDateShow}
                </Link>
              </span>
            </div>
            {/** divider */}
            <div className="divider ta-c">
              <span className="icon iconfont icon-calender ta-c"></span>
              <div>共&nbsp;{daysDiff}&nbsp;晚</div>
            </div>
            {/** end of divider */}
            <div className="out ta-c di-b">
              <label className="db">退房日期</label>
              <span className="date">
                <Link to="/elder/date-picker">
                  {outDateShow}
                </Link>
              </span>
            </div>
          </div>
          {/** 房型列表 */}
          <Panel>
            <PanelHeader>
              房型列表
            </PanelHeader>
            <PanelBody>
              {data.map((d, idx) => {
                return (
                  <MediaBox type="appmsg" key={idx} href="javascript:void(0)">
                    <MediaBoxHeader>
                      <img src={d.image} width="60" height="60" alt="" />
                    </MediaBoxHeader>
                    <MediaBoxBody>
                      <Link to={`/elder/order/${d.id}`}>
                        <MediaBoxTitle>{d.title}</MediaBoxTitle>
                        <div className="desc">
                          <span>{d.description}</span>
                          <div className="price">
                            ¥ <span>{d.salePrice}</span> 元
                          </div>
                        </div>
                      </Link>
                    </MediaBoxBody>
                  </MediaBox>
                )
              })}
            </PanelBody>
          </Panel>
        </Page>
        <Button className="order-btn" onClick={this.gotoDatePicker}>查询房型</Button>
      </div>
    )
  }
}

export default Calendar


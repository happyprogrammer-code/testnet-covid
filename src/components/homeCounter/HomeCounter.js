import React, { Component } from 'react';
import style from './HomeCounter.module.css';
import { Bar } from 'react-chartjs-2';
import Countup from 'react-countup';
import LOADINGGGG from './LOADING';

export class HomeCounter extends Component {
  state = {
    isLoading: true,
    countryData: [],
    obsSelected: {},
  };
  componentDidMount() {
    fetch('https://covid19.mathdro.id/api/confirmed')
      .then((res) => res.json())
      .then((res) => {
        let i = 0;
        let r = 0;
        let d = 0;
        res.forEach((data) => {
          i = i += data.confirmed;
          r = r += data.recovered;
          d = d += data.deaths;
        });
        let world = { country: 'World', infected: i, recovered: r, deaths: d };
        let countrydata = [];

        res.forEach((data) => {
          const temp = countrydata.find(
            (obj) => obj.country === data.countryRegion
          );

          if (temp !== undefined) {
            temp.infected += data.confirmed;
            temp.recovered += data.recovered;
            temp.deaths += data.deaths;
          } else {
            countrydata.push({
              country: data.countryRegion,
              infected: data.confirmed,
              recovered: data.recovered,
              deaths: data.deaths,
            });
          }
        });

        countrydata.unshift(world);
        this.setState({ countryData: countrydata });
        this.setState({ obsSelected: countrydata[0] });
        this.setState({ isLoading: false });
      });
  }
  ev = (e) => {
    const { value } = e.target;

    const newselect = this.state.countryData.find(
      (obj) => obj.country === value
    );

    this.setState({ obsSelected: newselect });
  };
  render() {
    const { country, infected, recovered, deaths } = this.state.obsSelected;
    const countryName = this.state.countryData.map((data) => data.country);
    const countryName2 = countryName.sort();
    const opt = countryName2.map((data, index) => (
      <option key={index} hidden={data === 'World'} value={data}>
        {data}
      </option>
    ));
    if (this.state.isLoading) {
      return <LOADINGGGG />;
    } else {
      return (
        <div className={style.main}>
          <div className={style.header}>
            <h1 className={style.mainheadertitle}>
              <span className={style.span}>COVID-19</span>
              <br /> LIVE COUNTER
            </h1>
          </div>
          <div className="container">
            <div className={style.maincontent}>
              <div className={style.countertitle}>
                <h1>{country.toUpperCase()} LIVE COUNTER</h1>
                <div className={style.select}>
                  <select name="" id="" onChange={this.ev}>
                    <option value="World" selected>
                      World
                    </option>
                    {opt}
                  </select>
                </div>
              </div>
              <div className={style.countercards}>
                <div className={`${style.cards} ${style.infected}`}>
                  <h1 className={style.cardtitle}>Infected</h1>
                  <h1 className={style.cardnum}>
                    <Countup
                      start={0}
                      end={infected}
                      duration={2.5}
                      separator={','}
                    />
                  </h1>
                  <p className={style.pbot}>
                    Was infected by covid 19 stay safe!!
                  </p>
                </div>
                <div className={`${style.cards} ${style.recovered}`}>
                  <h1 className={style.cardtitle}>Recovered</h1>
                  <h1 className={style.cardnum}>
                    {' '}
                    <Countup
                      start={0}
                      end={recovered}
                      duration={2.5}
                      separator={','}
                    />
                  </h1>
                  <p className={style.pbot}>
                    Was recovered from covid 19 stay safe!!
                  </p>
                </div>
                <div className={`${style.cards} ${style.deaths}`}>
                  <h1 className={style.cardtitle}>Deaths</h1>
                  <h1 className={style.cardnum}>
                    {' '}
                    <Countup
                      start={0}
                      end={deaths}
                      duration={2.5}
                      separator={','}
                    />
                  </h1>
                  <p className={style.pbot}>
                    Was killed by covid 19 stay safe!!
                  </p>
                </div>
              </div>
              <div className={style.chart}>
                <Bar
                  data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                      {
                        label: 'corona',
                        data: [infected, recovered, deaths],
                        backgroundColor: [
                          'rgb(52, 100, 235)',
                          'rgba(97, 227, 45, 1)',
                          '#C44D4D',
                        ],
                      },
                    ],
                  }}
                  options={{ legend: { display: false } }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HomeCounter;

import React, {Component} from 'react'
import Form from './Form';
import Table from './Table';
import {connect} from 'react-redux'
import {submitFormData} from '../../store/Dashboard'
import Chart from './Chart';
import AnimatedPieSVG from './AnimatedPieSVG';

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formDataArr: [],
            data: [
                {letter: 'Australia'},
                {letter: 'Canada'},
                {letter: 'USA'},
                {letter: 'India'},
                {letter: 'Russia'},
                {letter: 'Brazil'}
            ],
            pieData: [
                {"date": 0, "value": 0},
                {"date": 1, "value": 0},
                {"date": 2, "value": 0},
                {"date": 3, "value": 0},
                {"date": 4, "value": 0}
            ]
        }
    }

    handleSubmitForm = (data) => {
        this.props.submitFormData(data, {
            SuccessCallback: res => {
                let formDataArr = this.state.formDataArr
                formDataArr.push(res)
                let ausCount = formDataArr.filter((data) => data.country === 'australia').length
                let canCount = formDataArr.filter((data) => data.country === 'canada').length
                let usaCount = formDataArr.filter((data) => data.country === 'usa').length
                let indCount = formDataArr.filter((data) => data.country === 'india').length
                let rusCount = formDataArr.filter((data) => data.country === 'russia').length
                let brzCount = formDataArr.filter((data) => data.country === 'brazil').length
                let data = [
                    {letter: 'Australia', frequency: ausCount / 100},
                    {letter: 'Canada', frequency: canCount / 100},
                    {letter: 'USA', frequency: usaCount / 100},
                    {letter: 'India', frequency: indCount / 100},
                    {letter: 'Russia', frequency: rusCount / 100},
                    {letter: 'Brazil', frequency: brzCount / 100}
                ]
                let pieData = []
                if (ausCount > 0) {
                    pieData.push({"date": 0, "value": ausCount})
                }
                if (canCount > 0) {
                    pieData.push({"date": 1, "value": canCount})
                }
                if (usaCount > 0) {
                    pieData.push({"date": 2, "value": usaCount})
                }
                if (indCount > 0) {
                    pieData.push({"date": 3, "value": indCount})
                }
                if (rusCount > 0) {
                    pieData.push({"date": 4, "value": rusCount})
                }
                if (brzCount > 0) {
                    pieData.push({"date": 5, "value": brzCount})
                }
                this.setState({
                    formDataArr: formDataArr,
                    data: data,
                    pieData: pieData
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Form handleSubmitForm={this.handleSubmitForm}/>
                <Table formData={this.state.formDataArr}/>
                <div>
                    <span className="label">Animated Pie SVG (React Spring)</span>
                    <AnimatedPieSVG
                        data={this.state.pieData}
                        width={200}
                        height={200}
                        innerRadius={60}
                        outerRadius={100}
                    />
                </div>

                <Chart formData={this.state.formDataArr} width={800} height={500} data={this.state.data}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    formDataArr: state.dashboard.formData
})

const mapDispatchToProps = {
    submitFormData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

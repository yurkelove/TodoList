import React, {PureComponent}  from 'react'
import {ALL} from '../constants'
import {DONE} from '../constants'
import {NOTDONE} from '../constants'


class RadioButton  extends PureComponent{


    render(){
        const filter = this.props.filter;
        return(

            <form className={`radio__form`}>
                <div className="radio__container">
                    <ul className={`radio__buttons`}>
                        <li className={`radio_li`}>
                            <label>
                                <input type="radio" value={ALL} checked={filter === ALL}  onChange={this.optionChange}  />
                                All
                            </label>
                        </li>
                        <li className={`radio_li`}>
                            <label>
                                <input type="radio" value={DONE} checked={filter === DONE} onChange={this.optionChange}  />
                                Done
                            </label>
                        </li>
                        <li className={`radio_li`}>
                            <label>
                                <input type="radio" value={NOTDONE} checked={filter === NOTDONE} onChange={this.optionChange} />
                                NotDone
                            </label>
                        </li>
                    </ul>
                </div>
            </form>

        )

    }


    optionChange = (e) => {
        const {changeCurrentFilter} = this.props;
        changeCurrentFilter(e.target.value);
    };






}



export default RadioButton
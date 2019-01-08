import React, { PureComponent } from 'react';
import { ALL, DONE, NOTDONE } from '../constants';


class SwitchFilter extends PureComponent {
  render() {
    return (

            <form className={'radio__form'}>
                <div className="radio__container">
                    <ul className={'radio__buttons'}>
                        {this.createLiElements(ALL)}
                        {this.createLiElements(DONE)}
                        {this.createLiElements(NOTDONE)}
                    </ul>
                </div>
            </form>

    );
  }


  optionChange = (e) => {
    const { changeCurrentFilter } = this.props;
    changeCurrentFilter(e.target.value);
  };

  createLiElements = filterValue => (
       <li className={'radio_li'}>
           <label>
             <input type="radio" value={filterValue} checked={this.props.filter === filterValue} onChange={this.optionChange} />
               {filterValue}
           </label>
       </li>
  );
}

export default SwitchFilter;

import React from 'react';
import './MainSection.css';
import AddPreferenceForm from '../pref-form/PrefForm'
import Review from '../review/Review'

import { connect } from 'react-redux';
import { toggleReview, resetAll, removeChosenCourse } from '../redux/actions'

class MainSection extends React.Component {
  clearAll() {
    this.props.resetAll();
  }

  review() {
    this.props.toggleReview();
    this.props.removeChosenCourse();
  }

  renderButton() {
    if (!this.props.isReviewing) {
      return (
        <div>
          <button type="button" className="btn_1 btn btn-warning" onClick={() => this.review()}>Review</button>
          <button type="button" className="btn_2 btn btn-outline-danger" onClick={() => this.clearAll()}>Clear All</button>
        </div>
      );
    } else {
      return (
        <div>
          <button type="button" className="btn_1 btn btn-warning" onClick={() => this.review()}>Back</button>
          <button type="button" className="btn_2 btn btn-success" onClick={() => {}}>Submit</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="pref_main">
        <div className="pref_main_header">
          <h2 className="title_main">TEACHER PREFERENCES FORM</h2>
          <p className="subtitle_main">Welcome to the Teacher Preferences Form. This is where professors and lecturers declare their time preferences to facilitate each semester's course scheduling. They can declare each block as 'MUST' (must teach in this block), 'PREFERRED' (1-3), and 'NO' (cannot teach in this block). Comments are optional but are encouraged, and inputs are based on a honor system.</p>

        </div>

        <div className="pref_main_content">
          {!this.props.isReviewing && <AddPreferenceForm/>}
          {this.props.isReviewing && <Review/>}
        </div>

        <div className="pref_main_buttons">
          {this.renderButton()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isReviewing: state.review
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleReview: () => { dispatch(toggleReview()) },
    resetAll: () => { dispatch(resetAll()) },
    removeChosenCourse: () => { dispatch(removeChosenCourse()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
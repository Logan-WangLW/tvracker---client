import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { fetchTVMazeApi } from '../actions/show-search';

export class ShowSearchForm extends React.Component {

  onSubmit(value) {
    let search = value.userSearch;
    let userSearchQuery = {search};
    this.props.dispatch(fetchTVMazeApi(userSearchQuery));
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <div>
          <label htmlFor="userSearch">Enter Search:</label>
          <Field
            component={Input}
            type="text"
            name="userSearch"
            id="userSearch"
          />
        </div>
        <button type="submit" disabled={this.props.submitting}>Search Shows</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'show-search-form',
  initialValues: {
    userSearch: ''
  }
})(ShowSearchForm);
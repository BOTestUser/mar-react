import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ review: newReview })
            this.toggleForm();
        }
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (
                <button onClick={e => this.toggleForm()} className="btn btn-sm btn-info"><i className="fa fa-plus"></i></button>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control" ref="stars">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" ref="author" />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control" ref="body"></textarea>
                            </div>
                            <button className="btn btn-dark btn-sm">submit</button>&nbsp;
                            <button type="button" onClick={e => this.toggleForm()} className="btn btn-danger btn-sm">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;
import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = {
            stars, author, body
        }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ review: newReview })
            this.toggleForm();
        }
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [field]: fieldValue })
    }
    isValidForm() {
        let { stars } = this.state;
        if (stars < 3) return true;
        else return false;
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (
                <button onClick={e => this.toggleForm()} className="btn btn-sm btn-info"><i className="fa fa-plus"></i></button>
            )
        } else {
            let { stars, author, body } = this.state;
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                <span style={{ color: 'red' }}>{stars < 3 ? 'expected at-least 3 stars' : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                            </div>
                            <button disabled={this.isValidForm()} className="btn btn-dark btn-sm">submit</button>&nbsp;
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
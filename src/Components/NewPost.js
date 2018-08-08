import React from 'react'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../Redux/actions'

class NewPost extends React.Component{

    renderInput = (field) => {
        const { meta: { touched, error } } = field;
        const className = `form-control ${error && touched ? "border-danger" : ""}`;
        return(
            <div className="form-group"> 
                <input {...field.input} className={className} placeholder={field.label} type={field.type} />
                {touched && error &&
                <span className="error text-danger text-left">{error}</span>}
            </div>  
        )
    }

    renderArea = (field) => {
        const { meta: { touched, error } } = field;
        const className = `form-control ${error && touched ? "border-danger" : ""}`;
        return(
            <div className="form-group"> 
                <textarea {...field.input} className={className} placeholder={field.label} type={field.type}> </textarea>
                {touched && error &&
                <span className="error text-danger">{error}</span>}
            </div>
        )
    }
        
      
    onSubmit = values => {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="form-group w-75 mx-auto">
                        <Field component={this.renderInput} name="title" type="text" label="Title"/>
                        <Field component={this.renderInput} name="categories" type="text" label="Categories"/>
                        <Field rows="3" component={this.renderArea} name="content" type="text" label="Content"/>
                        <div className="form-row mx-auto">
                            <button type="submit" className="btn btn-primary mt-3">Create</button>
                            <Link className="btn btn-danger mt-3 ml-3" to="/">Back </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = ({ title, categories, content }) => {
    const errors = {};

    if(!title){
        errors.title = "Enter a title!";
    }
    if(!categories){
        errors.categories = "Enter some categories!";
    }
    if(!content){
        errors.content = "Enter some content!";
    }
    // if error Object is empty (Default) everything ok...
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewPostForm'
})(
    connect(null, { createPost })(NewPost)
);

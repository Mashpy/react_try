import React from 'react'

const initialState = {
        name: '',
        email: '',
        password: '',
        bio: '',
        country: '',
        gender: '',
        skills: []
    } 

class PostForm extends React.Component {
    
    constructor(){
        super()
        this.myForm = React.createRef()
    }
    
    state = initialState;
    
    changeHandler = (event) => {
        
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            } else {
               this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill=> skill != event.target.value)
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })   
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        this.myForm.current.reset()
        this.setState({
            ...initialState
        })
        console.log(this.state)
    }
    
    render(){
        
        return(
                <form ref={this.myForm} onSubmit={ this.submitHandler } >
                    <div className="form-group">
                        <label htmlFor="name">Enter your full name </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange= {this.changeHandler}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Enter your full email </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange= {this.changeHandler}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="name">Enter your password </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange= {this.changeHandler}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="name">Enter your bio</label>
                        <textarea
                            className="form-control"
                            type="text"
                            placeholder="Enter your bio"
                            name="bio"
                            id="bio"
                            value={this.state.bio}
                            onChange= {this.changeHandler}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="country">Choose your country</label>
                        <select className="form-control" onChange={this.changeHandler} name="country" id="country">
                            <option>Select your country</option>
                            <option value="Bangladesh">Bangladesh</option>
                             <option value="India">India</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={ this.changeHandler } type="radio" name="gender"
                            id="gender1" value="male"/>
                            <label htmlFor="gender">Male</label>
                        </div>
                        
                        <div className="form-check">
                            <input onChange={ this.changeHandler } type="radio" name="gender"
                            id="gender2" value="female"/>
                            <label htmlFor="gender">Female</label>
                        </div>
                        
                        <div className="form-check">
                            <input onChange={ this.changeHandler } type="radio" name="gender "
                            id="gender3" value="other"/>
                            <label htmlFor="gender">Other</label>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="form-check">
                            <input name='skills' onChange={this.changeHandler} className='form-check-input' id='js' value='Javascript' type='checkbox'/>
                            <label htmlFor="js">Javascript</label>
                        </div>
                        
                       <div className="form-check">
                            <input name='skills' onChange={this.changeHandler} className='form-check-input' id='react' value='React JS' type='checkbox'/>
                            <label htmlFor="react">React JS</label>
                        </div>
                        
                        
                       <div className="form-check">
                            <input name='skills' onChange={this.changeHandler} className='form-check-input' id='angular' value='Angular' type='checkbox'/>
                            <label htmlFor="angular">Angular</label>
                        </div>
                    </div>
            
                 <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            )
    }
}

export default PostForm
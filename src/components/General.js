import React, { Component } from 'react';
import InputLine from './InputLine';

class General extends Component {
    render() {
        return( 
            <div>
                <div className='Name-info'>
                    < InputLine text='Full name' tag='h1'/>
                    < InputLine text='Occupation' tag='h2'/>
                </div>  
                <div className='contact'>
                    < InputLine text='Phone number' tag='p'/>
                    < InputLine text='Email address' tag='p'/>
                </div> 
            </div>  
        )
    }
}

export default General;
import React, { useState } from 'react'
import '../styles/footer.css'

const Footer = () => {

    const [state, setState] = useState(false)

    window.addEventListener("scroll", function(){
       setState(true)
    });

    setTimeout(() => {
        setState(false)
    }, 10000)
    
    
    return (
        state &&
        <div className='footer_container'>
            <div>
            <a href="https://www.linkedin.com/in/ankit-mishra07/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <p>Linkedin</p>
            </div>
            <div>
            <a href="https://twitter.com/AnkitMi04386073" target="_blank"><i class="fab fa-twitter-square"></i></a>
            <p>Twitter</p>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/ankit-mishra07/" target="_blank"><i class="fas fa-user-graduate"></i></a>
            <p>Job Opportunity</p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/ankit-mishra07/"><i class="far fa-question-circle"></i></a>
                <p>FAQ</p>
            </div>
        </div>
    )
}

export default Footer

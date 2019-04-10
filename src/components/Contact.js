import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        // Use the history object
        props.history.push('/about')
    }, 2000);
    return (
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit deserunt. Autem distinctio quos quae accusamus itaque quo nihil numquam vitae, quia similique aut quam explicabo labore quod optio nostrum.</p>
      </div>
    )
}

export default Contact;
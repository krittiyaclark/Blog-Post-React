import React from 'react';

const Color = (WrappedComponent) => {

        const colors = ['red', 'pink', 'orange', 'blue', 'yellow', 'green'];
        const randomColor = colors[Math.floor(Math.random() * 5)];
        // const className = randomColor + '-text';

        return (props) => {
            return (
                <div className={randomColor}>
                    <WrappedComponent {...props} />
                </div>
            )
        }
}

export default Color;
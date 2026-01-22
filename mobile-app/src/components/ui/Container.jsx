import React from 'react';

const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-md mx-auto px-4 pb-20 pt-4 ${className}`}>
            {children}
        </div>
    );
};

export default Container;

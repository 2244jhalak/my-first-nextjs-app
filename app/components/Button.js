'use client';

const Button = () => {
    return (
        <div>
            <button onClick={()=>console.log('Button Clicked')} className='btn btn-primary text-white mt-6'>Click Me</button>
        </div>
    );
};

export default Button;
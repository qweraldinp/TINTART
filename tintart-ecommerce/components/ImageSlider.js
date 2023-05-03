import { useState } from "react";

const sliderStyles = {
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
}

const slideStyles = {
    width: '70%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const arrowStyles = {
    position: 'absolute',
    color: '#fff',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '15%',
    justifyContent: 'space-between',
    left: '40%',
    top: '35%',
    transform: "translate(0, -50%)",
    zIndex: 1,
    fontSize: '42px',
    height: '115px',
}

const indivArrowStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#172554',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    strokeWidth:'5px',
}

// const dotsContainerStyles = {
//     display: "flex",
//     justifyContent: "center",
//     position: 'absolute',
//     left: '68%',
//     top: '92%',
// };

// const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
// };

export default function ImageSlider ({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex  === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    
    const goToNext = () => {
        const isLastSlide = currentIndex  === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    
    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex);
    //   };
    
    const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    borderRadius: '0 0 7px 0'
    };

    return (
        <div style={sliderStyles} className='bg-slate-500'>
            {/* text */}
            <div className="flex flex-col w-1/2 p-10 space-y-8 justify-center">
                <div className="flex flex-col space-y-3">
                    <p className="font-bold text-4xl"> 
                        Welcome message here 
                    </p>

                    <p className="text-xl"> 
                        Short desc
                    </p>
                </div>

                <button className="text-lg w-min px-7 rounded-xl py-2 bg-slate-400">Brqoijsd</button>
            </div>
            
            {/* dots
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)} >
                    ●
                </div>
                ))}
            </div> */}

            {/* l&r buttons */}
            <div style={arrowStyles}>
                    <button onClick={goToPrevious} style={indivArrowStyles}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>


                    </button>

                    <button onClick={goToNext} style={indivArrowStyles}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>


                    </button>
            </div>    

            {/* images/slider */}
            <div style={slideStylesWidthBackground}></div>
        </div>
    )
}

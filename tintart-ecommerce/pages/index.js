import NavBar from "@/components/NavBar";
import ImageSlider from '../components/ImageSlider'

export default function Home () {
  const slides = [
    {url: '/images/Edcel/fRIES.png'},
    {url: '/images/merchant1.jpg'},
    {url: '/images/merchant2.jpg'},
    {url: '/images/Edcel/Hairclip.png'},
];

const ImageSliderStyles = {
    height: '400px',
    margin: '0 auto',
    backgroundColor: 'gray',
    borderRadius: '0 0 7px 7px',
}

  return (
    <div className="bg-slate-600 w-full h-screen">
      <NavBar />

      <div className="flex flex-col">
        {/* carousel */}
        <div className='w-full lg:w-3/4' style={ImageSliderStyles}>
            <ImageSlider slides={slides}/>
        </div>
      </div>
    </div>
  )
}
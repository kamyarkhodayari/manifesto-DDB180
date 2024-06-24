import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <div className='mb-10'>
          <h1 className="text-5xl font-bold">Manifesto</h1>
          <h5 className="text-2xl">Queen of the skies, or sustainability bummer?</h5>
          <small className="text-xs text-slate-500">This website is designed with least amount of elements to let you focus on the most important points.</small>
        </div>
        
        <h1 className='text-3xl mb-3 animate-typing'>Air freight produces approximately 40 grams of CO2 per kilometer.</h1>
        <a href="https://www.co2everything.com/co2e-of/freight-air" className="text-[#2563eb]" target='_blank'>[SOURCE]</a>

        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-2xl"></i>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className='text-3xl'>
          The Netherlands is by far the largest supplier of flower bulbs to Japan.
          <small className="block"> accounting for 78% of Japan’s bulb import market in terms of value.</small>
        </h1>
        <a href="https://www.agroberichtenbuitenland.nl/actueel/nieuws/2020/04/15/bloembollen-export-naar-japan-in-2020-mogelijk-door-aanvullende-bkd-inspecties" className="text-[#2563eb]" target='_blank'>[SOURCE]</a>

        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-2xl"></i>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className='text-3xl'>
          The shortest distance (air line) between Holland and Japan is 9,268.21 kilometers.
          <small className="block">Air carriers fly this distance 2 to 4 times each week.</small>
        </h1>
        <a href="https://www.distance.to/Holland/Japan#:~:text=Distance%20from%20Holland%20to%20Japan&text=The%20shortest%20distance%20(air%20line,5%2C759.00%20mi%20(9%2C268.21%20km).&text=The%20shortest%20route%20between%20Holland,157h%2027min." className="text-[#2563eb]" target="_blank">[SOURCE]</a>

        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-2xl"></i>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className='text-3xl'>
          This is around 1,483 Kilograms of CO2 each week.
          <small className="block"><strong>"one thousand four hundred eighty-three" kilograms</strong> of CO2 in a week.</small>
        </h1>

        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-2xl"></i>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className='text-3xl'>
          A tree can offset around 0.48 kilograms of CO2 each week.
          <small className="block">We need more than <strong>3,000 trees</strong> to offset this emission.</small>
        </h1>
        <a href="https://ecotree.green/en/how-much-co2-does-a-tree-absorb#:~:text=A%20tree%20absorbs%20approximately%2025kg%20of%20CO2%20per%20year&text=It's%20based%20on%20the%20estimate,a%20whole%20host%20of%20factors." className="text-[#2563eb]" target="_blank">[SOURCE]</a>

        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-2xl"></i>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className='text-3xl'>
          Do we plant more than 3,000 trees every week for this?
          <small className="block mt-16">Pause and consider this for a moment.<br />It's not just about the numbers; it's all about how each of us consumes.</small>
        </h1>

        <div className="grid grid-cols-2 text-left mt-20 w-1/2 gap-5">
          <div>
            <h5 className="text-lg font-bold">Air freight cargo is fast, but:</h5>
            <p>By better and more efficient planning we can manage our cargo without the necessity for such rapid and frequent delivery method. We can use a more sustainable mode of transport for our goods, if the speed does not matter.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">Air freight cargo has global reach, but:</h5>
            <p>As consumers, we can make mindful choices to buy and consume regionally produced goods, reducing the need for long-distance shipments from across the globe.</p>
          </div>
        </div>

        <div className="absolute bottom-5">
          <span className="block">Kamyar Khodayari Rostam Abad</span>
          <small>Student no. 1700766</small>
        </div>
      </div>
    </div>
  );
}

export default App;

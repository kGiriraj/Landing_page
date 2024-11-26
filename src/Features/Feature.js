import FeatureCard from "./FeatureCard";

function Feature()
{
    return(

      
<div className="pt-20">
<div className="text-center font-semibold" style={{ color: 'rgba(105, 65, 198, 1)' }}> Features </div>

<div
  className="text-center px-5 font-semibold text-[36px]"style={{ color: 'rgba(16, 24, 40, 1)' }}>Analytics that feels like it’s from the future</div>
  <div className="text-center text-[20px]" style={{ color: 'rgba(71, 84, 103, 1)' }}>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</div>

  <FeatureCard/>
</div>

        
   

        
    )
}

export default Feature;
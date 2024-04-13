import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className='btn border-t-red-600 bg-red-400'>BreakingNews</button>
            <Marquee direction={"right"} speed={100} >
  <Link className="mr-10" to='/' >I can be a React component, multiple React components, or just some text......</Link>
  <Link className="mr-10" to='/' >I can be a React component, multiple React components, or just some text......</Link>
  <Link className="mr-10" to='/' >I can be a React component, multiple React components, or just some text......</Link>
  
</Marquee>

        </div>
    );
};

export default BreakingNews;
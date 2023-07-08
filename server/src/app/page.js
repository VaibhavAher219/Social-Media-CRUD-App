import Card from 'components/Card'
import Navigationcard from 'components/Navigationcard'
import PostFormCard from 'components/PostFormCard'



export default function Home() {
   return (
     <div className="flex gap-2 py-3  mt-4 max-w-4xl mx-auto gap-4 ">
       <div className="w-1/3">
       <Navigationcard></Navigationcard>
       </div>
       <div className="grow">
         <PostFormCard/>
       </div>
     </div>
   );
}

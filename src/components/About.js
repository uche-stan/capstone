import andrian from '../assets/icons_assets/Mario and Adrian A.jpg'
import mario from '../assets/icons_assets/Mario and Adrian b.jpg'

export default function About(){

    return(

        <section id="about">

           <div>

           <h2>Little Lemone</h2>
            <h3>Chicago</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. </p>
           </div>


           <div>
            <img src={andrian} alt="Andrian" height={200} />
            <img src={mario} alt="Andrian" height={200} />
           </div>



        </section>
    )
}
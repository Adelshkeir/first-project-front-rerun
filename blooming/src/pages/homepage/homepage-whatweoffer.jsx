import whatweofferone from "../../assets/Cakes.png"
import petitfour from "../../assets/petit-four.png"
const Whatweoffer = () => {
  return (
    <div className="home-page-second-section">
      <h1 className="home-oage-whatweoffer-header">What We Offer</h1>
      <div className="home-page-whatweoffer">




        <div className="home-page-whatweoffer-singlecard">
          <img src={whatweofferone} alt="" />
          <h5 className="home-page-whatweoffer-info">
            <b>The Best Cakes Ever</b>
          </h5>
          <p className="home-page-whatweoffer-info">
            We offer some of the best cakes with a diversity of flavours
          </p>
        </div>




        <div className="home-page-whatweoffer-singlecard">
          <img src={petitfour} alt="" />
          <h5 className="home-page-whatweoffer-info">
            <b>Our exquisite petit-fours</b>
          </h5>
          <p className="home-page-whatweoffer-info">
         Every bite is a harmonious blend of delicate flavors and artisanal craftsmanship
          </p>
        </div>





        <div className="home-page-whatweoffer-singlecard">
          <img src="https://scontent.fbey15-1.fna.fbcdn.net/v/t1.6435-9/187796925_330792961780774_3173512385127998872_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=810d5f&_nc_ohc=NSKOi4S_bmYAX9MhaCf&_nc_ht=scontent.fbey15-1.fna&oh=00_AfC-ViwdRGrvbDBsCXMDWMeOLBflMQ9J61Su0fXp9RQzDg&oe=65ACD474" alt="" />
          <h5 className="home-page-whatweoffer-info">
            <b>Customized!</b>
          </h5>
          <p className="home-page-whatweoffer-info">
           We can customize anything according to your preference
          </p>
        </div>



        
      </div>
    </div>
  );
};

export default Whatweoffer;

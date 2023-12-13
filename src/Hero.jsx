import heroIMG from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Jianbing keytar whatever irony swag pabst marfa pour-over sriracha
            vaporware cardigan everyday carry salvia blog Brooklyn. Ascot
            kombucha DSA helvetica pour-over. Knausgaard lomo everyday carry put
            a bird on it, subway tile letterpress swag meggings bruh gochujang
            sartorial tattooed.
          </p>
        </div>
        <div className="img-container">
          <img src={heroIMG} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

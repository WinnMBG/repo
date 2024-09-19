import { content } from "../Content";
import CV from "../assets/images/Hireme/Cv_Winn_Elie.pdf"

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <a href={CV} download className='btn bg-dark_primary text-white'>{Hireme.btnText}</a>
      </div>
    </section>
  );
};

export default Hireme;

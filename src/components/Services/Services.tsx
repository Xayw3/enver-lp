import './services.scss';

const Services = () => {
  const servicesList = [
    {
      title: 'Development',
      text: 'Create a platform with the best and coolest quality from us.',
      image: './development.svg',
      color: 'rgba(84, 84, 212, 0.1)',
    },
    {
      title: 'UI/UX Designer',
      text: 'We provide UI/UX Design services, and of course with the best quality',
      image: './designer.svg',
      color: 'rgba(240, 64, 55, 0.1)',
    },
    {
      title: 'Graphik Designer',
      text: 'We provide Graphic Design services, with the best designers',
      image: './graphik-design.svg',
      color: 'rgba(254, 220, 90, 0.1)',
    },
    {
      title: 'Motion Graphik',
      text: 'Create a platform with the best and coolest quality from us.',
      image: './motion.svg',
      color: 'rgba(254, 220, 90, 0.1)',
    },
    {
      title: 'Photography',
      text: 'We provide Photography services, and of course with the best quality',
      image: './camera.svg',
      color: 'rgba(84, 84, 212, 0.1)',
    },
    {
      title: 'Videography',
      text: 'Create a platform with the best and coolest quality from us.',
      image: './video-play.svg',
      color: 'rgba(240, 64, 55, 0.1)',
    },
  ];

  return (
    <ul className="services-list">
      {
        servicesList.map(({
          title, text, image, color,
        }) => (
          <li className="services-list__item">
            <div className="services-list__icon" style={{ backgroundColor: color }}>
              <img src={image} alt={title} />
            </div>
            <h4 className="services-list__title">{title}</h4>
            <p className="services-list__description">{text}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default Services;

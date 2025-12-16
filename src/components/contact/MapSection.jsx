const MapSection = () => {
  return (
    <section className="relative h-[400px]">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.886364497098!2d7.492953474992644!3d5.028654139129734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069c9b81ff03c07%3A0x13d29ff25fdd8a8!2sUyo%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1696277358854!5m2!1sen!2sng"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;

const Stats = () => {
  const stats = [
    {
      value: "40+",
      label: "Years Experience"
    },
    {
      value: "Countless",
      label: "Happy Clients"
    },
    {
      value: "24hr",
      label: "Response Time"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
